/**
 * Shortens @param address to length based on lead and trail length including ellipsis separation
 * {lead length}...{trail length}
 */
export const shortenAddress = (
  address: string,
  leadLength = 8,
  trailLength = 5
): string => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, leadLength)}...${address.slice(
    address.length - trailLength,
    address.length
  )}`;
};
