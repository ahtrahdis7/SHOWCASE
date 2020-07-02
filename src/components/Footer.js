import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardMedia, List, ListItem, Typography} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Images from './images';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    img: {
        height: 500,
        width: 400,
    },
    cardImg: {
        padding: '5px',
        height: 500,
        width: 400,
        position: 'relative'

    },
    cardText: {
        color: "#fafafa",

    },
    grid: {
        padding: '50px',
        backgroundColor: "#1a237e"
    },
    list: {
        color: "#fafafa",
        paddingLeft: '50px'
    }


})
function Footer(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid className={classes.grid} md={12}>
                <Grid item md={3}>
                    <Card className={classes.cardImg}>
                        <CardMedia
                            image={Images.profilepic}
                            className={`${classes.img}`}
                        />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <List className={classes.list}>
                        <ListItem>
                            <Typography>
                                <h3>Contact :</h3>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <LinkedInIcon/>
                            <Typography> mallicksidhartha7</Typography>
                        </ListItem>
                        <ListItem>
                            <EmailIcon />
                            <Typography>mallicksidhartha7@gmail.com</Typography>
                        </ListItem>
                        <ListItem>
                            <PhoneIcon />
                            <Typography>7789025800</Typography>
                        </ListItem>
                        <ListItem>
                            <TwitterIcon/>
                            <Typography> SidMallick7</Typography>
                        </ListItem>
                        <ListItem>
                            <InstagramIcon/>
                            <Typography> SidMallick7</Typography>
                        </ListItem>

                    </List>
                </Grid>
                <Grid item md={5} className={classes.cardText}>
                    <h3>About Me.</h3>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;