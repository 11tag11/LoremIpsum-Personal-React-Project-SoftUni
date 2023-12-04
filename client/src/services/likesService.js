import * as request from '../library/request';

const baseUrl = "http://localhost:3030/data/likes";

export const getAllLikes = async () => {
    const response = await request.get(`${baseUrl}`);
    const result = Object.values(response);
    return result;
}

export const addLike = async (answerId, userId) => {

  console.log('Logging answerId:', answerId);

  const result = await request.post(baseUrl, {answerId, userId});
  return result;
};

// export const getLikesForAnswers = async (answerIds) => {
//   const result = await request.get(`${baseUrl}?answerId=${answerIds.join(',')}`);
//   return result;
// };

export const userHasLikedAnswer = async (answerId, userId) => {
  const result = await request.get(`${baseUrl}?answerId=${answerId}&userId=${userId}`);
  return result.length > 0;
};

