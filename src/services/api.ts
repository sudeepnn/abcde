import axios from 'axios';

// Base URL for your API
const API_URL = 'https://abcdeforumserver.onrender.com/api/forum'; // Update the port number if different

// Axios instance to set base URL and default headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const createUser = async (name: any, email: any, designation: any) => {
  console.log("here");
  
  const response = await axios.post(API_URL+"/user", { name, email, designation });
  return response.data; // returns created user
};

export const postComment = async (questionId: string | null, answerId: string | null, text: string, userId: string) => {
  const response = await axios.post(API_URL+`/comment/${questionId}/${answerId}`, {
    userId,
    text,
  });
  return response.data;
};

export const postQuestion = async (title: any, description: any, userId: any) => {
  const response = await axios.post(API_URL+"/question", {
    title,
    description,
    userId,
  });
  return response.data;
};

// Function to fetch all questions
export const getAllQuestions = async () => {
  try {
    const response = await api.get('/questions');
    return response.data;
  } catch (error) {
    console.error('Error fetching questions', error);
    throw error;
  }
};

// Function to post a new question


// Function to post an answer to a question
export const postAnswer = async (questionId: string, answerText: string, userId: string) => {
  try {
    const response = await api.post(`/answer/${questionId}`, { answerText, userId });
    return response.data;
  } catch (error) {
    console.error('Error posting answer', error);
    throw error;
  }
};




// Function to get all users (you can modify as needed)
export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    throw error;
  }
};

// Function to delete a comment
export const deleteComment = async (questionId: string, answerIndex: number, commentId: string) => {
  try {
    const response = await api.delete(`/comment/${questionId}/${answerIndex}/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment', error);
    throw error;
  }
};

// Function to delete an answer
export const deleteAnswer = async (questionId: string, answerIndex: number) => {
  try {
    const response = await api.delete(`/answer/${questionId}/${answerIndex}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting answer', error);
    throw error;
  }
};

// Function to delete a question
export const deleteQuestion = async (questionId: string) => {
  try {
    const response = await api.delete(`/question/${questionId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting question', error);
    throw error;
  }
};
