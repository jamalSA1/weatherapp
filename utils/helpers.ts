export const checkDayNightCycle = (sunrise: number, sunset: number) => {
  const currentTime = new Date().getTime() / 1000;
  return currentTime > sunrise && currentTime < sunset;
};

export const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "م" : "ص";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};
