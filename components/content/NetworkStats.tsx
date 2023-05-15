import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

export const NetworkStats = () => {
  const { data } = useQuery({
    queryFn: () => axios.get("/api/health"),
  });

  return <Text>{data?.data}</Text>;
};
