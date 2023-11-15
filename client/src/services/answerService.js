import { formatDate } from "../utils/dateUtils";

const baseUrl = "http://localhost:3030/jsonstore";

export const createAnswer = async (topicId, author, answer) => {
  const currentDate = new Date();
  const displayedDate = formatDate(currentDate);

  const body = {
    topicId,
    createdAt: displayedDate,
    updatedAt: displayedDate,
    author,
    answer,
  };
  

  const response = await fetch(`${baseUrl}/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Answer creation failed!");
  }
  const result = await response.json();
  console.log("Answer is created:", result);
  return result;
};