import './Header.css'

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return(
    <div className='header'>
      <div className='pages'>
        <div>Test One</div>
        <div>Test Two</div>
      </div>
      <div>
        <p>KR / EN </p>
        <IconButton className='profile'>
          <PersonIcon/>
        </IconButton>      
      </div>
    </div>
  )
}

export default Header;
