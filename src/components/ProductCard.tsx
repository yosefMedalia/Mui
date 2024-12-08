import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import myImage from '../assets/image-product-4-thumbnail.jpg'; 

const ProductCard: React.FC = () => {
  const [quantity, setQuantity] = useState(0); 

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 0 && setQuantity(quantity - 1); 

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        width: '100%', 
        backgroundColor: '#f5f5f5', 
        padding: 2, 
      }}
    >
      {/* הכרטיס עצמו */}
      <Paper elevation={3} sx={{ padding: 3, maxWidth: '900px', borderRadius: '15px', width: '100%' }}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          {/* אזור התמונות */}
          <Box flex="1">
            {/* התמונה הראשית */}
            <img
              src={myImage} 
              alt="Sneakers"
              style={{
                width: '100%', 
                borderRadius: '15px', 
              }}
            />
            {/* גלריית תמונות קטנות */}
            <Grid container spacing={1} marginTop={2}>
              {[1, 2, 3, 4].map((thumb, index) => (
                <Grid item xs={3} key={index}> 
                  <img
                    src={myImage} 
                    alt={`Thumbnail ${thumb}`}
                    style={{
                      width: '100%',
                      borderRadius: '15px', 
                      cursor: 'pointer',
                      border: '1px solid #ccc', 
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* אזור הפרטים */}
          <Box flex="1">
            {/* שם החברה */}
            <Typography variant="subtitle2" color="textSecondary">
              SNEAKER COMPANY
            </Typography>
            {/* כותרת המוצר */}
            <Typography variant="h4" fontWeight="bold" marginY={2}>
              Fall Limited Edition Sneakers
            </Typography>
            {/* תיאור המוצר */}
            <Typography variant="body1" color="textSecondary" marginBottom={3}>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand everything
              the weather can offer.
            </Typography>
            {/* מחיר המוצר */}
            <Box display="flex" alignItems="center" marginBottom={3}>
              <Typography variant="h4" fontWeight="bold" marginRight={2}>
                $125.00
              </Typography>
              {/* הנחה באחוזים */}
              <Typography
                variant="body1"
                color="primary"
                fontWeight="bold"
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '5px',
                  padding: '2px 8px',
                }}
              >
                50%
              </Typography>
            </Box>
            {/* מחיר מקורי מחוק */}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ textDecoration: 'line-through' }}
            >
              $250.00
            </Typography>

            {/* אזור הכמות */}
            <Box display="flex" alignItems="center" gap={2} marginTop={4}>
              {/* כפתורי הוספה/הפחתה */}
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '4px 8px',
                }}
              >
                <IconButton onClick={handleDecrement}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1">{quantity}</Typography>
                <IconButton onClick={handleIncrement}>
                  <AddIcon />
                </IconButton>
              </Box>
              {/* כפתור הוספה לעגלה */}
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductCard;
