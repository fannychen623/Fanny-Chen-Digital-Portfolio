// import package and local style sheet
import React from 'react';
import { Link } from 'react-router-dom';

// import package components
import {
  Flex, Box, Tooltip, IconButton, Divider, 
  Menu, MenuButton, MenuList, MenuItem, MenuGroup,
} from '@chakra-ui/react';

// import icons
import {
  AiOutlineHome, AiOutlineFolder, AiOutlineCode, 
  AiOutlineSolution, AiOutlineUser, AiOutlineMail, 
  AiOutlineLinkedin, AiOutlineGithub, AiOutlineClose,
} from 'react-icons/ai';

// import local style sheet
import '../styles/navBar.css';

// page navigation bar
function NavTabs() {
  return (
    <div className='navBar' >
      <Flex>
        <Box width='50vw' display='flex' >
          <Link to='/Fanny-Chen-Digital-Portfolio'>
            <Tooltip hasArrow label='Home' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' ml='2vw' aria-label='Home' icon={<AiOutlineHome />} />
            </Tooltip>
          </Link>
          <Link to='/portfolio'>
            <Tooltip hasArrow label='Portfolio' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' ml='2vw' aria-label='Portfolio' icon={<AiOutlineFolder />} />
            </Tooltip>
          </Link>
          {/* <Link to='/'>
            <Tooltip hasArrow label='Developer Skills' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' ml='2vw' aria-label='Developer Skills' icon={<AiOutlineCode />} />
            </Tooltip>
          </Link> */}
        </Box>
        <Box width='50vw' textAlign='end' pr='5'>
          <Link to='/resume'>
            <Tooltip hasArrow label='Resume' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' mr='2vw' aria-label='Resume' icon={<AiOutlineSolution />} />
            </Tooltip>
          </Link>
          <Link to='/about'>
            <Tooltip hasArrow label='About' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' mr='2vw' aria-label='About' icon={<AiOutlineUser />} />
            </Tooltip>
          </Link>
          <Menu>
            {({ isOpen }) => (
              <>
                <Tooltip hasArrow label='Contact' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
                  <MenuButton
                    isActive={isOpen}
                    aria-label='Options'
                    variant='outline'
                    mr='2vw'
                  >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMail />}
                  </MenuButton>
                </Tooltip>
                <MenuList mt='0.5vh' mr='-1vw' borderColor='var(--shade2)' borderWidth='0.5vw'>
                  <MenuGroup title='Contact:' mb='1.5vh' textAlign='center' fontSize='1.25vw' background='var(--shade2)' color='white'>
                    <MenuItem as='a' href='mailto: fannychen623@gmail.com' icon={<AiOutlineMail />} >
                      fannychen623@gmail.com
                    </MenuItem>
                    <Divider borderColor='var(--shade4)' my='1vh'/>
                    <MenuItem as='a' target="_blank" href='https://www.linkedin.com/in/fanny23/' icon={<AiOutlineLinkedin />} >
                      fanny23
                    </MenuItem>
                    <Divider borderColor='var(--shade4)' my='1vh' />
                    <MenuItem as='a' target="_blank" href='https://github.com/fannychen623/' icon={<AiOutlineGithub />} >
                      fannychen623
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </div>
  );
}

export default NavTabs;
