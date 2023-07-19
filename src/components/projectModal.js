// import package and local style sheet
import React from 'react';
import { useNavigate } from 'react-router-dom'
import ImageGallery from 'react-image-gallery';

// import projects that will populate the portfolio page
import projects from '../projects';
import stepItUp from '../stepItUp';
import shareAByte from '../shareAByte';
import gifMeMarvel from '../gifMeMarvel';

import {
  List, ListItem, ListIcon, Box,
  Grid, GridItem,
  Heading, Text, Stack, Image, Button,
  Modal, ModalOverlay, ModalContent,
  ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure,
} from '@chakra-ui/react'

import {
  BiDumbbell, BiLinkExternal,
  BiMoviePlay, BiRestaurant,
  BiRocket,
} from "react-icons/bi";

import '../styles/portfolio.css';

export default function ProjectModal(project) {

  // chakra function to open modal and set to default open
  // opens on navigation to path withoutevent listener (button click)
  const { isOpen } = useDisclosure({ defaultIsOpen: true })

  //  function to navigate to different paths, set to navigate back to home
  const navigate = useNavigate();
  const closeModal = () => navigate('/portfolio');

  return (
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent maxW="80vw" borderRadius='2vw' >
          <ModalCloseButton fontSize='xlg' m='2vh' />
          <ModalBody>
            <Grid templateColumns='repeat(10, 1fr)' gap={4} >
              <GridItem colSpan={6} mt='2vh'>
                {/* <ImageGallery
                  items={stepItUp}
                  showPlayButton={false}
                  showIndex={true}
                  showBullets={true}
                  slideOnThumbnailOver={true}
                /> */}
              </GridItem>
              <GridItem colSpan={4}>
                <Stack>
                  <Heading size='xlg'>{`${project}`}{'\n'}</Heading>
                  <Text fontSize='3xl' mb='3vh'>{`${project}`}</Text>
                  <Text as='b' fontSize='3xl'>Application Features:{'\n'}</Text>
                  <List mt='2vh'>
                    {/* {project[0].features.map((feature) => (
                      <ListItem display='flex'>
                        <ListIcon as={`${project[0].icon}`} color='var(--shade4)' fontSize='1.5vw' mr='0.5vw' mb='-0.5vh' />
                        <Text fontSize='2xl'>{`${feature}`}</Text>
                      </ListItem> */}
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
  );
}