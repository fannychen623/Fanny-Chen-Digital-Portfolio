import React, { useEffect, useMemo, useState } from 'react';

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/mainProjectSlides.css';

// import required modules
import {
  EffectCoverflow, Keyboard,
  Pagination, Mousewheel, Autoplay,
  Navigation, FreeMode, Thumbs,
} from 'swiper/modules';

import {
  Link, Heading, Text, Stack,
  List, ListItem, ListIcon, Center,
  Grid, GridItem, Image, IconButton,
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

export default function MainProjectSlides({ projectIndex }) {

  const imageCount = useMemo(() => mainProjects[projectIndex].images.length - 1, [projectIndex]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(0);
  const [swiper, setSwiper] = useState();
  const [currentIndex, setCurrentIndex] = useState(1);

  // call on render and defined state changes
  useEffect(() => {
    // setTimeout(() => {
    //   console.log(swiper)
    // }, 10000)
    // if (!swiper.destroyed) {
    //   swiper.autoplay.stop();
    //   const swiperContainer = document.getElementById("swiper");
    //   swiperContainer.addEventListener("mouseover", (e) => {
    //     swiper.autoplay.start();
    //   });
    //   swiperContainer.addEventListener("mouseout", () => {
    //     swiper.autoplay.stop();
    //   });
    // }
  }, [imageCount, currentIndex, swiper])

  const navigateImage = (dir) => {
    let imageCount = mainProjects[projectIndex].images.length
    if (dir === 'back') {
      if (fullscreenImage === 0) {
        setFullscreenImage(imageCount - 1)
      } else {
        setFullscreenImage(fullscreenImage - 1)
      }
    }
    if (dir === 'forward') {
      if (fullscreenImage === imageCount - 1) {
        setFullscreenImage(0)
      } else {
        setFullscreenImage(fullscreenImage + 1)
      }
    }
  }

  const moveSlides = () => {
    console.log(swiper.realIndex)
    for (let i = 0; i < imageCount; i++) {
      if (i > 0) {
        setTimeout(() => {
          swiper.slideTo(i);
        }, 2500)
      } else {
        setTimeout(() => {
          swiper.slideTo(i);
        }, 2500)
      }
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        static={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="verticalSlides"
      >
        {mainProjects[projectIndex].images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={images[`${image}`]} alt={image}
              onClick={() => {
                setModalIsOpen(true);
                setFullscreenImage(index);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} isCentered >
        <ModalOverlay />
        <ModalContent maxW="75vw" maxH='95vh' w='fit-content' h='fit-content' backgroundColor='var(--trans)' >
          <ModalBody p='auto'>
            <IconButton id='fullScreenNavBack' icon={<IoChevronBack />} onClick={() => navigateImage('back')} />
            <IconButton id='fullScreenNavForward' icon={<IoChevronForward />} onClick={() => navigateImage('forward')} />
            <Image
              id='mainProjectFullscreenImage'
              src={images[`${mainProjects[projectIndex].images[fullscreenImage]}`]}
              alt={fullscreenImage}
              onClick={(e) => { if (e.target.id === 'mainProjectFullscreenImage') { setModalIsOpen(false) } }}
            />
          </ModalBody>
        </ModalContent>
      </Modal >
    </>
  );
}
