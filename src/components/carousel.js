import React, { useState } from 'react';

import {
  BiLeaf, BiDumbbell, BiLinkExternal,
  BiLogoGithub, BiRestaurant, BiRocket,
} from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import '../styles/carousel.css';

// import required modules
import {
  EffectCoverflow, Keyboard,
  Pagination, Navigation,
  FreeMode, Thumbs,
} from 'swiper/modules';

import {
  Link, Heading, Text, Stack, 
  List, ListItem, ListIcon,
  Grid, GridItem, Image, Button,
  Modal, ModalOverlay, ModalContent,
  ModalBody, ModalCloseButton,
} from '@chakra-ui/react'

import mainProjects from '../mainProjects';

// function to import images
function importAll(img) {
  let images = {};
  img.keys().forEach((item, index) => { images[item.replace('./', '')] = img(item); });
  return images
}

// defines images to call importAll function to import images
const images = importAll(require.context('../assets/'), false, /\.(png|jpe?g|svg)$/);

const icons = { BiLeaf, BiDumbbell, BiRestaurant, BiRocket };

export default function Carousel() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(0);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
        className="mainCarousel"
        style={{ zIndex: '0' }}
      >
        {mainProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={images[`${project.thumbnail}`]} alt={`${project.title}`}
              onClick={() => {
                setModalData(index);
                setModalIsOpen(true);
              }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p id='carouselCaption'>Click on project to view details</p>

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} >
        <ModalOverlay />
        <ModalContent maxW="80vw" borderRadius='2vw'>
          <ModalCloseButton fontSize='xlg' m='2vh' />
          <ModalBody>
            <Image
              id='fullscreenImage'
              style={{ display: showFullscreenImage ? 'block' : 'none' }}
              src={images[`${fullscreenImage}`]}
              alt={fullscreenImage}
              onClick={() => setShowFullscreenImage(false)}
            />
            <Grid templateColumns='repeat(10, 1fr)' gap={4} >
              <GridItem rowSpan={2} colSpan={6} my='auto' mr='1vw' pt='2vh'>
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Pagination, Navigation, Thumbs]}
                  className="carouselTop"
                >
                  {mainProjects[modalData].images.map((image) => (
                    <SwiperSlide key={image}>
                      <img src={images[`${image}`]} alt={image}
                        // onClick={() => { setShowFullscreenImage(true); setFullscreenImage(`${image}`) }} 
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="carouselBottom"
                >
                  {mainProjects[modalData].images.map((image) => (
                    <SwiperSlide key={image}>
                      <img src={images[`${image}`]} alt={`${image}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </GridItem>
              <GridItem rowSpan={1} colSpan={4}>
                <Stack>
                  <Heading size='xlg' color='var(--shade4)'>{`${mainProjects[modalData].title}`}{'\n'}</Heading>
                  <Text fontSize='3xl' mb='3vh'>{`${mainProjects[modalData].summary}`}</Text>
                  <Text as='b' fontSize='3xl' color='var(--shade4)'>Application Features:{'\n'}</Text>
                  <List mt='2vh'>
                    {mainProjects[modalData].features.map((feature, index) => (
                      <ListItem display='flex' key={index}>
                        <ListIcon as={icons[`${mainProjects[modalData].icon}`]} color='var(--shade4)' fontSize='1.5vw' mr='0.5vw' mb='-0.5vh' />
                        <Text fontSize='2xl'>{`${feature}`}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </GridItem>
              <GridItem rowSpan={1} colSpan={4} my='2vh' display='flex' justifyContent='space-between'>
                <Link as='a' href={`${mainProjects[modalData].title.replace(/ /g,"-").toLowerCase()}`}>
                  <Button
                    fontSize='2xl'
                    p='1.5vw'
                    mr='1vw'
                    variant='solid'
                    backgroundColor='var(--shade4)'
                    color='white'
                    leftIcon={<BiLinkExternal />}
                    _hover={{
                      background: 'var(--shade5)',
                      color: 'var(--shade1)',
                    }}
                  >
                    More Details
                  </Button>
                </Link>
                <Link as='a' target="_blank" href={`${mainProjects[modalData].repository}`}>
                  <Button
                    fontSize='2xl'
                    p='1.5vw'
                    mr='1vw'
                    variant='solid'
                    backgroundColor='var(--shade4)'
                    color='white'
                    leftIcon={<BiLogoGithub />}
                    _hover={{
                      background: 'var(--shade5)',
                      color: 'var(--shade1)',
                    }}
                  >
                    View Repository
                  </Button>
                </Link>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal >

    </>
  );
}
