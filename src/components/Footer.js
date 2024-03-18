// import package and local style sheet
import React from 'react';

import { Text, Box } from '@chakra-ui/react'

import '../styles/footer.css';

export default function Footer() {
  return (
    <Box className="footer" display='flex' py='0.5rem'>
      <Text my='auto'>Designed and Created by Self</Text>
      <Text as='b' fontSize='1.25vw' my='auto'>Fanny Chen</Text>
      <Text my='auto'>Last updated March 2024</Text>
    </Box>
  );
}
