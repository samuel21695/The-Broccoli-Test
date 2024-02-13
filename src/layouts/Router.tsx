import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Test from '../pages/test/BroccoliTest';
import FoodList from '../pages/foods/FoodList';

import T from '../T';

function Router () {
  return(
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
      <Route path="/foodlist" element={<FoodList/>}></Route>
      <Route path="/t" element={<T/>}></Route>
    </Routes>
  );
}

export default Router;