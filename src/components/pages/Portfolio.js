// import package and local style sheet
import React from 'react';
import ImageGallery from 'react-image-gallery';

import {
  List, ListItem, ListIcon, Box,
  Grid, GridItem,
  Heading, Text, Stack, Image, Button,
  Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon,
  Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure,
} from '@chakra-ui/react'

import {
  BiDumbbell, BiLinkExternal,
  BiMoviePlay, BiRestaurant,
  BiRocket,
} from "react-icons/bi";

import '../../styles/Portfolio.css';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../../assets/images'), false, /\.(png|jpe?g|svg)$/);

export default function Portfolio({ projects, mainProject, secondProject, thirdProject }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const project1 = useDisclosure();
  const project2 = useDisclosure();
  const project3 = useDisclosure();

  return (
    <div className="portfolio">
      <Grid templateColumns='repeat(2, 1fr)' gap={10} >
        <GridItem colSpan={2}>
          <Image
            src={images[`${projects[0].image}`]}
            alt={`${projects[0].name}`}
            onClick={project1.onOpen}
            boxSize='50vw'
            margin='auto'
            objectFit='cover'
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            src={images[`${projects[1].image}`]}
            alt={`${projects[1].name}`}
            onClick={project2.onOpen}
            boxSize='50vw'
            margin='auto'
            objectFit='cover'
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            src={images[`${projects[2].image}`]}
            alt={`${projects[2].name}`}
            onClick={project3.onOpen}
            boxSize='50vw'
            margin='auto'
            objectFit='cover'
          />
        </GridItem>
        <GridItem colSpan={2}>
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
        </GridItem>
      </Grid>

      <Modal isOpen={project1.isOpen} onClose={project1.onClose} >
        <ModalOverlay />
        <ModalContent maxW="80vw" borderRadius='2vw' >
          <ModalCloseButton fontSize='xlg' m='2vh' />
          <ModalBody>
            <Grid templateColumns='repeat(10, 1fr)' gap={4} >
              <GridItem colSpan={6} mt='2vh'>
                <ImageGallery
                  items={mainProject}
                  showPlayButton={false}
                  showIndex={true}
                  showBullets={true}
                  slideOnThumbnailOver={true}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Stack>
                  <Heading size='xlg'>{`${mainProject[0].originalTitle}`}{'\n'}</Heading>
                  <Text fontSize='3xl' mb='3vh'>{`${mainProject[0].summary}`}</Text>
                  <Text as='b' fontSize='3xl'>Application Features:{'\n'}</Text>
                  <List mt='2vh'>
                    {mainProject[0].features.map((feature) => (
                      <ListItem display='flex'>
                        <ListIcon as={BiDumbbell} color='var(--shade4)' fontSize='1.5vw' mr='0.5vw' mb='-0.5vh' />
                        <Text fontSize='2xl'>{`${feature}`}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter my='2vh'>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiMoviePlay />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              Watch Video
            </Button>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiLinkExternal />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              View Repository
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={project2.isOpen} onClose={project2.onClose} >
        <ModalOverlay />
        <ModalContent maxW="80vw" borderRadius='2vw' >
          <ModalCloseButton fontSize='xlg' m='2vh' />
          <ModalBody>
            <Grid templateColumns='repeat(10, 1fr)' gap={4} >
              <GridItem colSpan={6} mt='2vh'>
                <ImageGallery
                  items={secondProject}
                  showPlayButton={false}
                  showIndex={true}
                  showBullets={true}
                  slideOnThumbnailOver={true}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Stack>
                  <Heading size='xlg'>{`${secondProject[0].originalTitle}`}{'\n'}</Heading>
                  <Text fontSize='3xl' mb='3vh'>{`${secondProject[0].summary}`}</Text>
                  <Text as='b' fontSize='3xl'>Application Features:{'\n'}</Text>
                  <List mt='2vh'>
                    {secondProject[0].features.map((feature) => (
                      <ListItem display='flex'>
                        <ListIcon as={BiRestaurant} color='var(--shade4)' fontSize='1.5vw' mr='0.5vw' mb='-0.5vh' />
                        <Text fontSize='2xl'>{`${feature}`}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter my='2vh'>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiMoviePlay />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              Watch Video
            </Button>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiLinkExternal />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              View Repository
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={project3.isOpen} onClose={project3.onClose} >
        <ModalOverlay />
        <ModalContent maxW="80vw" borderRadius='2vw' >
          <ModalCloseButton fontSize='xlg' m='2vh' />
          <ModalBody>
            <Grid templateColumns='repeat(10, 1fr)' gap={4} >
              <GridItem colSpan={6} mt='2vh'>
                <ImageGallery
                  items={thirdProject}
                  showPlayButton={false}
                  showIndex={true}
                  showBullets={true}
                  slideOnThumbnailOver={true}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Stack>
                  <Heading size='xlg'>{`${thirdProject[0].originalTitle}`}{'\n'}</Heading>
                  <Text fontSize='3xl' mb='3vh'>{`${thirdProject[0].summary}`}</Text>
                  <Text as='b' fontSize='3xl'>Application Features:{'\n'}</Text>
                  <List mt='2vh'>
                    {thirdProject[0].features.map((feature) => (
                      <ListItem display='flex'>
                        <ListIcon as={BiRocket} color='var(--shade4)' fontSize='1.5vw' mr='0.5vw' mb='-0.5vh' />
                        <Text fontSize='2xl'>{`${feature}`}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter my='2vh'>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiMoviePlay />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              Watch Video
            </Button>
            <Button
              fontSize='2xl'
              p='1.5vw'
              mr='1vw'
              variant='solid'
              backgroundColor='var(--shade4)'
              color='white'
              leftIcon={<BiLinkExternal />}
              _hover={{
                background: 'var(--shade1)',
                color: 'var(--shade4)',
              }}
            >
              View Repository
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

