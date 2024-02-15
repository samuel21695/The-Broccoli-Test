import { Link } from 'react-router-dom'
import './Main.css';

import Test from './test/BroccoliTest';
import FoodList from './foods/FoodList';

function Main() {
  return (
    <>
      <div id='main'>
        <div className='main-contents'>
          <h1>Feeling hungry?</h1>
          <Link to="/test">
            <div className='broccoli'></div>
          </Link>
          <br></br>
          <p>Feel free to test that you are really hungry or just bored with the broccoli test.</p>
          <p>Ask yourself “would I eat raw broccoli right now?”</p>
        </div>
      </div>
      <Test></Test>
      <FoodList></FoodList>
    </>
  );
}

export default Main;
