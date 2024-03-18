// import package and local style sheet
import React, { useEffect, useState } from 'react';

// import projects that will populate the portfolio page
import projects from '../miniProjects';

import Carousel from '../components/carousel';

import {
  Box, Grid, GridItem, Button,
  Link, Switch, Text, Image,
  Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'

import { BiLinkExternal } from "react-icons/bi";

import '../styles/portfolio.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/images'), false, /\.(png|jpe?g|svg)$/);

export default function Portfolio() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const [expandedItems, setExpandedItems] = useState([])

  const projectLength = () => {
    let length = []
    for (let i = 0; i < projects.length; i++) {
      length.push(i)
    }
    return length
  }

  const expandedIndex = (index, expandedList) => {
    if (index !== null && expandedList !== undefined) {
      let indicies = []
      if (expandedList.length !== 0) {
        var exI = expandedList.map(Number)
        if (exI.includes(index)) {
          exI = exI.filter(function (item) {
            return item !== index
          })
          indicies = exI.splice(0)
        } else {
          indicies = exI.splice(0)
          indicies.push(Number(index))
        }
      } else {
        indicies.push(Number(index))
      }
      return indicies
    }
  }

  return (
    <Box className="portfolio">
      <Box alignItems='center'>
        <Text id='projectHeading'>MAIN PROJECTS</Text>
        <Carousel />
      </Box>
      <Text id='miniProjectHeading'>MINI PROJECTS</Text>
      <Box textAlign='end'>
        <Switch size='lg' pb='1.25vh' color='var(--shade5)' fontSize='1.5vw'
          onChange={(e) => { if (e.target.checked) { setExpandedItems(projectLength) } else { setExpandedItems([]) } }}
        >
          Expand All
        </Switch>
      </Box>
      <Accordion allowMultiple index={expandedItems} pb='5rem'>
        {projects.map((project, index) => (
          <AccordionItem key={index} 
            onClick={(e) => { setExpandedItems(expandedIndex(e.target.getAttribute('data-index'), expandedItems)) }}>
            {({ isExpanded }) => (
              <>
                <AccordionButton color='var(--shade5)' p='2vh'
                  _expanded={{ bg: 'var(--shade4)', color: 'var(--shade1)', fontWeight: 'bold', }}
                  _hover={{ bg: 'var(--shade4)', color: 'var(--shade1)', fontWeight: 'bold', }}
                >
                  <Box as="span" flex='1' textAlign='left' fontSize='1.5vw' id={`${index}`}
                    onClick={(e) => { setExpandedItems(expandedIndex(e.target.id, expandedItems)) }}
                  >
                    {`${project.name}`}
                  </Box>
                  {isExpanded ? (
                    <AccordionIcon fontSize='1.5vw' color='var(--shade1)' />
                  ) : (
                    <AccordionIcon fontSize='1.5vw' color='var(--shade5)' />
                  )}
                </AccordionButton>
                <AccordionPanel _hover={{ bg: 'var(--shade2)' }} px='1vw'>
                  <Grid templateColumns='repeat(10, 1fr)' gap='4' py='2vh'>
                    <GridItem colSpan='2' >
                      <Image
                        src={images[`${project.image}`]}
                        alt={`${project.name}`}
                        borderRadius='lg'
                      />
                    </GridItem>
                    <GridItem colSpan='6' my='auto' pl='2vw' fontSize='1.25vw' color='var(--shade5)'>
                      <Text><b>Description:</b> {`${project.description}\n\n`}</Text>
                      <Text><b>Tools Used:</b> {`${project.tools}`}</Text>
                    </GridItem>
                    <GridItem colSpan='2' my='auto' textAlign='right'>
                      <Link as='a' target="_blank" href={`${project.link}`}>
                        <Button
                          fontSize='2xl'
                          p='1.5vw'
                          variant='solid'
                          backgroundColor='var(--shade4)'
                          color='var(--shade1)'
                          leftIcon={<BiLinkExternal />}
                          _hover={{
                            background: 'var(--shade3)',
                            color: 'var(--shade1)',
                          }}
                        >
                          View Repository
                        </Button>
                      </Link>
                    </GridItem>
                  </Grid>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

