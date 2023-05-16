import { Box, Flex, Wrap, chakra } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { dashboards, IDashboard, IDashboardTag } from "../../constants";
import { DashboardCard } from "./SmallCard";
import { TagSelector } from "./TagSelector";
import { DashboardCardDetailed } from "./DetailedCard";
import { DashboardListItem } from "./ListView";
import { IDashboardSize, SizeSelector } from "./SizeSelector";

const DashboardComponent = (
  dashboard: IDashboard
): Record<IDashboardSize, ReactElement> => ({
  [IDashboardSize.Small]: <DashboardCard {...dashboard} />,
  [IDashboardSize.Detailed]: <DashboardCardDetailed {...dashboard} />,
  [IDashboardSize.List]: <DashboardListItem {...dashboard} />,
});

export const Dashboards = () => {
  const [selectedTag, setSelectedTag] = useState<IDashboardTag>();
  const [selectedSize, setSelectedSize] = useState<IDashboardSize>(
    IDashboardSize.Small
  );

  /**
   * Return only selected dashboards by tag if filtering is enabled,
   * else return all dashboards
   */
  const filteredDashboards = selectedTag
    ? dashboards.filter(({ tags }) => tags?.includes(selectedTag))
    : dashboards;

  return (
    <Flex>
      <TagSelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <SizeSelector
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <Flex gap="10px">
        {filteredDashboards.map((_dash) => {
          const SelectedComponent = () =>
            DashboardComponent(_dash)[selectedSize];
          return <SelectedComponent key={_dash.name} {..._dash} />;
        })}
      </Flex>
    </Flex>
  );
};
