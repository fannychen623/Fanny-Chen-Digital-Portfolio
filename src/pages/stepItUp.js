// import package and local style sheet
import React from 'react';

import {
  Box, Grid, GridItem, Button,
  Link, Spacer, Text, Image,
  List, ListItem, ListIcon, Heading,
} from '@chakra-ui/react'

import {
  BiMoviePlay, BiDumbbell,
  BiLogoGithub, BiTerminal,
} from "react-icons/bi";

import '../styles/stepItUp.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/stepItUp'), false, /\.(png|jpe?g|svg)$/);

const icons = { BiDumbbell, BiTerminal };

export default function StepItUp() {

  return (
    <Box className="stepItUp">
      <Grid
        h='100%'
        w='95%'
        ml='1rem'
        templateRows='auto'
        templateColumns='repeat(10, 1fr)'
        gap={10}
      >
        <GridItem rowSpan={1} colSpan={4} h='fit-content'>
          <Image src={images[`animatedLogo.gif`]} alt='animatedLogo.gif' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} px='2rem' bg='var(--semiTrans)' >
          <Heading>Create and add workout routines to schedules and track progress.</Heading>
          <List>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Create profile to track weight goal and maintainence calorie.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Create unique workouts with time and repetition details. Quickly add from popular workouts or name your own.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Add routines to an interactive calendar to plan and mark them as they are completed.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Add daily weight and calorie intake to track more details.</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Pick a workout playlist out of the newest selections from Spotify (API).</Text>
            </ListItem>
            <ListItem display='flex'>
              <ListIcon as={icons[`BiDumbbell`]} />
              <Text fontSize='2xl'>Post and share about your workout progress. Comment and like other users posts.</Text>
            </ListItem>
          </List>
          <Box textAlign='center' pb='2rem'>
            <Link as='a' target="_blank" href={'https://drive.google.com/file/d/1yqn8I9oVM2WCcu3dixPyfWu7O5IIUvU9/view?usp=sharing'}>
              <Button leftIcon={<BiMoviePlay />} >
                Watch Video
              </Button>
            </Link>
            <Spacer h='2rem' />
            <Link as='a' target="_blank" href={'https://github.com/analisegiobbi3/Step_IT_Up'}>
              <Button leftIcon={<BiLogoGithub />}>
                View Repository
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} px='2rem' bg='var(--semiTrans)'>
          <Heading>Tools</Heading>
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
                <Text fontSize='2xl'>MongoDB / Mongoose</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Spotify API</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>GraphQL</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Bcrypt</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Chakra (React/CSS Framework)</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Heroku (Deployment)</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>React Calendar</Text>
              </ListItem>
              <ListItem display='flex'>
                <ListIcon as={icons[`BiTerminal`]} />
                <Text fontSize='2xl'>Canvasjs Charts</Text>
              </ListItem>
            </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} alignSelf='center'>
          <Heading color='var(--pink1)' pb='1rem'>Track Workouts</Heading>
          <Image src={images[`calendarPage.png`]} alt='calendarPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} >
          <Heading color='var(--pink1)' pb='1rem'>Progress Tracker</Heading>
          <Image src={images[`trackerPage.png`]} alt='trackerPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} >
          <Heading color='var(--pink4)' pb='1rem'>Create Routines</Heading>
          <Image src={images[`createRoutine1.png`]} alt='createRoutine1.png' />
        </GridItem>
        <GridItem rowSpan={2} colSpan={6} alignSelf='center'>
          <Heading color='var(--pink4)' pb='1rem'>My Routines</Heading>
          <Image src={images[`myRoutinesPage.png`]} alt='myRoutinesPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} mt='-3rem'>
          <Image src={images[`createRoutine2.png`]} alt='createRoutine2.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <Heading color='var(--pink4)' pb='1rem'>Spotify Playlists</Heading>
          <Image src={images[`playlistsPage.png`]} alt='playlistsPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} alignSelf='center'>
          <Heading color='var(--pink4)' pb='1rem'>Create Post</Heading>
          <Image src={images[`createPost.png`]} alt='createPost.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} >
          <Heading color='var(--pink5)' pb='1rem'>Create Profile</Heading>
          <Image src={images[`signup.png`]} alt='signup.png' />
        </GridItem>
        <GridItem rowSpan={2} colSpan={7} >
          <Heading color='var(--pink5)' pb='1rem'>Blog</Heading>
          <Image src={images[`blogPage.png`]} alt='blogPage.png' />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} mt='-3rem'>
          <Image src={images[`addProfile.png`]} alt='addProfile.png' />
        </GridItem>
      </Grid>
    </Box>
  );
}

