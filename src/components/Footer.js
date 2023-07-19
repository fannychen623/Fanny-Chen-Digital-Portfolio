// import package and local style sheet
import React from 'react';

import {
  Text, Box,
} from '@chakra-ui/react'

import '../styles/footer.css';

export default function Footer() {
  return (
    <Box className="footer" display='flex' justifyContent='space-between'>
      <Text>Designed and Created by Self</Text>
      <Text as='b' fontSize='1.25vw'>Fanny Chen</Text>
      <Text>Last updated July 2023</Text>
    </Box>
  );
}
