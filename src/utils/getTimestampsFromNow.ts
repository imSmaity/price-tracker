export const getTimestampsFromNow = (timeFrame: string = "1w") => {
  const now = new Date();
  let pastDate = new Date(now);

  switch (timeFrame) {
    case "1h":
      pastDate.setHours(now.getHours() - 1);
      break;
    case "1d":
      pastDate.setHours(now.getHours() - 12);
      break;
    case "3d":
      pastDate.setDate(now.getDate() - 3);
      break;
    case "1w":
      pastDate.setDate(now.getDate() - 7);
      break;
    case "2w":
      pastDate.setDate(now.getDate() - 14);
      break;
    case "3w":
      pastDate.setDate(now.getDate() - 21);
      break;
    case "1m":
      pastDate.setMonth(now.getMonth() - 1);
      break;
    case "6m":
      pastDate.setMonth(now.getMonth() - 6);
      break;
    case "1y":
      pastDate.setFullYear(now.getFullYear() - 1);
      break;
    default:
      return {
        currentTimestamp: now.getTime(),
        pastTimestamp: "1231439400000",
      };
  }

  const currentTimestamp = now.getTime(); // Current time timestamp
  const pastTimestamp = pastDate.getTime(); // Timestamp for the past date

  return { currentTimestamp, pastTimestamp };
};
