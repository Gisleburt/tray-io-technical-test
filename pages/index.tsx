import React, { useState } from 'react';
import Form, { FormValues } from '../components/molecules/Form';
import { privacyInputs, userInputs } from '../content/forms';


export default (): JSX.Element => {
  const [formData, setFormData] = useState<FormValues>({});

  const onSubmit = (updatedFormData: FormValues): void => {
    setFormData({ ...formData, ...updatedFormData });
  };

  return (
    <div>
      <Form inputs={userInputs} onSubmit={onSubmit} />
      <Form inputs={privacyInputs} onSubmit={onSubmit} />
    </div>
  );
};
