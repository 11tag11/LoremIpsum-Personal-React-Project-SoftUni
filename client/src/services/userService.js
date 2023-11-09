// 07.11. Successful :)
const baseUrl = "http://localhost:3030/jsonstore/myUsers";

export const createUser = async (userData) => {
  const currentDate = new Date().toISOString();
  const body = {
    username: userData.username,
    email: userData.email,
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
    throw new Error('User creation failed, User is pederast!');
  }

  const result = await response.json();
  console.log('User is gay!');
  return result;
};
