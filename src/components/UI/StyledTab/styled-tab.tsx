import React, { useCallback, useMemo, useState } from "react";
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
  const tabs = useMemo(
    () => [
      { value: TabValues.ALL, label: "すべて", isAllowed: true },
      { value: TabValues.UNLIMITED, label: "Unlimited", isAllowed: false },
      { value: TabValues.TOEIC, label: "TOEIC", isAllowed: false },
      { value: TabValues.EIKEN, label: "英検", isAllowed: false },
    ],
    [],
  );
  return (
    <MainContainer>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            $isActive={isActive(tab.value)}
            onClick={() => tab.isAllowed && setActiveTab(tab.value)}
            $isAllowed={tab.isAllowed}
          >
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};
