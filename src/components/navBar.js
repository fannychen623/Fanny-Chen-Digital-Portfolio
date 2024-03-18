// import package and local style sheet
import React from 'react';
import { Link } from 'react-router-dom';

// import package components
import {
  Flex, Box, Button, Divider,
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
            <Button leftIcon={<AiOutlineHome />} variant='ghost' >Home</Button>
          </Link>
          <Link to='/portfolio'>
            <Button leftIcon={<AiOutlineFolder />} variant='ghost' >Portfolio</Button>
          </Link>
          {/* <Link to='/'>
            <Tooltip hasArrow label='Developer Skills' fontSize='1vw' mt='1vh' bg='var(--shade5)' color='white'>
              <IconButton variant='link' ml='2vw' aria-label='Developer Skills' icon={<AiOutlineCode />} />
            </Tooltip>
          </Link> */}
        </Box>
        <Box width='50vw' textAlign='end' pr='5'>
          <Link to='/resume'>
            <Button leftIcon={<AiOutlineSolution />} variant='ghost' >Resume</Button>
          </Link>
          <Link to='/about'>
            <Button leftIcon={<AiOutlineUser />} variant='ghost' >About</Button>
          </Link>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  variant='ghost'
                  leftIcon={isOpen ? <AiOutlineClose /> : <AiOutlineMail /> } 
                >
                  Contact
                </MenuButton>
                <MenuList mt='0.5vh' mr='-1vw' background='var(--shade1)' borderColor='var(--shade5)' borderWidth='0.5vw'>
                  <MenuGroup title='Contact:' mb='1.5vh' textAlign='center' fontSize='1.25vw' background='var(--shade5)' color='var(--shade1)'>
                    <MenuItem as='a' href='mailto: fannychen623@gmail.com' icon={<AiOutlineMail />} background='var(--shade1)' >
                      fannychen623@gmail.com
                    </MenuItem>
                    <Divider borderColor='var(--shade5)' my='1vh' />
                    <MenuItem as='a' target="_blank" href='https://www.linkedin.com/in/fanny23/' icon={<AiOutlineLinkedin />} background='var(--shade1)' >
                      fanny23
                    </MenuItem>
                    <Divider borderColor='var(--shade5)' my='1vh' />
                    <MenuItem as='a' target="_blank" href='https://github.com/fannychen623/' icon={<AiOutlineGithub />} background='var(--shade1)' >
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
