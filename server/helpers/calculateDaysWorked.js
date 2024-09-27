const calculateDaysWorked = (startDate) => {
  const start = new Date(startDate);
  const current = new Date();
  const differenceInTime = current - start;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays >= 0 ? differenceInDays : 0;
};

export default calculateDaysWorked
