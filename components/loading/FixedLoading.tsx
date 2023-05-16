import { Spinner } from "@chakra-ui/react";

export const FixedLoading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return <Spinner opacity="0.2" position="absolute" right="30px" top="30px" />;
};
