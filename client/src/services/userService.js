// pass: 123123
const baseUrl = "http://localhost:3030/jsonstore/myUsers";


// register
export const createUser = async (userData) => {
  const currentDate = new Date().toISOString();
  const body = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
    createdAt: currentDate,
    updatedAt: currentDate,
    questions: [],  // Initialize an empty array for questions
    comments: [],   // Initialize an empty array for comments
    likes: 0,       // Initialize the likes count to 0
  };

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('User creation failed, User is pederast!');
  }

  const result = await response.json();
  console.log('User is registered!', result);

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
    throw new Error('User login failed!');
  }

  // Store user ID in local storage
  localStorage.setItem('userId', user._id);

  console.log('User is here!', user);
  return user;
}