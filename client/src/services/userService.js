import { formatDate } from "../utils/dateUtils";
// pass: 123123
const baseUrl = "http://localhost:3030/jsonstore/myUsers"; //here data/jsonstore
// export const createUser = async (userData) => {
//   const currentDate = new Date();
//   const displayedDate = formatDate(currentDate);
//   const body = {
//     username: userData.username,
//     email: userData.email,
//     password: userData.password,
//     createdAt: displayedDate,
//     updatedAt: displayedDate,
//     questions: [], // Initialize an empty array for questions
//     likes: 0, // Initialize the likes count to 0
//   };

//   const response = await fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error("User creation failed, User is pederast!");
//   }

//   const result = await response.json();
//   console.log("User is registered!", result);

//   return result;
// };
// register
export const createUser = async (userData) => {
  const currentDate = new Date();
  const displayedDate = formatDate(currentDate);
  const body = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
    createdAt: displayedDate,
    updatedAt: displayedDate,
    createdTopics: [], // Initialize an empty array for created topics
    answers: [],  // Initialize an empty array for answers,
  };

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("User creation failed, User is pederast!");
  }

  const result = await response.json();
  console.log("User is registered!", result);

  return result;
};

// login
export const loginUser = async (userData) => {
  const body = {
    email: userData.email,
    password: userData.password,
  };

  const response = await fetch(baseUrl);
  const data = await response.json();

  const user = Object.values(data).find(
    (user) => user.email === body.email && user.password === body.password
  );

  if (!user) {
    throw new Error("User login failed!");
  }

  // Store user ID in local storage
  // localStorage.setItem("userId", user._id);

  console.log("User is here!", user);
  return user;
};
