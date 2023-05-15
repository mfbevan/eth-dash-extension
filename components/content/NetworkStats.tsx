import { Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { apiInstance } from "../../api";
import axios from "axios";

export const NetworkStats = () => {
  const { data } = useQuery({
    queryFn: () => apiInstance.get("health"),
  });

  return <Text>{data?.data}</Text>;
};
