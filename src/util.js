export const getDate = (mon) => {
  const year = new Date().getFullYear();
  const month = [
    "Jan, " + year,
    "Feb, " + year,
    "Mar, " + year,
    "Apr, " + year,
    "May, " + year,
    "Jun, " + year,
    "Jul, " + year,
    "Aug, " + year,
    "Sep, " + year,
    "Oct, " + year,
    "Nov, " + year,
    "Dec, " + year,
  ];
  const lastDate = new Date(year, mon + 1, 0).getDate();
  const dateFromCurrent = lastDate - new Date().getDate() + 1;

  const dates = Array.from(
    { length: mon === new Date().getMonth() + 1 ? lastDate : dateFromCurrent },
    (x, i) => i
  );
  return {
    lastDate,
    month,
    monthFromCurrent: month.slice(getMonth()),
    year,
    dates: dates
      .map((date, index) => parseInt(lastDate - date))
      .sort((a, b) => a - b),
  };
};

export const getMonth = () => {
  return new Date().getMonth();
};

export const TIME = [
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
