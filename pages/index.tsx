import React, { useState } from 'react';
import styled from 'styled-components';
import Form, { FormValues } from '../components/molecules/Form';
import { privacyInputs, userInputs } from '../content/forms';
import Tab from '../components/atoms/Tab';
import Tabs from '../components/molecules/Tabs';
import Reset from '../components/css/Reset';
import Done from '../components/molecules/Done';

const Page = styled.div`
  max-width: 400px;
  padding: 10px;
`;

export default (): JSX.Element => {
  const [formData, setFormData] = useState<FormValues>({});

  const onSubmit = (updatedFormData: FormValues): void => {
    setFormData({ ...formData, ...updatedFormData });
  };

  return (
    <>
      <Page>
        <Reset />
        <Tabs>
          <Tab selected>User</Tab>
          <Tab>Privacy</Tab>
          <Tab>Done</Tab>
        </Tabs>
        <Form inputs={userInputs} onSubmit={onSubmit} />
      </Page>

      <Page>
        <Tabs>
          <Tab>User</Tab>
          <Tab selected>Privacy</Tab>
          <Tab>Done</Tab>
        </Tabs>
        <Form inputs={privacyInputs} onSubmit={onSubmit} />
      </Page>

      <Page>
        <Tabs>
          <Tab>User</Tab>
          <Tab>Privacy</Tab>
          <Tab selected>Done</Tab>
        </Tabs>
        <Done />
      </Page>
    </>
  );
};
