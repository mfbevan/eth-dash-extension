import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BsListTask } from "react-icons/bs";
import { TiThLarge } from "react-icons/ti";
import { FaThLarge } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export enum IDashboardSize {
  Small = "size",
  Detailed = "detailed",
  List = "list",
}

interface IDashboardDetails {
  label: string;
  Icon: IconType;
}

const DashboardSizeDetails: Record<IDashboardSize, IDashboardDetails> = {
  [IDashboardSize.Small]: { label: "Card View", Icon: TiThLarge },
  [IDashboardSize.Detailed]: { label: "Detailed Card View", Icon: FaThLarge },
  [IDashboardSize.List]: { label: "List View", Icon: BsListTask },
};

interface ISizeSelector {
  selectedSize?: IDashboardSize;
  setSelectedSize: Dispatch<SetStateAction<IDashboardSize>>;
}

export const SizeSelector = ({
  selectedSize,
  setSelectedSize,
}: ISizeSelector) => {
  const handleSelect = (size: IDashboardSize) => {
    setSelectedSize(size);
  };

  return (
    <Flex
      position="absolute"
      right="30px"
      top="60px"
      gap="5px"
      justify="center"
    >
      {Object.values(IDashboardSize).map((size) => {
        const { Icon, label } = DashboardSizeDetails[size];
        return (
          <Tooltip key={size} label={label} rounded="md" border="1px solid">
            <IconButton
              size="xs"
              aria-label={label}
              icon={<Icon />}
              onClick={() => handleSelect(size)}
              colorScheme={selectedSize === size ? "teal" : "gray"}
            />
          </Tooltip>
        );
      })}
    </Flex>
  );
};
