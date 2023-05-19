/**
 * Function that capitalizes the first letter of a string
 * @param string doctor who
 * @returns Doctor who
 */
export const capitalizeFL = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
