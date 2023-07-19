// import package and local style sheet
import React from 'react';
import ImageGallery from 'react-image-gallery';

// import projects that will populate the portfolio page
import projects from '../projects';
import stepItUp from '../stepItUp';
import shareAByte from '../shareAByte';
import gifMeMarvel from '../gifMeMarvel';

import Carousel from '../components/carousel';

import {
  List, ListItem, ListIcon, Box,
  Grid, GridItem,
  Heading, Text, Stack, Image, Button,
  Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon, useDisclosure,
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
      <Carousel />
      <Text fontSize='3vw' fontWeight='bold' color='white' textAlign='center' my='3vh'>MINI PROJECTS</Text>
      <Accordion allowMultiple>
        {projects.slice(3).map((project) => (
          <AccordionItem>
            <h2>
              <AccordionButton color='white' _expanded={{ bg: 'var(--shade1)', color: 'var(--shade4)' }}>
                <Box as="span" flex='1' textAlign='left' fontSize='1.5vw'>
                  {`${project.name}`}
                </Box>
                <AccordionIcon fontSize='1.5vw' color='white' />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid templateColumns='repeat(10, 1fr)' gap={4} >
                <GridItem colSpan={2}>
                  <Image
                    src={images[`${project.image}`]}
                    alt={`${project.name}`}
                    borderRadius='lg'
                  />
                </GridItem>
                <GridItem colSpan={6} my='auto'>
                  <Text fontSize='1.25vw' color='white'>{`${project.description}`}</Text>
                </GridItem>
                <GridItem colSpan={2} my='auto' textAlign='right'>
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
                </GridItem>
              </Grid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

