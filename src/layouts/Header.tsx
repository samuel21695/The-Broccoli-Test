import './Header.css'

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
      <div className='header-right'>
        <p className='language'>KR / EN </p>
        <IconButton className='profile'>
          <PersonIcon color='success'/>
        </IconButton>      
      </div>
    </div>  
  )
}

export default Header;
