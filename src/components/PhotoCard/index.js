import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        borderBox: 'box-sizing',
        display: "inline-block",
        width: 350,
        marginLeft: "15px",
        // marginBottom: "75px",
        padding: "10px",
        backgroundColor: "#efe9db",
    },
    images: {
        maxWidth: "100%",
        margin: "15px",
        // marginBottom: "85px"
    },
    typography: {
        // marginBottom: "20px",
        marginTop: "15px",
        // padding: "10px",
        fontSize: "24px",
        textTransform: "lowercase",
        fontFamily: "Playfair Display",
        color: "#766c5b"
        
    }
})

function PhotoCard(props) {
    const styles = useStyles();
    return (
        <Grid item>
            <Card className={styles.root}>
                <div className={styles.images}>
                    <img className="card-img" src={props.project.image} alt={props.project.alt}/>
                    <Typography className={styles.typography}>
                    <h3>{props.project.title}</h3>
                    </Typography>               
                </div>
            </Card>
        </Grid>
    )
}

export default PhotoCard