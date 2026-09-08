import axios from 'axios';
import { TokenManager } from '../Models/ManegeToken';

const Token = new TokenManager();

async function getProjects() {
  try {
    const response = await axios.get('http://localhost:8000/project', {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
}


async function CreateProject({ title, context }) {
  try {
    const response = await axios.post(
      'http://localhost:8000/project', { title, context }, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      }});

    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
}

async function DeleteProjectApi(projectId) {
  try {
    const response = await axios.delete(`http://localhost:8000/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
}

async function PutProject({ projectId, title, context }) {
  try {
    const response = await axios.put(`http://localhost:8000/project/${projectId}`, {
      title,
      context,
    }, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getProjectTasks() {
  try {
    const response = await axios.get('http://localhost:8000/task', {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getProjects, CreateProject, PutProject, getProjectTasks, DeleteProjectApi };