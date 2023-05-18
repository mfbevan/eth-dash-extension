import { NextPage } from "next";
import { AppContainer, Navigation } from "../components";
import { useEffect } from "react";
import { StorageService } from "../services";
import { useNavigationStore } from "../stores";

const Extension: NextPage = () => {
  useEffect(() => {
    StorageService.getItem("page").then((page) =>
      useNavigationStore.setState({ page: page ? parseInt(page) : 0 })
    );
  }, []);

  return (
    <AppContainer>
      <Navigation />
    </AppContainer>
  );
};

export default Extension;
