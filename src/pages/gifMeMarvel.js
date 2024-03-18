// import package and local style sheet
import React, { useEffect } from 'react';

import {
  Box, Grid, GridItem, SimpleGrid,
  Button, Link, Text, Image,
  List, ListItem, ListIcon, Heading,
} from '@chakra-ui/react'

import {
  BiMoviePlay, BiRocket, BiLinkExternal, 
  BiLogoGithub, BiTerminal,
} from "react-icons/bi";

import '../styles/gifMeMarvel.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/gifMeMarvel'), false, /\.(png|jpe?g|svg)$/);

const icons = { BiRocket, BiTerminal };

export default function GifMeMarvel() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Box className="gifMeMarvel">
      <Grid
        h='100%'
        w='95%'
        ml='1rem'
        templateRows='auto'
        templateColumns='repeat(10, 1fr)'
        gap={10}
      >
        <GridItem rowSpan={3} colSpan={6} h='fit-content'>
          <Image src={images[`650px Main Page.png`]} alt='650px Main Page.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} px='2rem' bg='var(--semiTrans)' >
          <Heading>View and save MARVEL character information and GIFs.</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRocket`]} />
              <Text fontSize='2xl'>Search for MARVEL characters and view their information.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRocket`]} />
              <Text fontSize='2xl'>Access official character page from the MARVEL site.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRocket`]} />
              <Text fontSize='2xl'>View GIFs related to the MARVEL character.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRocket`]} />
              <Text fontSize='2xl'>Favorite GIFs to save them to local device.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiRocket`]} />
              <Text fontSize='2xl'>Response web application for different screen sizes.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} alignSelf='center'>
          <SimpleGrid columns={2} spacing={10} pb='2rem'>
            <Link as='a' target="_blank" href={'https://mshaari.github.io/gif-me-marvel/'}>
              <Button leftIcon={<BiLinkExternal />} >
                Visit Website
              </Button>
            </Link>
            <Link as='a' target="_blank" href={'https://drive.google.com/file/d/1GKSDmhku0hjmfoFpDMUrHUDjFhWyeK-g/view?usp=sharing'}>
              <Button leftIcon={<BiMoviePlay />} >
                Watch Video
              </Button>
            </Link>
          </SimpleGrid>
          <Link as='a' target="_blank" href={'https://github.com/mshaari/gif-me-marvel'}>
            <Button leftIcon={<BiLogoGithub />} >
              View Repository
            </Button>
          </Link>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} px='2rem' bg='var(--semiTrans)' h='100%' alignSelf='start'>
          <Heading>Tools</Heading>
          <SimpleGrid columns={2} spacing={10}>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>JavaScript</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Local Storage</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Bulma (CSS Framework)</Text>
              </ListItem>
            </List>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>MARVEL API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>GIPHY API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Server Side APIs</Text>
              </ListItem>
            </List>
          </SimpleGrid>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} >
          <Image src={images[`Loading Page.gif`]} alt='Loading Page.gif' />
        </GridItem>
        <GridItem rowSpan={2} colSpan={7}>
          <Image src={images[`Character Search.gif`]} alt='Character Search.gif' />
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <Image src={images[`650px Character Page.png`]} alt='650px Character Page.png' />
        </GridItem><GridItem rowSpan={1} colSpan={4}>
          <Image src={images[`characterInfo.png`]} alt='characterInfo.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <Image src={images[`errorhandler.png`]} alt='errorhandler.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          <Image src={images[`myFavoritesPage.png`]} alt='myFavoritesPage.png' />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Image src={images[`650px Favorites Page.png`]} alt='650px Favorites Page.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          <Image src={images[`MY FAVORITE GIFS.gif`]} alt='MY FAVORITE GIFS.gif' />
        </GridItem>
      </Grid>
    </Box>
  );
}