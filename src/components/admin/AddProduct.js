import React, { useState } from "react";
import {
  Container,
  Typography,
  MenuItem,
  LinearProgress,
  Button,
  TextField,
  makeStyles,
  Grid,
} from "@material-ui/core";
import axios from "axios";
// import e from 'cors'
// import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider'
import useBaseUrl from "../../useBaseUrl";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  form: {},
  formWrapper: {
    paddingTop: theme.spacing(5),
    maxWidth: theme.spacing(50),
  },
  textField: {
    margin: theme.spacing(0.5),
  },
  btn: {
    backgroundColor: "#2c2e83",
    margin: theme.spacing(2, 0.5),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontSize: theme.spacing(4),
  },
  inputFile: {
    margin: theme.spacing(0.5),
    border: "1px solid #c2c2c2",
    width: "100%",
    borderRadius: "4px",
    padding: theme.spacing(0.5),
  },
}));

const AddProduct = () => {
  const baseUrl = useBaseUrl();

  const [imageFile, setImageFile] = useState("");
  const [uploadProgress, setuploadProgress] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [offerPrice, setofferPrice] = useState(0);
  const [responseMessage, setresponseMessage] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    upLoad();
  };

  const handleSubmitSliders = (e) => {
    e.preventDefault();
    upLoadSliders();
  };
  const inputFileHander = (e) => {
    setImageFile(e.target.files[0]);
  };

  const upLoad = async () => {
    setresponseMessage("");
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("offerPrice", offerPrice);
    formData.append("descriptions", descriptions);

    try {
      const config = {
        headers: {
          auth_token: localStorage.getItem("auth_token"),
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setuploadProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      const { data } = await axios.post(
        `${baseUrl}/admin/upload`,
        formData,
        config
      );

      if (data.message === "ok") {
        setresponseMessage("Product added successfully");
        setName("");
        setCategory("");
        setPrice("");
        setofferPrice("");
        setImageFile(null);
        setuploadProgress(0);
        setDescriptions("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const upLoadSliders = async () => {
    setresponseMessage("");
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("offerPrice", offerPrice);
    formData.append("descriptions", descriptions);

    try {
      const config = {
        headers: {
          auth_token: localStorage.getItem("auth_token"),
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setuploadProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      const { data } = await axios.post(
        `${baseUrl}/admin/upload/sliders`,
        formData,
        config
      );
      if (data.message === "ok") {
        setresponseMessage("Product added successfully");
        setName("");
        setCategory("");
        setPrice("");
        setofferPrice("");
        setImageFile(null);
        setuploadProgress(0);
        setDescriptions("");
      }
      if (data === {}) {
        setresponseMessage("Something went wrong");
      }
    } catch (error) {}
  };

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.formWrapper}>
        <Typography
          color="textSecondary"
          className={classes.title}
          variant="h1"
        >
          ADD PRODUCT
        </Typography>
        <form className={classes.form}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.textField}
            fullWidth
            label="Product name"
            variant="outlined"
          />
          <TextField
            value={descriptions}
            onChange={(e) => setDescriptions(e.target.value)}
            multiline
            rows={2}
            className={classes.textField}
            fullWidth
            label="Descriptions"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            fullWidth
            select
            label="Category"
            value={category}
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="One person bed">One person bed</MenuItem>
            <MenuItem value="One person bed base">One person bed base</MenuItem>
            <MenuItem value="Two person bed">Two person bed</MenuItem>
            <MenuItem value="Two person bed base">Two person bed base</MenuItem>
            <MenuItem value="Bunk bed">Bunk bed</MenuItem>
            <MenuItem value="Linens">Linens</MenuItem>
          </TextField>
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={classes.textField}
            fullWidth
            type="number"
            label="Price"
            variant="outlined"
          />
          <TextField
            value={offerPrice}
            onChange={(e) => setofferPrice(e.target.value)}
            className={classes.textField}
            fullWidth
            type="number"
            label="Offer Price"
            variant="outlined"
          />
          <input
            onChange={inputFileHander}
            className={classes.inputFile}
            type="file"
          />

          <Grid container spacing={2}>
            <Grid item>
              <Button
                onClick={handleSubmitProduct}
                type="submit"
                className={classes.btn}
                fullWidth
                color="primary"
                variant="contained"
              >
                Add product
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleSubmitSliders}
                type="submit"
                className={classes.btn}
                fullWidth
                color="primary"
                variant="contained"
              >
                Add to Sliders
              </Button>
            </Grid>
          </Grid>
          {uploadProgress !== 0 && uploadProgress !== 100 ? (
            <div>
              <Typography variant="caption1">Uploading</Typography>
              <LinearProgress
                variant="determinate"
                value={uploadProgress}
                valueBuffer={uploadProgress}
              />
            </div>
          ) : null}
          <Typography variant="caption1">{responseMessage}</Typography>
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
