export const fetchUser = () => {
    const userInfo = localStorage.getItem('email') !== "undefined"
     ? JSON.parse(localStorage.getItem('email')) 
     : localStorage.clear(); 
     console.log(userInfo);
    return userInfo;
    }