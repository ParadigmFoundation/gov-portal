function timestampToCountdown(timestamp, isUnixTimestamp) {
  let now = Date.now();
  let second = 1000;

  if (isUnixTimestamp) {
    now /= 1000;
    second /= 1000;
  }

  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timeleft = timestamp - now;

  const remainingDays = Math.floor(timeleft / day);
  const remainingHours = Math.floor((timeleft % day) / hour);
  const remainingMinutes = Math.floor((timeleft % hour) / minute);

  return `${remainingDays}d : ${remainingHours}h : ${remainingMinutes}m`;
}

export {
  timestampToCountdown,
};
