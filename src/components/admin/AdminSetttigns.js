import { Container, Button, Typography, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useBaseUrl from '../../useBaseUrl'
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper:{
        display: "flex",
        flexDirection: "column",
        maxWidth: theme.spacing(100),
        marginTop: theme.spacing(5)
    },
    title:{
        margin: theme.spacing(5),
        fontSize: theme.spacing(3)
    },
    textField:{
        margin: theme.spacing(.5, 0)
    },
    btn:{
        margin : theme.spacing(2, 0),
        backgroundColor: "#2c2e83",
        color: "#fafafa"
    },
    message:{
        fontSize: theme.spacing(2.5),
        color: "#ff5b5b"
    },
}))

const AdminSettings = () => {
    const baseUrl = useBaseUrl();

    const classes = useStyles()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async()=> {
        if(newPassword === '' || oldPassword === '' || confirmedPassword === ''){
            setMessage("Please give all information")
            return
        }
        
        const verifications = await passIsCorrect(oldPassword)
        if(!verifications){
            setMessage("Password incorrect")
            return

        }

        if(newPassword !== confirmedPassword){
            setMessage("Password did not match")
            return

        }

        const response = await changePassword(confirmedPassword);
        console.log(response.data.message)

        if(response.data.message === "ok"){
            setMessage("Password changed successfully")
            setNewPassword("")
            setOldPassword("")
            setConfirmedPassword("")
        }

    }

    const passIsCorrect = async(pass) => {
        try {
            
            const payload = {
                password : pass
            }

            const config = {
                headers :{
                  auth_token : localStorage.getItem("auth_token"),
                  'Content-Type' : 'application/json'
                }
              }
    
            const response = await axios.post(`${baseUrl}/admin/password/verify`, payload, config)
            if(response.data.message === true){
                return true
            }
            else{
                return false
            }

        } catch (error) {
            return false;
        }
    }

    const changePassword = async(pass)=> {
        try {

            const payload = {
                password : pass
            }

            const config = {
                headers :{
                  auth_token : localStorage.getItem("auth_token")
                }
              }
    
            const response = axios.put(`${baseUrl}/admin/password`, payload, config)
            return response

        } catch (error) {
            return error
        }
    }

    return (
        <Container className={classes.root}>
            <div className={classes.wrapper} >
                <Typography className={classes.title} color='textSecondary' variant='h1'>
                    Want to change admin password ?
                </Typography>
                <TextField
                    required 
                    label="Old password"
                    variant="outlined"
                    className={classes.textField}
                    onChange={(e)=> setOldPassword(e.target.value)}
                    value={oldPassword}
                >

                </TextField>

                <TextField 
                    required 
                    label="New password"
                    variant="outlined"
                    className={classes.textField}
                    onChange={(e)=> setNewPassword(e.target.value)}
                    value={newPassword}
                >

                </TextField>
                <TextField
                    required 
                    label="Confirmed password"
                    variant="outlined"
                    className={classes.textField}
                    onChange={(e)=> setConfirmedPassword(e.target.value)}
                    value={confirmedPassword}
                >

                </TextField>
                <Button onClick={handleSubmit} className={classes.btn} size="small" fullWidth variant='outlined'>
                    Change Password
                </Button>
                <Typography className={classes.message} variant='h1'>
                    {message}
                </Typography>
            </div>
        </Container>
    )
}

export default AdminSettings
