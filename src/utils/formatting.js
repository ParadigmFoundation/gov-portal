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

function shortenAddress(address) {
  return `${address.substring(0, 6)}...${address.substring(address.length - 6, address.length)}`;
}

function getTimestampBadge(timestamp) {
  const day = 60 * 60 * 24;
  const week = day * 7;

  const now = Date.now() / 1000;
  const timeleft = timestamp - now;

  if (timeleft < 0) {
    return 'ended';
  }

  if (timeleft < day) {
    return 'endingSoon';
  }

  if (timeleft > week) {
    return 'new';
  }

  return 'noBadge';
}

function timestampToAge(timestamp) {
  const now = Date.now() / 1000;
  const age = now - timestamp;

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  const ageInDays = Math.floor(age / day);
  const ageInHours = Math.floor((age % day) / hour);
  const ageInMinutes = Math.floor((age % hour) / minute);

  return `${ageInDays}d : ${ageInHours}h : ${ageInMinutes}m`;
}

function formatAmount(amount) {
  if (amount.includes('.')) {
    const parts = amount.split('.');

    if (parts[0].length >= 6) {
      return parts[0];
    }

    if (parts[0] === '0') {
      return `00000.${parts[1].substring(0, 1)}`;
    }

    if (parts[0].length < 6) {
      let formattedAmount = '';

      for (let i = 0; i < 6 - parts[0].length; i += 1) {
        formattedAmount += '0';
      }

      formattedAmount += parts[0];

      return formattedAmount;
    }

    return `00000.${parts[1].substring(0, 0)}`;
  }

  if (amount.length >= 6) {
    return amount;
  }

  let formattedAmount = '';

  for (let i = 0; i < 6 - amount.length; i += 1) {
    formattedAmount += '0';
  }

  formattedAmount += amount;

  return formattedAmount;
}

export {
  formatAmount,
  timestampToCountdown,
  shortenAddress,
  getTimestampBadge,
  timestampToAge,
};
