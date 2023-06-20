import { memo } from 'react';
import './App.scss';
// ------ Routes Component
import AbzarRoutes from './Utils/Router/routes';

function App() {

  return (
    <div className="App">
      <AbzarRoutes />
    </div>
  );
}

export default memo(App);
