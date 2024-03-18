// import package and local style sheet
import React from 'react';

import {
  Box, Grid, GridItem, SimpleGrid, Button,
  Link, Spacer, Heading, Text, Image,
  List, ListItem, ListIcon,
} from '@chakra-ui/react'

import {
  BiLeaf, BiLinkExternal, BiLogoGithub, BiTerminal,
} from "react-icons/bi";

import '../styles/dietry.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/dietry'), false, /\.(png|jpe?g|svg)$/);

const icons = { BiLeaf, BiTerminal };

export default function Dietry() {

  return (
    <Box className="dietry">
      <Image src={images[`logo.png`]} alt='logo.png' h='5rem' w='auto' mb='3rem' mx='auto' />
      <Grid
        h='100%'
        w='95%'
        ml='1rem'
        templateRows='auto'
        templateColumns='repeat(10, 1fr)'
        gap={10}
      >
        <GridItem rowSpan={1} colSpan={6} bg='var(--semiTrans)' h='fit-content'>
          <Image src={images[`dietry.gif`]} alt='dietry.gif' />
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} px='2rem' bg='var(--semiTrans)' >
          <Heading>Diet scientifically by tracking weight and macronutrition intake.</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Interactive web and mobile interface.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Create profile to calculate your BMR and macronutrition for specific health and weight goals.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Pick site interface from 6 different color themes.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Search for food and nutrition value from USDA Food Central's API.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Add from search or create your own food to save.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Create meals and view total nutritional value.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Track daily weight and meals on dynamic calendar.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Graphical view of weight change and macronutrients intake over time with flexible date ranges.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiLeaf`]} />
              <Text fontSize='2xl'>Convert units for weight and energy for comprehensive tracking.</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} display='flex' justifyContents='space-between'>
          <Link as='a' target="_blank" href={'https://dietry.onrender.com/'}>
            <Button leftIcon={<BiLinkExternal />} >
              Visit Website
            </Button>
          </Link>
          <Spacer />
          <Link as='a' target="_blank" href={'https://github.com/fannychen623/diet-planner'}>
            <Button leftIcon={<BiLogoGithub />}>
              View Repository
            </Button>
          </Link>
        </GridItem>
        <GridItem rowSpan={2} colSpan={6} px='2rem' bg='var(--semiTrans)'>
          <Heading>Tools</Heading>
          <SimpleGrid columns={2} spacing={10}>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>React</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Node.js</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Express</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Apollo Server / Client</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Bcrypt</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Chakra (React/CSS Framework)</Text>
              </ListItem>
            </List>
            <List>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>MongoDB / Mongoose</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>USDA Food Central API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>GraphQL</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Render (Deployment)</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>React Calendar</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>React Apex Charts</Text>
              </ListItem>
            </List>
          </SimpleGrid>
        </GridItem>
        <GridItem rowSpan={3} colSpan={3} h='fit-content'>
          <Image src={images[`mobile.gif`]} alt='mobile.gif' />
        </GridItem>
        <GridItem rowSpan={3} colSpan={1}>
          <Heading id='mobileCaption'>Mobile Interface</Heading>
        </GridItem>
        <GridItem rowSpan={2} colSpan={6} >
          <Heading color='var(--green1)' pb='1rem'>Sample Themes</Heading>
          <Image src={images[`themes.gif`]} alt='themes.gif' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={8} alignSelf='end'>
          <Image src={images[`calendar.png`]} alt='calendar.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
        <Heading color='var(--green1)' pb='1rem'>Calendar</Heading>
          <Image src={images[`mobileCalendar.png`]} alt='mobileCalendar.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
        <Heading color='var(--green1)' pb='1rem'>Progress Tracker</Heading>
          <Image src={images[`mobileProgress.png`]} alt='mobileProgress.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={8} alignSelf='end' >
          <Image src={images[`progress.png`]} alt='progress.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <Heading color='var(--green1)' pb='1rem'>Foods</Heading>
          <Image src={images[`foods.png`]} alt='foods.png' />
          <Heading color='var(--green1)' pt='5rem'>Meals</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileFoods.png`]} alt='mobileFoods.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileViewFood.png`]} alt='mobileViewFood.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileMeals.png`]} alt='mobileMeals.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileModifyMeal.png`]} alt='mobileModifyMeal.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <Image src={images[`meals.png`]} alt='meals.png' />
          <Heading color='var(--green1)' pt='5rem' textAlign='right'>Menu + Converter</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <Heading color='var(--green1)' pb='1rem'>Search (USDA Food Central API)</Heading>
          <Image src={images[`search.png`]} alt='search.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileMenu.png`]} alt='mobileMenu.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} >
          <Image src={images[`mobileConverter.png`]} alt='mobileConverter.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} alignSelf='end'>
          <Image src={images[`mobileLogin.png`]} alt='mobileLogin.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} alignSelf='end'>
          <Image src={images[`mobileProfile.png`]} alt='mobileProfile.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
        <Heading color='var(--green1)' pb='1rem' textAlign='center'>Profile</Heading>
          <Image src={images[`profile.png`]} alt='profile.png' />
        </GridItem>
      </Grid>
    </Box>
  );
}

