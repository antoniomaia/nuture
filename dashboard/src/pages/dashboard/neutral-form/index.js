import React from 'react';
import { useHistory } from 'react-router-dom';

import Stepper from 'components/steps/stepper';

const NeutralForm = () => {
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const step = params.get('s');

  return (
    <>
      <Stepper step={parseInt(step, 10)} />
    </>
  );
};

NeutralForm.propTypes = {};

export default NeutralForm;
