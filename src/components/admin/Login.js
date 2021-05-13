import React, {useState, useEffect} from 'react'
// import useStyles from './useStylesLogin';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import useBaseUrl from '../../useBaseUrl'

import {
    Container,
    Button,
    CssBaseline,
    TextField,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signIn:{
    color : "#bd1522",
  },
  container:{
    marginTop: "30px",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "5px 20px 20px 20px",
    maxWidth: "350px",
  },

}));


const AdminLogin= ()=> {
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")
    const baseUrl = useBaseUrl()
    
    const handleSubmit = (e) => {
      e.preventDefault();
      login();
    }

    useEffect(() => {
    },[])

    const login = async() =>{
      const data  = {
        username : username,
        password: password,
      }
      const fetchedData = await axios.post(`${baseUrl}/login`, data)
      console.log(fetchedData.data.token)
      if(fetchedData.data.token){
        localStorage.setItem('auth_token', fetchedData.data.token)
        console.log(localStorage.getItem('auth_token'))
        setResponse(fetchedData.data.message)
        window.location.reload();
      }else{
        setResponse(fetchedData.data.message)
      }
    }

    return(
        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography className={classes.signIn} style={{fontSize:"30px"}} component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="username"
                autoFocus
              />
              <TextField
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
              />
              <Typography>
                {response}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                style={{backgroundColor:"#2c2e83", color: "#fafafa",}}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      );
}

export default AdminLogin