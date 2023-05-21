export const secondsToTime = (seconds: number): string => {
    const date = new Date(0);
    date.setSeconds(seconds);

    return date.toISOString().substring(14, 19);
};
