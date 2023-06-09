import React from 'react'

import { AppBar, Toolbar} from '@mui/material'

import styled from '@emotion/styled'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {

  const logo1 = 'https://cdn.iconscout.com/icon/free/png-256/free-codepen-8-461781.png?f=webp'


  const logo2 = 'https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1642454945/codepen-wordmark-display-inside-white@10x_163987fcdd/codepen-wordmark-display-inside-white@10x_163987fcdd.png?_i=AA'


  return (
   <Container position= 'static'>
    {/* // position is prop   */}
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <img src={logo1} alt="logo1" style={{ width: 50 }}/>
        <img src={logo2} alt="logo2" style= {{ width: 120, alignSelf: 'flex-end', marginBottom: '20px' }}/> 
      
     </Toolbar>
   </Container>
  )
}

export default Header
