export const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

const getTimeLabel = (hour) => {
    if(hour < 12) {
        return "AM";
    } else {
        return "PM"
    }
}

const convertHour = hour => {
    if(hour === 0) {
        return 12;
    } else if(hour > 12) {
        return hour - 12;
    } else {
        return hour;
    }
}

export const getCurrentDateTime = (date) => {
    if(twoDaysAgo(date)) {
        return getFullDate(date);
    } else if(oneDayAgo(date)) {
        return `Yesterday at ${getFullTime(date)}`;
    } else {
        return getFullTime(date);
    }
}

const getFullTime = (date) => {
    let dateLabel = getTimeLabel(date.getHours());
    let hours = convertHour(date.getHours())
    let minutes = date.getMinutes();
    return `${hours}:${minutes} ${dateLabel}`
}

const getFullDate = (date) => {
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day}, ${year}`
}

const oneDayAgo = (date) => {

    const oneDay = 1000 * 60 * 60 * 24;
    const oneDayAgo = Date.now() - oneDay;

    return date < oneDayAgo;
}

const twoDaysAgo = (date) => {

    const twoDays = 1000 * 60 * 60 * 24 * 2;
    const twoDaysAgo = Date.now() - twoDays;

    return date < twoDaysAgo;
}