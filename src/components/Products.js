import React from 'react';
import '../components/Products.css';
import Navbar from './navbar';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import aiLogo from '../assets/aiLogo.jpg';

const product = () => {
    return(
        <>
            <Navbar />
            <div className="products-container">
                <div className="products-row">
                    <div className="product">
                        <Card className="product-card">
                            <CardMedia
                                className="product-media"
                                image="#"
                                title="Card 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Card 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is the first card
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default product