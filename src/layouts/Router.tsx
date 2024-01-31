import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main';
import Test from '../pages/test/Test';

function Router () {
  return(
    <Routes>
      <Route path="/" element={<Main/>}></Route>
    </Routes>
  );
}

export default Router;