// Here format date from isoDate, which si how server is keeping the date

export const formatDate = (isoDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    seconds: "numeric",
    hour12: true,
  };

  return new Date(isoDate).toLocaleDateString("en-US", options);
};



//keep
// export const formatDate = (isoDate) => {
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     seconds: "numeric",
//     hour12: true,
//   };

//   return new Date(isoDate).toLocaleDateString("en-US", options);
// };
