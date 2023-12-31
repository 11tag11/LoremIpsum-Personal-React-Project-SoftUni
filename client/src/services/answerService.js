import { formatDate } from "../utils/dateUtils";
import * as request from "../library/request";

const baseUrl = "http://localhost:3030/data/answers";

export const createAnswer = async (topicId, answer, auth, accessToken) => {
  const currentDate = new Date();
  const displayedDate = formatDate(currentDate);
  if (!auth || !auth.accessToken) {
    throw new Error("User not authenticated. Cannot create answer.");
  }

  const body = {
    topicId,
    userId: auth._id,
    username: auth.username,
    _createdOn: displayedDate,
    _updatedOn: displayedDate,
    answer,
  };

  const result = await request.post(baseUrl, body);
  return result;
};

export const getAnswersForTopic = async (topicId) => {
  const result = await request.get(`${baseUrl}?topicId=${topicId}`);

  const filteredAnswers = Object.values(result).filter(
    (answer) => answer.topicId === topicId
  );
  return filteredAnswers;
};

export const getAnswerById = async (userId) => {
  const result = await request.get(`${baseUrl}/${userId}`);
  return result;
};

export const getAnswersForUser = async (ownerId) => {
  const result = await request.get(
    `${baseUrl}?where=_ownerId%3D%22${ownerId}%22`
  );
  return Object.values(result);
};

export const editAnswer = async (answerId, updatedAnswer) => {
  const result = await request.put(`${baseUrl}/${answerId}`, updatedAnswer);
  return result;
};

export const remove = async (answerId) => {
  const result = await request.remove(`${baseUrl}/${answerId}`);
  return result;
};
