import { Link } from 'react-router-dom'
import './Main.css';

function Main() {
  return (
    <div id='main'>
      <div className='css-1c'>
        <h1>Am I really hungry?</h1>
        <Link to="/test">
          <div className='broccoli'></div>
        </Link>
        <br></br>
        <p>Feel free to test that you are really hungry or just bored with the broccoli test.</p>
        <p>Ask yourself “would I eat raw broccoli right now?”</p>
      </div>
    </div>
  );
}

export default Main;
