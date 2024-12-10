import React, { createContext, useState } from 'react';

export const TotalcostContext = createContext();

const TotalcostProvider = ( {children} ) => {
  const [totalcost, setTotalcost] = useState(0.0);

  return (
    <div>
      <TotalcostContext.Provider value={ {totalcost, setTotalcost} }>
        {children}
      </TotalcostContext.Provider>

    </div>
  );
};

export default TotalcostProvider;