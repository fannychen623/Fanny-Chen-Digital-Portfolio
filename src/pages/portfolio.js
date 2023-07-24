// import package and local style sheet
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

// import projects that will populate the portfolio page
import projects from '../miniProjects';
import mainProjects from '../mainProjects';

import Carousel from '../components/carousel';

import {
  List, ListItem, ListIcon, Box,
  Grid, GridItem, AspectRatio, Switch,
  Heading, Text, Stack, Image, Button,
  Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon, useDisclosure, Link,
} from '@chakra-ui/react'

import {
  BiDumbbell, BiLinkExternal,
  BiMoviePlay, BiRestaurant,
  BiRocket,
} from "react-icons/bi";

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
      <Box>
        <Text id='projectHeading'>MAIN PROJECTS</Text>
        <Carousel />
      </Box>
      <Text fontSize='2.5vw' fontWeight='bold' color='white' textAlign='center' mt='10vh' mb='5vh'>MINI PROJECTS</Text>
      <Box textAlign='end'>
        <Switch size='lg' pb='1.25vh' color='white' fontSize='1.5vw'
          onChange={(e) => { if (e.target.checked) { setExpandedItems(projectLength) } else { setExpandedItems([]) } }}
        >
          Expand All
        </Switch>
      </Box>
      <Accordion allowMultiple index={expandedItems}>
        {projects.map((project, index) => (
          <AccordionItem key={index} onClick={(e) => { setExpandedItems(expandedIndex(e.target.getAttribute('data-index'), expandedItems)) }}>
            <AccordionButton color='white' p='2vh'
              _expanded={{ bg: 'var(--shade1)', color: 'var(--shade4)', fontWeight: 'bold', }}
              _hover={{ bg: 'var(--shade1)', color: 'var(--shade4)', fontWeight: 'bold', }}
            >
              <Box as="span" flex='1' textAlign='left' fontSize='1.5vw' id={`${index}`}
                onClick={(e) => { setExpandedItems(expandedIndex(e.target.id, expandedItems)) }}
              >
                {`${project.name}`}
              </Box>
              <AccordionIcon fontSize='1.5vw' color='white' />
            </AccordionButton>
            <AccordionPanel _hover={{ bg: 'var(--shade4)' }} px='1vw'>
              <Grid templateColumns='repeat(10, 1fr)' gap='4' py='2vh'>
                <GridItem colSpan='2' >
                  <Image
                    src={images[`${project.image}`]}
                    alt={`${project.name}`}
                    borderRadius='lg'
                  />
                </GridItem>
                <GridItem colSpan='6' my='auto' pl='2vw'>
                  <Text fontSize='1.25vw' color='white'><b>Description:</b> {`${project.description}\n\n`}</Text>
                  <Text fontSize='1.25vw' color='white'><b>Tools Used:</b> {`${project.tools}`}</Text>
                </GridItem>
                <GridItem colSpan='2' my='auto' textAlign='right'>
                  <Link as='a' target="_blank" href={`${project.link}`}>
                    <Button
                      fontSize='2xl'
                      p='1.5vw'
                      variant='solid'
                      backgroundColor='var(--shade1)'
                      color='var(--shade4)'
                      leftIcon={<BiLinkExternal />}
                      _hover={{
                        background: 'var(--shade3)',
                        color: 'white',
                      }}
                    >
                      View Repository
                    </Button>
                  </Link>
                </GridItem>
              </Grid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

