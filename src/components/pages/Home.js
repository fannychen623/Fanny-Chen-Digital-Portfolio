// import package and local style sheet
import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../../styles/Home.css';

import {
  Box, Tooltip,
} from '@chakra-ui/react';

export default function Home() {

  const navigate = useNavigate();
  const toAbout = () => navigate('/about');

  return (
    <Box className="home">
      <h2>Click on name to enter portfolio</h2>
      <Tooltip label='ENTER PORTFOLIO' placement='top' fontSize='1vw' mb='1vw' bg='var(--shade4)' color='white'>
        <h1 className="name" onClick={toAbout}>FANNY CHEN</h1>
      </Tooltip>
    </Box>
  );
}
