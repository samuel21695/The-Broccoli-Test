import './Header.css'

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return(
    <div className='header'>
      <div>
        <div>Test One</div>
        <div>Test Two</div>
      </div>
      <div>KR / EN </div>
      <IconButton className='profile'>
        <PersonIcon/>
      </IconButton>      
    </div>
  )
}

export default Header;
