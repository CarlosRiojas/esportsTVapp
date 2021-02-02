import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container, Divider } from '@material-ui/core';


const useStyles=makeStyles((theme) =>({
    root:{
        flexGrow:1
    },
    searchBar:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width: '70%',
        paddingTop:'80px'
    }

}))

//componente de busqueda

const SearchHub = () => {
    const classes = useStyles();

return (
    <div className={classes.root}>
        <Grid container 
            direction= 'column'
            justifyContent = 'center'
            alignItems='center'
        >
                <form className={classes.searchBar} noValidate autoComplete="off">
                     <TextField id="outlined-basic" label="Search!" variant="outlined" />
                </form>

        </Grid>
    </div>
    )
}

export default SearchHub