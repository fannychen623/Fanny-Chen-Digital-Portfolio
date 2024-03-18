// import package and local style sheet
import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
  Box, Tooltip,
} from '@chakra-ui/react';

import '../styles/home.css';

export default function Home() {

  const navigate = useNavigate();
  const toMainProjects = () => navigate('/main-projects');

  return (
    <Box className="home">
      <Tooltip label='ENTER PORTFOLIO' placement='top' fontSize='1vw' mb='1vw' bg='var(--shade4)' color='white'>
        <h1 className="name" onClick={toMainProjects}>FANNY CHEN</h1>
      </Tooltip>
      <h2>Click name to enter portfolio</h2>
    </Box>
  );
}
