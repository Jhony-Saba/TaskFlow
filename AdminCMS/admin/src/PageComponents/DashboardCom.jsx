import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProjects, CreateProject, DeleteProjectApi } from '../Api_Connections/projectApi.js';
import { Project } from '../Models/Project.js';
import { Link } from 'react-router-dom';
import { Context, Title } from '../Components/Inputs.jsx';

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
          <DeleteProject projectId={project.projectid} />
        </div>
      ))}
    </>
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
   const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/Login';};
  return (
    <header className="header">
      <h1>TaskFlow</h1>
      <div>
        <Link to={'/DisplayProjects'}>DashBoard</Link>
        <Link to={'/AddProject'}>ADD Project</Link>
      </div>
      <button onClick={handleLogout}>Logn Out</button>
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


export { DisplayProjects, Header, AddProject, ProjectProvider, UseProjectContext };
