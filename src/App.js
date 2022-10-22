import { createContext, useContext, useEffect, useState } from 'react';
import ContextWrapper from './Context/index';

import './App.scss';

// ------ Component
import AbzarRoutes from './Utils/Router/routes';
import MobileDevice from './Context/index';

function App() {

  const [checkMobile, setCheckMobile] = useState(false);
  // window?.innerWidth < 600 ? setCheckMobile(true) : setCheckMobile(false);

  useEffect(() => {
    document.documentElement?.offsetWidth < 600 ? setCheckMobile(true) : setCheckMobile(false);
  }, [checkMobile])

  return (
    <div className="App">
      <MobileDevice.Provider value={checkMobile}>
        <AbzarRoutes />
      </MobileDevice.Provider>
    </div>
  );
}

export default App;
