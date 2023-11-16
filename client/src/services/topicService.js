import { formatDate } from "../utils/dateUtils";
const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
  const response = await fetch(`${baseUrl}/latestTopics`);
  const result = await response.json();
  return Object.values(result);
};

export const getOne = async (topicId) => {
  const response = await fetch(`${baseUrl}/latestTopics/${topicId}`);
  const result = await response.json();
  return result;
};

export const createTopic = async (topicData) => {
  const currentDate = new Date(); 
  const displayedDate = formatDate(currentDate);

  const topicObject = {
    heading: topicData.heading,
    question: topicData.question,
    createdAt: displayedDate,
    updatedAt: displayedDate,
    likes: 0,  // Initialize the likes count to 0
    answers: [],  // Initialize an empty array for answers
  };

  const body = {
    topic: topicObject,  // Wrap the topic data in a 'topic' obj
  };

  const response = await fetch(`${baseUrl}/latestTopics`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Topic creation failed!');
  }

  const result = await response.json();
  console.log('Topic is created:', result);
  return result;
};
