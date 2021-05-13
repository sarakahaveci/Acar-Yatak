import React, { useEffect } from "react";
import {
  Button,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import useBaseUrl from "../../useBaseUrl";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {},
  tblCell: {
    fontSize: theme.spacing(2),
  },
}));

const TableData = ({ productData }) => {
  const classes = useStyles();
  const baseUrl = useBaseUrl();

  const delSlide = async (id) => {
    console.log(id);
    const config = {
      headers: {
        auth_token: localStorage.getItem("auth_token"),
      },
    };

    const response = await axios.patch(
      `${baseUrl}/admin/sliders/${id}`,
      {},
      config
    );
    console.log(response);
    window.location.reload();
  };

  useEffect(() => {}, []);

  return (
    <>
      {productData.data &&
        productData.data.map((item, i) => (
          <>
            <TableRow>
              <TableCell size="small">
                <Typography className={classes.tblCell} variant="h5">
                  {i + 1}
                </Typography>
              </TableCell>
              <TableCell size="small">
                <Typography className={classes.tblCell} variant="h5">
                  {item.name}
                </Typography>
              </TableCell>
              <TableCell size="small">
                <Typography className={classes.tblCell} variant="h5">
                  {item.category}
                </Typography>
              </TableCell>
              <TableCell size="small">
                <Typography className={classes.tblCell} variant="h5">
                  {item.price}
                </Typography>
              </TableCell>
              <TableCell size="small">
                <Typography className={classes.tblCell} variant="h5">
                  {item.offerPrice}
                </Typography>
              </TableCell>
              <TableCell size="small" className={classes.tblCell}>
                <div style={{ width: "50px", height: "auto" }}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={`${baseUrl}/${item.imageUrl}`}
                    alt=""
                  />
                </div>
              </TableCell>
              <TableCell size="small">
                <Button
                  color="secondary"
                  onClick={() => delSlide(item._id)}
                  size="small"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </>
        ))}
    </>
  );
};

export default TableData;
