// import package and local style sheet
import React, { useEffect, useState } from 'react';

import {
  Button, Box, Image, Spinner, Text
} from '@chakra-ui/react'

// import resume from assets
import ResumePng from '../assets/images/Resume.png';
import ResumePdf from '../assets/images/Resume.pdf';

import { AiOutlinePrinter, AiOutlineDownload } from "react-icons/ai";

import '../styles/resume.css';

export default function Resume() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const [loaded, setLoaded] = useState(false)
  const [pdfViewer, setPdfViewer] = useState(false)

  return (
    <Box className="resume">
      {pdfViewer ? (
        <iframe src={`${ResumePdf}`} target="_blank" title="Resume" name='Resume'></iframe>
      ) : (
        <Box>
          <Button onClick={() => { setPdfViewer(true) }} leftIcon={<AiOutlinePrinter />} rightIcon={<AiOutlineDownload />}>Print / Download</Button>
          {loaded ? (
            <></>
          ) : (
            <Box display='flex' alignItems='middle' justifyContent='center' pt='1rem'>
              <Spinner size='xl' mr='2rem' /><Text fontSize='3rem'>Loading</Text>
            </Box>
          )}
          <Image
            src={`${ResumePng}`}
            alt='Resume'
            style={loaded ? {} : { display: 'none' }}
            onLoad={() => setLoaded(true)}
          />
        </Box>
      )}
    </Box>
  );
}
