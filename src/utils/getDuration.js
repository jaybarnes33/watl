export const getDuration = (duration) => {
  if (!duration) return;
  const numDuration = Number.parseInt(duration);

  return numDuration >= 12
    ? "Full day"
    : duration + " " + (duration > 1 ? "hours" : "hour");
};
