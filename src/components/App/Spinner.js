import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

function CustomSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Refreshing user...</span>
        <CircularProgress isIndeterminate color="blue" size="35px" thickness="8px" ml="1rem" />
      </div>
    </div>
  );
}

export default CustomSpinner;
