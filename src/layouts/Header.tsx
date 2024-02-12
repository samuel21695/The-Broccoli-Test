import './Header.css'

import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return(
    <div className='header'>
      <div className='header-left'>
        <div>Test One</div>
        <div>Test Two</div>
      </div>
      <div className='logo'></div>
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
