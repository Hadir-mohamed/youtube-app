export function parseISO8601TimePattern(durationString) {
  const numbers = "\\d+(?:[\\.,]\\d{0,3})?";
  const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
  const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
  const pattern = new RegExp(`P(?:${datePattern}(?:${timePattern})?)`);
  const objMap = ["years", "months", "days", "hours", "minutes", "seconds"];
  return durationString
    .match(pattern)
    .slice(1)
    .reduce((prev, next, idx) => {
      prev[objMap[idx]] = parseFloat(next) || 0;
      return prev;
    }, {});
}

export function getVideoDurationString(iso8601DurationString) {
  if (!iso8601DurationString || iso8601DurationString === "") {
    return "";
  }

  //   let { days, hours, minutes, seconds } = new Date(iso8601DurationString);
  let { days, hours, minutes, seconds } = parseISO8601TimePattern(
    iso8601DurationString
  );

  let secondsString = seconds.toString();
  let minutesString = minutes.toString();
  let accumulatedHours = days * 24 + hours;

  if (seconds < 10) {
    secondsString = seconds.toString().padStart(2, "0");
  }
  if (minutes < 10 && hours !== 0) {
    minutesString = minutesString.toString().padStart(2, "0");
  }
  if (!accumulatedHours) {
    return [minutesString, secondsString].join(":");
  } else {
    return [accumulatedHours, minutesString, secondsString].join(":");
  }
}

export const nFormatter = (num) => {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}