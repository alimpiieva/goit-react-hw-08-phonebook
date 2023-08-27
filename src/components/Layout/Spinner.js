import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

function CustomSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress isIndeterminate color="blue" size="105px" thickness="8px" />
    </div>
  );
}

export default CustomSpinner;
