/**
 * Format a Big Number to a string with a number of decimal places. If no decimals places are provided format the string normally as format ether
 * @param value The Big Number value to format
 * @param dp The number of decimal places to return. If not defined will return all
 */
export const formatBigNumberString = (value: string, dp: number = 2) => {
  const etherString = value;

  if (!dp) return etherString;

  const [leading, trailing] = etherString.split(".");

  const leadingWithCommas = leading.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (trailing.length < dp)
    return `${leadingWithCommas}.${trailing.padEnd(dp, "0")}`;
  if (trailing.length > dp)
    return `${leadingWithCommas}.${trailing.slice(0, dp)}`;

  return `${leadingWithCommas}.${trailing}`;
};
