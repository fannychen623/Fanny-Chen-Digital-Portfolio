// import package and local style sheet
import React from 'react';
import ImageGallery from 'react-image-gallery';

// import projects that will populate the portfolio page
import projects from '../miniProjects';
import mainProjects from '../mainProjects';

import Carousel from '../components/carousel';

import {
  List, ListItem, ListIcon, Box,
  Grid, GridItem, AspectRatio,
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

  return (
    <Box className="portfolio">
      <Box>
      <Text id='projectHeading'>MAIN PROJECTS</Text>
      <Carousel />
      </Box>
      <Text fontSize='2.5vw' fontWeight='bold' color='white' textAlign='center' mt='10vh' mb='5vh'>MINI PROJECTS</Text>
      <Accordion allowMultiple>
        {projects.map((project) => (
          <AccordionItem>
            <AccordionButton color='white' p='2vh'
              _expanded={{ bg: 'var(--shade1)', color: 'var(--shade4)', fontWeight: 'bold', }}
              _hover={{ bg: 'var(--shade1)', color: 'var(--shade4)', fontWeight: 'bold', }}
            >
              <Box as="span" flex='1' textAlign='left' fontSize='1.5vw'>
                {`${project.name}`}
              </Box>
              <AccordionIcon fontSize='1.5vw' color='white' />
            </AccordionButton>
            <AccordionPanel>
              <Grid templateColumns='repeat(10, 1fr)' gap='4' py='2vh'>
                <GridItem colSpan='2'>
                  <Image
                    src={images[`${project.image}`]}
                    alt={`${project.name}`}
                    borderRadius='lg'
                  />
                </GridItem>
                <GridItem colSpan='6' my='auto'>
                  <Text fontSize='1.25vw' color='white'>{`${project.description}`}</Text>
                  <Text fontSize='1.25vw' color='white'>Tools Used: {`${project.tools}`}</Text>
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
                        background: 'var(--shade4)',
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

