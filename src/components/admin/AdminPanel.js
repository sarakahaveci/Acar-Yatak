import React from 'react'
import { Container, Button, AppBar, Toolbar, makeStyles} from '@material-ui/core'
import { AddCircleOutline, ExitToApp, List, Person } from '@material-ui/icons'
import AdminSettings from './AdminSetttigns'
import AllProduct from './AllProducts'
import AddProduct from './AddProduct';
import Sliders from './Sliders';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    appbar:{
        backgroundColor: "#2c2e83",
        zIndex: 1
        
    },
    toolbar:{
    },
    button:{
        color: "#fafafa",
        marginRight: "8px"
    },
    adminButton:{
        color: "#fafafa",
    },
    buttonGroup1:{
        display:"flex",
        flexGrow:1,
        
    },
    link:{
        textDecoration: "none",
        color: "#fafafa",
        transition: "0.5s ease all",
        fontSize: theme.spacing(1.4),
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(1),
        },
        '&:hover':{
            color: "#fff96d",
            textDecoration: "none",
        }
    }
}))

const AdminPanel = ()=> {

    const classes = useStyles()

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        window.location.reload();
    }

    return (
        <div>
            <AppBar className={classes.appbar} elevation={0} position='sticky'>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.buttonGroup1}>
                        <Button
                        color="primary"
                        className={classes.button}
                        startIcon={<AddCircleOutline/>}
                        >
                            <Link to='/admin/add' className={classes.link}> Add Product </Link>
                        </Button>

                        <Button
                        color="primary"
                        className={classes.button}
                        startIcon={<List/>}
                        >
                            <Link to='/admin/products' className={classes.link}> All Products</Link>
                        </Button>

                        <Button
                        color="primary"
                        className={classes.button}
                        startIcon={<List/>}
                        >
                            <Link to='/admin/sliders' className={classes.link}> Sliders </Link>
                        </Button>

                        <Button
                        color="primary"
                        className={classes.adminButton}
                        startIcon={<Person>send</Person>}
                        >
                        <Link to='/admin/settings' className={classes.link}> Admin Settings</Link>
                        </Button>
                    </div>
                    

                    <Button
                    onClick={handleLogout }
                    color="primary"
                    className={classes.adminButton}
                    startIcon={<ExitToApp>send</ExitToApp>}
                    >
                        Logout
                    </Button>

                </Toolbar>
            </AppBar>

            <Container>
                <div>
                    <Switch>
                        <Route path='/admin/add'>
                            <AddProduct/>
                        </Route>

                        <Route path='/admin/settings'>
                            <AdminSettings/>
                        </Route>

                        <Route path='/admin/products' >
                            <AllProduct/>
                        </Route>

                        <Route path='/admin/sliders' >
                            <Sliders/>
                        </Route>

                    </Switch>
                </div>
            </Container>
        </div>
    )
}

export default AdminPanel
