const baseUrl = 'http://localhost:3030/jsonstore/latestTopics';

export const createTopic = async (topicData) => {
    const currentDate = new Date().toISOString();

    // // Create an initial topic object with extended fields
    // const topicObject = {
    //     heading: topicData.heading,
    //     question: topicData.question,
    //     createdAt: currentDate,
    //     updatedAt: currentDate,
    //     author: topicData.userId,  // You need to specify the author (user) here
    //     comments: [],  // Initialize an empty array for comments
    //     likes: 0,  // Initialize the likes count to 0
    //     userId: topicData.userId,  // Include user ID directly in the topic data
    // };

    // Fetch user data to map user ID to username
  const userDataResponse = await fetch('http://localhost:3030/jsonstore/myUsers');
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
    createdAt: currentDate,
    updatedAt: currentDate,
    author: userIdToUsername[topicData.userId],  // Use the mapped username
    comments: [],  // Initialize an empty array for comments
    likes: 0,  // Initialize the likes count to 0
    userId: topicData.userId,  // Include user ID directly in the topic data
  };

    const body = {
        topic: topicObject,  // Wrap the topic data in a 'topic' field
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error('Post creation failed!');
    }

    const result = await response.json();
    console.log('Topic is created:', result);

    return result;
};