import { Flex, Text, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { Socials } from "../socials";

export const Information = () => (
  <Flex flexDirection="column" gap="20px" pb="30px">
    <StyledText>
      Seamlessly access all your favourite Ethereum dashboards in one convenient
      location. Monitor the latest network stats, keep an eye on Ethereum
      staking, and even monitor your favourite wallets, with plenty more
      features coming soon!
    </StyledText>
    <StyledText>
      The ethdash Chrome extension is a companion to the{" "}
      <StyledLink href="https://www.ethdash.xyz">ethdash.xyz</StyledLink> site
      created in 2022. We put all of your favourite Ethereum Dashboards in one
      place, and now we&apos;re taking it one step further by having them
      one-click away as a browser extension. Thanks again to Superphiz for
      getting the idea started! Check out the site at{" "}
      <StyledLink href="https://www.ethdash.xyz">ethdash.xyz</StyledLink>
    </StyledText>
    <StyledText>
      If you&apos;re interested in contributing to the project, please reach out
      to us below. We&apos;re always looking for new ideas and ways to improve
      the experience.
    </StyledText>
    <Socials />
  </Flex>
);

const StyledText = chakra(Text, {
  baseStyle: {
    fontSize: "0.8rem",
  },
});

const StyledLink = chakra(Link, {
  baseStyle: {
    textDecoration: "underline",
  },
});
