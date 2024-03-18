// import package and local style sheet
import React, { useState } from 'react';

// import projects that will populate the portfolio page
import mainProjects from '../mainProjects';

import MainProjectSlides from '../components/mainProjectSlides';

import {
  Box, Grid, GridItem, SimpleGrid,
  Button, Link, Text, Stack, Heading,
} from '@chakra-ui/react'

import { BiLinkExternal } from "react-icons/bi";

import '../styles/mainProjects.css';

export default function MainProjects() {

  return (
    <Box className="mainProjects">
      <Text id='mainProjectHeading'>PROJECTS</Text>
      <Stack maxW='100%' gap={0} mb='5rem' border='1px solid var(--shade5)'>
        <SimpleGrid col={8} display='flex' whiteSpace='pre' w='100%'>
          <Text textAlign='left' bg='var(--shade5)' color='var(--shade1)'><b>Skills / Tools</b></Text>
          <Text>MySQL</Text>
          <Text>MongoDB</Text>
          <Text>React</Text>
          <Text>Node.js</Text>
          <Text borderRight='2px solid var(--shade5)'>GitHub</Text>
        </SimpleGrid>
        <SimpleGrid col={8} display='flex' whiteSpace='pre' w='100%'>
          <Text>Apollo / GraphQL</Text>
          <Text>Sequelize</Text>
          <Text>Mongoose</Text>
          <Text>NoSQL</Text>
          <Text borderRight='2px solid var(--shade5)'>Express</Text>
        </SimpleGrid>
        <SimpleGrid col={8} display='flex' whiteSpace='pre' w='100%'>
          <Text>Javascript</Text>
          <Text>Microsoft VBA</Text>
          <Text>Python</Text>
          <Text>HTML</Text>
          <Text>jQuery</Text>
          <Text borderRight='2px solid var(--shade5)'>CSS</Text>
        </SimpleGrid>
        <SimpleGrid col={8} display='flex' whiteSpace='pre' w='100%'>
          <Text>API</Text>
          <Text>Insomnia</Text>
          <Text>Sandbox</Text>
          <Text>OpenAI API</Text>
          <Text>Bulma</Text>
          <Text>Chakra</Text>
          <Text>Render</Text>
          <Text borderRight='2px solid var(--shade5)'>Heroku</Text>
        </SimpleGrid>
      </Stack>
      <Grid
        h='100vh'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(10, 1fr)'
      >
        <GridItem rowSpan={1} colSpan={6}>
          <MainProjectSlides projectIndex={0}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} pl='5rem' my='auto'>
          <Stack>
            <Heading size='xlg' color='var(--shade5)'>{`${mainProjects[0].title}`}{'\n'}</Heading>
            <Text fontSize='3xl' mb='3vh'>{`${mainProjects[0].summary}`}</Text>
            <Link as='a' href={'/dietry'}>
              <Button leftIcon={<BiLinkExternal />} >
                More Details
              </Button>
            </Link>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} pr='5rem' my='auto'>
          <Stack>
            <Heading size='xlg' color='var(--shade5)'>{`${mainProjects[1].title}`}{'\n'}</Heading>
            <Text fontSize='3xl' mb='3vh'>{`${mainProjects[1].summary}`}</Text>
            <Link as='a' href={'/step-it-up'}>
              <Button leftIcon={<BiLinkExternal />} >
                More Details
              </Button>
            </Link>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <MainProjectSlides projectIndex={1} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <MainProjectSlides projectIndex={2} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} pl='5rem' my='auto'>
          <Stack>
            <Heading size='xlg' color='var(--shade5)'>{`${mainProjects[2].title}`}{'\n'}</Heading>
            <Text fontSize='3xl' mb='3vh'>{`${mainProjects[2].summary}`}</Text>
            <Link as='a' href={'/share-a-byte'}>
              <Button leftIcon={<BiLinkExternal />} >
                More Details
              </Button>
            </Link>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} pr='5rem' my='auto'>
          <Stack>
            <Heading size='xlg' color='var(--shade5)'>{`${mainProjects[3].title}`}{'\n'}</Heading>
            <Text fontSize='3xl' mb='3vh'>{`${mainProjects[3].summary}`}</Text>
            <Link as='a' href={'/gif-me-marvel'}>
              <Button leftIcon={<BiLinkExternal />} >
                More Details
              </Button>
            </Link>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} >
          <MainProjectSlides projectIndex={3} />
        </GridItem>
      </Grid>
    </Box>
  );
}

