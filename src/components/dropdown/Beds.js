import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
import "./Beds.css";
import axios from "axios";
import useBaseUrl from "../../useBaseUrl";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(0),
  },
  root: {
    maxWidth: 310,
    borderRadius: "2px",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      maxWidth: "100%",
    },
  },
  media: {
    height: 200,
  },
}));

function Beds({ products }) {
  const baseUrl = useBaseUrl();
  const [productData, setProductData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const { data } = await axios.get(`${baseUrl}/public/products`);
    if (productData.data) {
      if (productData.data.length !== data.data.length) {
        setProductData(data);
      }
    } else {
      setProductData(data);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container spacing={0} md={12} sm={12} xs={12} lg={12}>
          {productData.data != null
            ? productData.data.map((item) => (
                <Grid item>
                  <Card elevation={1} className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`${baseUrl}/${item.imageUrl}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          {item.descriptions}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <div style={{ textDecoration: "line-through" }}>
                            {" "}
                            Price: {item.price}{" "}
                          </div>
                          <div> Sell: {item.offerPrice} </div>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            : "Loading"}
        </Grid>
      </div>
    </>
  );
}

export default Beds;
