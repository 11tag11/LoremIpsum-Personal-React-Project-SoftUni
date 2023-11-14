import { formatDate } from "../utils/dateUtils";
const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
  const response = await fetch(`${baseUrl}/latestTopics`);
  const result = await response.json();
  return Object.values(result);
};

export const createTopic = async (topicData) => {
    const currentDate = new Date(); 
    const displayedDate = formatDate(currentDate); 
    // Fetch user data to map user ID to username
  const userDataResponse = await fetch(`${baseUrl}/myUsers`);
  const userData = await userDataResponse.json();

  // Map user ID to username
  const userIdToUsername = {};
  Object.values(userData).forEach((user) => {
    userIdToUsername[user._id] = user.username;
  });

  // Create an initial topic object with extended fields
  const topicObject = {
    heading: topicData.heading,
    question: topicData.question,
    createdAt: displayedDate,
    updatedAt: displayedDate,
    author: userIdToUsername[topicData.userId],  // Use the mapped username
    comments: [],  // Initialize an empty array for comments
    likes: 0,  // Initialize the likes count to 0
    userId: topicData.userId,  // Include user ID directly in the topic data
  };

    const body = {
        topic: topicObject,  // Wrap the topic data in a 'topic' obj
    };

    const response = await fetch((`${baseUrl}/latestTopics`), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error('Post creation failed!');
    };
    const result = await response.json();
    console.log('Topic is created:', result);
    return result;
};