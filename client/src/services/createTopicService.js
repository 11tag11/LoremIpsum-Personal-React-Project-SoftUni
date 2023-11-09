const baseUrl = 'http://localhost:3030/jsonstore/latestTopics';

export const createTopic = async (topicData) => {
    const currentDate = new Date().toISOString();
    const body = {
        heading: topicData.heading,
        question: topicData.question,
        // author
        createdAt: currentDate,
        updatedAt: currentDate,
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
    console.log('Ye-ye');
    return result;
};