import React, { useState } from 'react';
import styled from 'styled-components';
import Form, { FormValues } from '../components/molecules/Form';
import { privacyInputs, userInputs } from '../content/forms';
import Tab from '../components/atoms/Tab';
import Tabs from '../components/molecules/Tabs';
import Reset from '../components/css/Reset';
import DoneInfo from '../components/molecules/DoneInfo';

const Page = styled.div`
  max-width: 400px;
  padding: 10px;
`;

enum SelectedTab {
  User,
  Privacy,
  Done,
}

export default (): JSX.Element => {
  const [userData, setUserData] = useState<FormValues|null>(null);
  const [privacyData, setPrivacyData] = useState<FormValues|null>(null);

  const selectedTab = (privacyData && SelectedTab.Done)
    || (userData && SelectedTab.Privacy)
    || SelectedTab.User;

  const isUserPage = selectedTab === SelectedTab.User;
  const isPrivacyPage = selectedTab === SelectedTab.Privacy;
  const isDonePage = selectedTab === SelectedTab.Done;

  if (isDonePage) {
    console.log('userData', userData); // eslint-disable-line no-console
    console.log('privacyData', privacyData); // eslint-disable-line no-console
  }

  return (
    <Page>
      <Reset />
      <Tabs>
        <Tab selected={isUserPage}>User</Tab>
        <Tab selected={isPrivacyPage}>Privacy</Tab>
        <Tab selected={isDonePage}>Done</Tab>
      </Tabs>
      {isUserPage && <Form inputs={userInputs} onSubmit={setUserData} />}
      {isPrivacyPage && <Form inputs={privacyInputs} onSubmit={setPrivacyData} />}
      {isDonePage && <DoneInfo />}
    </Page>
  );
};
