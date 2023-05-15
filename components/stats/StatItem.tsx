import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Skeleton,
  SkeletonText,
  Box,
  Flex,
} from "@chakra-ui/react";

interface IStatItemProps {
  label: string;
  value?: string;
  helperText?: string;
  color?: string;
  isLoading?: boolean;
}

export const StatItem = ({
  label,
  value,
  helperText,
  color,
  isLoading,
}: IStatItemProps) => {
  const bg = useColorModeValue("gray.50", "gray.800");

  if (isLoading) {
    return (
      <Skeleton h="85px" bg="gray.50" rounded="lg" p="10px" flex={1}>
        <SkeletonText
          startColor="pink.500"
          endColor="orange.500"
          skeletonHeight={2}
        />
      </Skeleton>
    );
  }
  return (
    <Stat bg={bg} rounded="lg" p="10px" color={color}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>{helperText}</StatHelpText>
    </Stat>
  );
};
