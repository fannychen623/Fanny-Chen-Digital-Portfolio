// import package and local style sheet
import React from 'react';

import {
  Button, Box, Image, Collapse, useDisclosure,
} from '@chakra-ui/react'

// import resume from assets
import ResumePng from '../assets/images/Resume.png';
import ResumePdf from '../assets/images/Resume.pdf';

import '../styles/resume.css';

export default function Resume() {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box className="resume">
      <Button onClick={onToggle}>Print / Download</Button>
      <Collapse in={isOpen} animateOpacity>
      <iframe src={`${ResumePdf}`} target="_blank" title="Resume" name='Resume'></iframe>
      </Collapse>
      <Image src={`${ResumePng}`} alt='Resume'/>
    </Box>
  );
}
