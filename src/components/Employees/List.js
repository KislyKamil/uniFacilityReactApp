import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Person from "./Person";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const arr = [
    {name: "Piotr Zimmerman", title: "mgr"},
    {name: "Konrad Piątkowski", title: "dr hab. inż."},
    {name: "Marcin Jęzor", title: "dr hab."}
]

let person;

const showDetails = (name, title) => {
    person = (<Person
        name={name}
        title={title}
        letters={name.slice(0, 1) + name.split(" ")[1].slice(0, 1)}
        url={"https://source.unsplash.com/600x350/?it,computers,science"}
    />)

}

function generate() {
    return arr.map((value, index) =>
        <div key={index} className="item-person" onClick={() => showDetails(value.name, value.title)}>
            <ListItem>
                <ListItemIcon>
                    <PersonIcon fontSize="large" style={{color: "black"}}/>
                </ListItemIcon>
                <ListItemText
                    primary={value.name}
                    secondary={value.title}
                />
            </ListItem>
        </div>
    );
}

export default function ListEmployees() {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const handleState = () => {
        setState(!state);
    }
    return (
        <div className="list-workers" onClick={handleState}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.title}>
                            Pracownicy zakładu
                        </Typography>
                        <div className={classes.demo}>
                            <List dense={false}>
                                {generate()}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="details-workers">
                {person}
            </div>
        </div>
    );
}
