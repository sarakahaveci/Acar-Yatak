import {
  Card,
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import axios from "axios";
import useBaseUrl from "../../useBaseUrl";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    color: "#383838de",
    fontSize: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(5, 0),
  },
  title: {
    margin: theme.spacing(5),
    fontSize: theme.spacing(4),
  },
}));

const AllProducts = () => {
  const baseUrl = useBaseUrl();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getAllProducts();
  });

  const getAllProducts = async () => {
    const { data } = await axios.get(`${baseUrl}/public/products`);
    setProductData(data);
  };

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography color="textSecondary" className={classes.title} variant="h1">
        ALL PRODUCTS
      </Typography>
      <Card className={classes.card}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="head" size="small">
                  <Typography className={classes.heading} variant="h6">
                    Serial
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Name
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Category
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Price
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Offer Price
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Photo
                  </Typography>
                </TableCell>
                <TableCell size="small">
                  <Typography className={classes.heading} variant="h6">
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tblBody}>
              {productData.data ? (
                <TableData productData={productData} />
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default AllProducts;
