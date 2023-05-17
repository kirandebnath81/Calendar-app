const getCalendarDates = (date) => {
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const totalDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const calendarCells = new Array(42).fill(undefined);

  let dateCount = 0;

  const calendarDates = calendarCells.map((cell, i) =>
    //here adding starDay with totalDays since we may begin the month in the middle week , thus whatever days are left from the start can be added in the end
    i >= startDay && i < totalDays + startDay
      ? new Date(date.getFullYear(), date.getMonth(), ++dateCount)
      : cell
  );
  return calendarDates;
};

export default getCalendarDates;
