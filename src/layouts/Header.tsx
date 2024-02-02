import './Header.css'

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return(
    <div>
      <IconButton className='profile'>
        <PersonIcon/>
      </IconButton>      
    </div>
  )
}

export default Header;
