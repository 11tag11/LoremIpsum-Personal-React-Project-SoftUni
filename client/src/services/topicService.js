import { formatDate } from "../utils/dateUtils";
import * as request from '../library/request';
const baseUrl = 'http://localhost:3030/data/latestTopics'; 

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
}

export const getOne = async (topicId) => {
  // console.log(topicId);
  const result = await request.get(`${baseUrl}/${topicId}`);

  return result;
}

export const getLastThree = async () => {
  const result = await request.get((baseUrl));
  const data = result.slice(-3).reverse();
  return data;
};



export const createTopic = async (topicData) => {
  const result = await request.post(baseUrl, topicData);

  return result;
};

export const editTopic = async (topicId, updatedTopicData) => {
  const result = await request.put(`${baseUrl}/${topicId}`, updatedTopicData);
  return result;
};

export const remove = async (topicId) => {
  const result = await request.remove(`${baseUrl}/${topicId}`);

  return result;
};

export const getTopicsForUser = async (ownerId) => {
  const result = await request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`);
  return Object.values(result);
};