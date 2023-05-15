import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from "@chakra-ui/react";

interface IStatItemProps {
  label: string;
  value: string;
  helperText?: string;
  color?: string;
}

export const StatItem = ({
  label,
  value,
  helperText,
  color,
}: IStatItemProps) => (
  <Stat
    bg={useColorModeValue("gray.50", "gray.800")}
    rounded="lg"
    p="10px"
    color={color}
  >
    <StatLabel>{label}</StatLabel>
    <StatNumber>{value}</StatNumber>
    <StatHelpText>{helperText}</StatHelpText>
  </Stat>
);
