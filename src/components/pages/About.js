// import package and local style sheet
import React from 'react';

import {
  Card, CardHeader, CardBody,
  List, ListItem, ListIcon,
  Grid, GridItem,
  Heading, Text, Stack, Image,
} from '@chakra-ui/react'

import { AiTwotoneCloud } from 'react-icons/ai';

import '../../styles/About.css';
// import avatar image from assets
import Avatar from '../../assets/images/Avatar.JPG';

export default function About() {
  return (
    <div className="about">
      {/* section of avatar with general summary */}
      <Card id='avatar' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' >
        <Image objectFit='cover' minH='20vw' height='30vw' width='auto' src={`${Avatar}`} alt='Avatar' />
        <Stack ml='1vw'>
          <CardBody>
            <Heading size='xlg'>About Me</Heading>
            <Text>
              Fits all the new-york stereotypes:
              <List spacing={3} my='1vw'>
                <ListItem>
                  <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                  Walks fast.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                  Talks as fast as I walk.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                  MTA's repeat customer.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                  Only accepts NY slice pizza.
                </ListItem>
              </List>
              <p>
                Born and raised in Brooklyn, NY. Though I can't tell, I was told I have a Brooklyn accent.
                As a child of immigrant parents, I was raised with Asian influence while growing up in American culture.
                I like my noodle soups but would also crave a good bowl of mac and cheese.
                Education was prioritized in the house but not at the sacrifice of creative freedom.
                Being bilingual was by default, which makes me fluent in both English and Chinese.
                I am 100% a city person and never bored of the Big Apple, the city of dreams.
              </p>
            </Text>
          </CardBody>
        </Stack>
      </Card>

      <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(10, 1fr)' gap={5} my='2vw' >
        <GridItem id='background' rowSpan={1} colSpan={6}>
          <Card px='1vw'>
            <CardHeader mb='-1vw'>
              <Heading size='xlg'>Background</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                In 2021, I graduated from The Cooper Union for the Advancement of Science and Art with a bachelors degree in Chemical Engineering.
                Along with pursuing my bachelors degree, I also acquired a minor in Humanities and Social Science.
                Post-graduation, I worked as a Production Engineer at a medical device manufacturing company.
                From that position, along with my several prior biomedical experiences, I moved on to becoming a Physicist at the Memorial Sloan Kettering Cancer Center.
                There, I worked at the Department of Medical Physics with a focus on radiotherapy cancer treatments.
                Several database and web-development projects lead me to taking the Columbia University School of Engineering's coding Boot Camp.
                Over the course of the bootcamp, I developed full-stack web development skills and found the career of my interest.
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem id='funFacts' rowSpan={2} colSpan={4}>
          <Card px='1vw'>
            <CardHeader mb='-1vw'>
              <Heading size='xlg'>Fun Facts</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Huge fan of food. On a quest to try out as many restaurants in NYC as possible.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Loves to cook but dislikes having to clean up afterwards.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Likes to craft but each craft hobby only lasts a few months before moving on to the next one (sketching, painting, knitting, DIY knick knacks).
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Has dreams to travel the world but only ventured into the countries Canda, China, Mexico, and Korea thus far.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Have very good memory and can remember/pick up things quickly.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Born with unilaterial hearing loss and wore a hearing aid for most of my life.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Interested in learning different languages: Fluent in English and Chinese (Mandarin, Cantonese, Fujianese), intermediate in Korean, and studied Spanish and Russian.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Favorite season: Summer because I am always cold.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiTwotoneCloud} color='var(--shade3)' fontSize='1.5vw' m='0' mr='1vw' />
                    Coffee does not wake me up but I am rarely tired anyways.
                  </ListItem>
                </List>
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem id='present' rowSpan={1} colSpan={6}>
          <Card px='1vw'>
            <CardHeader mb='-1vw'>
              <Heading size='xlg'>Present</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Currently, I am working at the Memorial Sloan Kettering Cancer Center as a Physicist part of the Department of Medical Physics.
                My work focuses on patient care related to raiation therapy treatments.
                Additionally, I am also in charge of several database and web project for the department.
                I work closely with the IT team at the hospital to bring new and improved systems to the department.
                Due to my interest and involvement in the technical projects, I am attending the Columbia University School of Engineering's coding Boot Camp as a part-time student.
                The boot camp is due to complete in May of 2023 to which I will receive my certification as a full-stack developer.
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}
