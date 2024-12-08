import React from 'react';
import { Box } from '@mui/material';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  return (
    <Box padding={4}>
      <ProductCard />
    </Box>
  );
};

export default Home;
