import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Public from '../pages/Public/Public';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
      {/* <Route path='/admin' element={}  /> */}
      <Route path="/*" element={<Public />} />
    </Routes>
  );
};

export default App;
