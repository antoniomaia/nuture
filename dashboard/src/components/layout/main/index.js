import React from 'react';
import CustomizedSnackbars from 'components/toast';

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <CustomizedSnackbars />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
