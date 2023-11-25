import { formatDate } from "../utils/dateUtils";
import * as request from '../library/request';

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
  const result = await request.get(baseUrl);

  // Filter answers based on the topicId
  const filteredAnswers = Object.values(result)
    .filter(answer => answer.topicId === topicId);

  console.log('Filtered Answers for Topic:', filteredAnswers);
  return filteredAnswers;
};





