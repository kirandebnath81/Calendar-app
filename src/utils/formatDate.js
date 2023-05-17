const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
export default formatDate;
