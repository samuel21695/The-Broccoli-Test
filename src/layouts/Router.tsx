import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Test from '../pages/test/Test';

function Router () {
  return(
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
    </Routes>
  );
}

export default Router;