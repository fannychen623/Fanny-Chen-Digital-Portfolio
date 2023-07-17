// import package and local style sheet
import React from 'react';

import {
  Center, Button, Box, Image, Collapse, 
  Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon, useDisclosure,
} from '@chakra-ui/react'

// import icons
import { 
  AiOutlinePrinter, AiOutlineDownload,
} from 'react-icons/ai';

// import resume from assets
import ResumePng from '../../assets/images/Resume.png';
import ResumePdf from '../../assets/images/Resume.pdf';

import '../../styles/Resume.css';

export default function Resume() {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <div className="resume">
      <Button onClick={onToggle}>Print / Download</Button>
      <Collapse in={isOpen} animateOpacity>
      <iframe src={`${ResumePdf}`} target="_blank" title="Resume" name='Resume'></iframe>
      </Collapse>
      <Image src={`${ResumePng}`} alt='Resume'/>
    </div>
  );
}
