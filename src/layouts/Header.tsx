import './Header.css'

import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return(
    <div id='header'>
      <div className='header-left'>
        <Link to = 'test'>
          <div>Test</div>
        </Link>
        <Link to = 'foodList'>
          <div>Foods</div>
        </Link>
      </div>
      <Link to = '/'>
        <div className='logo'></div>
      </Link>
      <div className='header-right'>
        <div className='language'>
          <Link to ='KR' className='kr'>KR</Link>
          <p>/</p>
          <Link to = ''>EN</Link>
        </div>
        <IconButton className='profile'>
          <PersonIcon color='success'/>
        </IconButton>      
      </div>
    </div>  
  )
}

export default Header;
