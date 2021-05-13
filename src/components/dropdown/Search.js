import React, { useEffect, useContext } from "react";
import useBaseUrl from "../../useBaseUrl";
// import { useCombobox } from 'downshift'

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { SearchContext } from "../../searchContext";

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

const Search = ({ productsData }) => {
  const classes = useStyles();
  const baseUrl = useBaseUrl();

  const { searchData } = useContext(SearchContext);

  useEffect(() => {}, [searchData]);

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container spacing={0} md={12} sm={12} xs={12} lg={12}>
          {productsData.data != null
            ? productsData.data
                .filter((item) => item.name === searchData)
                .map((item) => (
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
};

export default Search;
