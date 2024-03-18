// import package and local style sheet
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import package components
import {
  Box, VStack, Button, IconButton, Divider,
  Accordion, AccordionItem, AccordionButton, AccordionPanel,
} from '@chakra-ui/react';

// import icons
import {
  AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineHome,
  AiOutlineFolder, AiOutlineFolderOpen, AiOutlineSolution, 
  AiOutlineUser, AiOutlineMail, AiOutlineInbox,
  AiOutlineLinkedin, AiOutlineGithub,
  AiOutlineRight, AiOutlineUp, AiOutlineDown
} from 'react-icons/ai';

import {
  IoScaleOutline, IoFitnessOutline, IoRestaurantOutline, 
  IoRocketOutline, IoTerminalOutline, IoFileTrayStackedOutline, 
  IoGridOutline, IoArrowUpOutline
} from "react-icons/io5";


// import local style sheet
import '../styles/sideMenu.css';

// show scroll to top button when paged is scrolled past 40px
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let scrollTopButton = document.getElementById('scroll-top');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (document.body.clientWidth > 820) {
      scrollTopButton.style.visibility = 'visible';
    }
  } else {
    if (document.body.clientWidth > 820) {
      scrollTopButton.style.visibility = 'hidden';
    }
  }
}

// function to scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// page navigation bar
function SideMenu() {

  const [menuState, setMenuState] = useState('show')
  const [disabledMenu, setDisabledMenu] = useState(false)
  const [portfolioExpanded, setPortfolioExpanded] = useState(-1)
  const [contactExpanded, setContactExpanded] = useState(false)

  const showMenu = (e) => {
    e.preventDefault();
    document.documentElement.setAttribute('menu', 'show');
    document.documentElement.style.setProperty('--leftMargin', '18.5%');
    document.documentElement.style.setProperty('--leftPad', '5rem');
    setDisabledMenu(false);
    setMenuState('show');
  };

  const hideMenu = (e) => {
    e.preventDefault();
    document.documentElement.setAttribute('menu', 'hide');
    document.documentElement.style.setProperty('--leftMargin', '0');
    document.documentElement.style.setProperty('--leftPad', '10rem');
    setPortfolioExpanded(-1);
    setContactExpanded(-1);
    setDisabledMenu(true);
    setMenuState('hide');
  };

  return (
    <Box className='sideMenu'
      onClick={(e) => {
        if (e.target.className === 'sideMenu css-0') {
          if (menuState === 'show') {
            hideMenu(e)
          } else {
            showMenu(e)
          }
        }
      }}>
      <VStack>
        {menuState === 'show' ? (
          <IconButton
            alignSelf='end'
            color='var(--shade1)'
            variant='ghost'
            icon={<AiOutlineDoubleLeft />}
            onClick={(e) => { hideMenu(e) }}
          />
        ) : (
          <IconButton
            alignSelf='end'
            color='var(--shade1)'
            variant='ghost'
            icon={<AiOutlineDoubleRight />}
            onClick={(e) => { showMenu(e) }}
          />
        )}
        <Link to='/Fanny-Chen-Digital-Portfolio'>
          <Button leftIcon={<AiOutlineHome />} variant='ghost' isDisabled={disabledMenu} >Home</Button>
          <IconButton variant='ghost' icon={<AiOutlineRight />} isDisabled={disabledMenu} />
        </Link>
        <Accordion id='portfolio' allowToggle m='-2rem' index={portfolioExpanded}>
          <AccordionItem
            isDisabled={disabledMenu}
            onClick={() => {
              if (portfolioExpanded === -1) {
                setPortfolioExpanded(0)
                setContactExpanded(-1)
              } else {
                setPortfolioExpanded(-1)
              }
            }}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  {isExpanded ? (
                    <Box>
                      <Button leftIcon={<AiOutlineFolderOpen />} variant='ghost' >Portfolio</Button>
                      <IconButton variant='ghost' icon={<AiOutlineUp />} />
                    </Box>
                  ) : (
                    <Box>
                      <Button leftIcon={<AiOutlineFolder />} variant='ghost' isDisabled={disabledMenu} >Portfolio</Button>
                      <IconButton variant='ghost' icon={<AiOutlineDown />} isDisabled={disabledMenu} />
                    </Box>
                  )}
                </AccordionButton>
                <AccordionPanel display='contents'>
                  <Link to='/dietry'>
                    <Button leftIcon={<IoScaleOutline />} >
                      Dietry
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/step-it-up'>
                    <Button leftIcon={<IoFitnessOutline />} >
                      Step ItUp
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/share-a-byte'>
                    <Button leftIcon={<IoRestaurantOutline />} >
                      Share A Byte
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/gif-me-marvel'>
                    <Button leftIcon={<IoRocketOutline />} >
                      GIF Me MARVEL
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/main-projects'>
                    <Button leftIcon={<IoTerminalOutline />} >
                      Main Projects
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/mini-projects'>
                    <Button leftIcon={<IoFileTrayStackedOutline />} >
                      Mini Projects
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='0.5rem' />
                  <Link to='/portfolio'>
                    <Button leftIcon={<IoGridOutline />} >
                      VIEW ALL
                    </Button>
                  </Link>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' mt='0.5rem' mb='0' />
                </AccordionPanel>
                {isExpanded ? (
                  <Divider borderColor='var(--trans)' borderWidth='0rem' mb='43rem' />
                ) : (
                  <></>
                )}
              </>
            )}
          </AccordionItem>
        </Accordion>
        <Link to='/resume'>
          <Button leftIcon={<AiOutlineSolution />} variant='ghost' isDisabled={disabledMenu} >Resume</Button>
          <IconButton variant='ghost' icon={<AiOutlineRight />} isDisabled={disabledMenu} />
        </Link>
        <Link to='/about'>
          <Button leftIcon={<AiOutlineUser />} variant='ghost' isDisabled={disabledMenu} >About</Button>
          <IconButton variant='ghost' icon={<AiOutlineRight />} isDisabled={disabledMenu} />
        </Link>
        <Accordion allowToggle m='-2rem' index={contactExpanded}>
          <AccordionItem
            isDisabled={disabledMenu}
            onClick={() => {
              if (contactExpanded === -1) {
                setContactExpanded(0)
                setPortfolioExpanded(-1)
              } else {
                setContactExpanded(-1)
              }
            }}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Button leftIcon={<AiOutlineMail />} variant='ghost' isDisabled={disabledMenu} >Contact</Button>
                  {isExpanded ? (
                    <IconButton variant='ghost' icon={<AiOutlineUp />} />
                  ) : (
                    <IconButton variant='ghost' icon={<AiOutlineDown />} isDisabled={disabledMenu} />
                  )}
                </AccordionButton>
                <AccordionPanel>
                  <Button as='a' href='mailto: fannychen623@gmail.com' leftIcon={<AiOutlineInbox />} >
                    fannychen623@gmail.com
                  </Button>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='1rem' />
                  <Button as='a' target="_blank" href='https://www.linkedin.com/in/fanny23/' leftIcon={<AiOutlineLinkedin />} >
                    fanny23
                  </Button>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' my='1rem' />
                  <Button as='a' target="_blank" href='https://github.com/fannychen623/' leftIcon={<AiOutlineGithub />} >
                    fannychen623
                  </Button>
                  <Divider borderColor='var(--shade1)' borderWidth='0.25rem' mt='1rem' mb='0' />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </VStack>
      <IconButton id='scroll-top' icon={<IoArrowUpOutline />} onClick={topFunction} />
    </Box>
  );
}

export default SideMenu;
