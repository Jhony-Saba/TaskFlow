import axios from 'axios';
import { TokenManager } from '../Models/ManegeToken';
const Token = new TokenManager();

async function getTasks(projectId){
try {
  const response =await axios.get(`http://localhost:8000/task/${projectId}`, 
        {headers:{Authorization:`Bearer ${Token.getToken()}`}});
       
        return response.data;
  
} catch (error) {
    console.error(error);
}
}
async function getTasksStatistics(projectId){
try {
  const response =await axios.get(`http://localhost:8000/task/percentage/${projectId}`,
    {headers:{Authorization:`Bearer ${Token.getToken()}`}});
  return response.data;
  
} catch (error) {
  console.log(error)
  
}

}
async function CreateTask({ title, projectId, status,deadline }) {
    try {
    const response = await axios.post(
      'http://localhost:8000/task', { title, status ,projectId ,deadline}, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      }});

    return response.data;
  } catch (error) {
    console.error(error);
    alert(error);
    // throw error;
  }
}

async function DeleteTask(taskId) {
      try {
    const response = await axios.delete(
  `http://localhost:8000/task/${taskId}`, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      }});

    return response.data;
  } catch (error) {
    console.error(error);
    alert(error);
    // throw error;
  }
}

async function PutTask({ title,taskId,status ,deadline }) {
      try {
    const response = await axios.put(
  `http://localhost:8000/task/${taskId}`, { title, status ,deadline }, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      }});

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {CreateTask,DeleteTask,PutTask,getTasks,getTasksStatistics}