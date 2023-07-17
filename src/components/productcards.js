import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import '../components/Products.css';

const _productCards = (props) => {
    const { header, body, img} = props;
    return(
        <div className="product">
            <Card className="product-card">
                <CardMedia 
                    className="product-media"
                    component="img"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default _productCards;