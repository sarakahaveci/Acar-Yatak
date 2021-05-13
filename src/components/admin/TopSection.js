import React from 'react'
import {  makeStyles,Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
    root:{

    },
    heading:{
        color: "#383838de",
        fontSize: theme.spacing(2)
    },
    tblCell:{
    },
    card:{
        margin: theme.spacing(8, 0),
    },
    cardTitle:{
        fontSize: theme.spacing(2)
    },
    cardcontent:{
        fontSize: theme.spacing(1.5)
    },
    paper:{
        padding: theme.spacing(2)
    }

}))

function TopSection() {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            Totall Products
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            One Person Bed
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            One Person Bed Base
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            Two Person Bed
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            Two Person Bed Base
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            Bunk Bed
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cardTitle} variant="h1">
                            Linens
                        </Typography >
                        <Typography className={classes.cardcontent} variant="h1">
                            200
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>   
        </>
    )
}

export default TopSection
