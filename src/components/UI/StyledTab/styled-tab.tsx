import React, { useCallback, useState } from "react";
import { Content, MainContainer, Tab, TabContainer } from "./styled-tab.style";

enum TabValues {
  ALL = "all",
  UNLIMITED = "unlimited",
  TOEIC = "toeic",
  EIKEN = "eiken",
}

type StyledTabProps = {
  children: React.ReactNode;
};

export const StyledTab = ({ children }: StyledTabProps) => {
  const [activeTab, setActiveTab] = useState<TabValues>(TabValues.ALL);
  const isActive = useCallback(
    (tabValue: TabValues) => {
      return activeTab === tabValue;
    },
    [activeTab],
  );
  return (
    <MainContainer>
      <TabContainer>
        <Tab
          isActive={isActive(TabValues.ALL)}
          onClick={() => setActiveTab(TabValues.ALL)}
          isAllowed
        >
          すべて
        </Tab>
        <Tab isAllowed={false}>Unlimited</Tab>
        <Tab isAllowed={false}>TOEIC</Tab>
        <Tab isAllowed={false}>英検</Tab>
      </TabContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};
