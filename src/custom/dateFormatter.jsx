// option value
// numeric
// 2-digit
// long
// short
// narrow
// https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020

const ShortDate = (date) => {
  const options = {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
const ShortDateNumber = (date) => {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
const ShortDateFull = (date) => {
  const options = {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
const LongDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
export { ShortDate, ShortDateNumber, ShortDateFull, LongDate };
