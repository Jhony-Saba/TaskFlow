import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProjects, CreateProject, DeleteProjectApi, PutProject } from '../Api_Connections/projectApi.js';
import { CreateTask, DeleteTask, PutTask, getTasks, getTasksStatistics } from '../Api_Connections/taskApi.js';
import { Project } from '../Models/Project.js';
import { Link, useNavigate } from 'react-router-dom';
import { Context, SelectTaskStatus, Title } from '../Components/Inputs.jsx';
import { Task } from '../Models/Task.js';


const ProjectContext = createContext(null);

function ProjectProvider({ children }) {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const value = useMemo(() => ({ refreshKey, triggerRefresh }), [refreshKey]);

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

function UseProjectContext() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error('useProjectContext must be used inside ProjectProvider');
  }

  return context;
}

function DisplayProjects() {
  const [projects, setProjects] = useState([]);
  const { refreshKey } = UseProjectContext();

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      if (data) {
        const mapped = data.map((item) => new Project(item.title, item.context, item._id));
        setProjects(mapped);
      }
    };

    loadProjects();
  }, [refreshKey]);

  return (
    <>
      {projects.map((project) => (
        <div key={project.projectid}>
          <h3>{project.title}</h3>
          <p>{project.context}</p>
          <ProjectStatic projectId={project.projectid} />
          <EditProject project={project} />
          <DeleteProject projectId={project.projectid} />
          <DisplayTask projectId={project.projectid} />
        </div>
      ))}
    </>
  );
}

function EditProject({ project }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [context, setContext] = useState(project.context || '');
  const [isRunning, setIsRunning] = useState(false);
  const { triggerRefresh } = UseProjectContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || isRunning) return;

    setIsRunning(true);
    try {
      await PutProject({ projectId: project.projectid, title: title.trim(), context: context.trim() });
      setIsEditing(false);
      triggerRefresh();
    } catch (error) {
      alert(error.response?.data?.message || 'Unable to update project');
    } finally {
      setIsRunning(false);
    }
  };

  if (!isEditing) {
    return <button onClick={() => setIsEditing(true)}>Edit project</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title title={title} setTitle={setTitle} />
      <Context context={context} setContext={setContext} />
      <button type="submit" disabled={isRunning}>{isRunning ? 'Saving...' : 'Save project'}</button>
      <button type="button" onClick={() => setIsEditing(false)} disabled={isRunning}>Cancel</button>
    </form>
  );
}

function ProjectStatic({ projectId }) {
  const [statics, setStatics] = useState(null);
  const { refreshKey } = UseProjectContext();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getTasksStatistics(projectId);
        if (data) {
          setStatics({
            tasks: data.totalTasks,
            toDoTasks: data.ToDoTasks ?? data.toDoTasks,
            percentage: data.percentage,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadProjects();
  }, [refreshKey, projectId]);

  if (!statics) {
    return <p>Loading statistics...</p>;
  }

  return (
    <div id="projectStatic">
      <h2>Project Statistics</h2>
      <p>Total Tasks: {statics.tasks}</p>
      <p>To Do Tasks: {statics.toDoTasks}</p>
      <p>Percentage: {statics.percentage}</p>
    </div>
  );
}

function DeleteProject({ projectId }) {
  const { triggerRefresh } = UseProjectContext();

  const Deleteit = async () => {
    await DeleteProjectApi(projectId);
    triggerRefresh();
  };

  return <button onClick={Deleteit}>Delete</button>;
}

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login', { replace: true });
  };
  return (
    <header className="header">
      <h1>TaskFlow</h1>
      <div>
        <Link to={'/dashboard/projects'}>Dashboard</Link>
        <Link to={'/dashboard/add-project'}>Add project</Link>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </header>
  );
}

function AddProject() {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const { triggerRefresh } = UseProjectContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRunning(true);
    const projectData = { title, context };
    await CreateProject(projectData);
    triggerRefresh();
    setTitle('');
    setContext('');
    setIsRunning(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title title={title} setTitle={setTitle} />
      <Context context={context} setContext={setContext} />
      <button type="submit" disabled={isRunning}>
        {isRunning ? 'Adding project...' : 'Add Project'}
      </button>
    </form>
  );
}

function AddTask({ projectId }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('To Do');
  const [isRunning, setIsRunning] = useState(false);
  const { triggerRefresh } = UseProjectContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRunning(true);
    const taskData = { title, projectId, status };
    await CreateTask(taskData);
    triggerRefresh();
    setTitle('');
    setStatus('To Do');
    setIsRunning(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title title={title} setTitle={setTitle} />
      <SelectTaskStatus status={status} setStatus={setStatus} />
      <button type="submit" disabled={isRunning}>
        {isRunning ? 'Adding task' : 'Add Task'}
      </button>
    </form>
  );
}

function DisplayTask({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const { refreshKey, triggerRefresh } = UseProjectContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks(projectId);
        if (data) {
          const mapped = data.map(
            (item) => new Task(item.title, item.status, item.projectId, item._id)
          );
          setTasks(mapped);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, [projectId, refreshKey]);

  const handleDelete = async (taskId) => {
    await DeleteTask(taskId);
    triggerRefresh();
  };

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleVisible}>visible</button>
      <div id="taskbody" style={{ display: isVisible ? 'block' : 'none' }}>
        <AddTask projectId={projectId} />
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <SelectTaskStatus status={task.status} />
            <EditTask task={task} />
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

function EditTask({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [isRunning, setIsRunning] = useState(false);
  const { triggerRefresh } = UseProjectContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || isRunning) return;

    setIsRunning(true);
    try {
      await PutTask({ taskId: task.id, title: title.trim(), status });
      setIsEditing(false);
      triggerRefresh();
    } catch (error) {
      alert(error.response?.data?.message || 'Unable to update task');
    } finally {
      setIsRunning(false);
    }
  };

  if (!isEditing) {
    return <button onClick={() => setIsEditing(true)}>Edit task</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title title={title} setTitle={setTitle} />
      <SelectTaskStatus status={status} setStatus={setStatus} />
      <button type="submit" disabled={isRunning}>{isRunning ? 'Saving...' : 'Save task'}</button>
      <button type="button" onClick={() => setIsEditing(false)} disabled={isRunning}>Cancel</button>
    </form>
  );
}

export { DisplayProjects, Header, AddProject, ProjectProvider, UseProjectContext };
