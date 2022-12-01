import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class User extends Component {

    state={
        "jokesetup":"",
        "jokepunchline":"",
        is_Loading:false
    }
    fetchuser=()=>{
        this.setState({
            is_Loading:true
        })
        
        axios.get("https://official-joke-api.appspot.com/random_joke").then(

            (response)=>{
                console.log(response.data)
                this.setState({
                    is_Loading:false,
                    jokesetup:response.data.setup,
                    jokepunchline:response.data.punchline

                })
            }
        )


    }
  render() {
    return (
    
      <div>
        <Header/>
        <Grid container style={{padding:80}}>
            <Grid item xs={12} sm={12}>
                <Button fullWidth
                onClick={this.fetchuser} variant='contained'
                color='primary'
                >users</Button>
                
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography>
                    {this.state.is_Loading ? <CircularProgress  color='secondary'/> :(
                        <div>{this.state.jokesetup}{this.state.jokepunchline} </div>
                    )  }
                    
                    
                    
                    
                    
                    
                    </Typography>
            </Grid>
        </Grid>
      </div>
    )
  }
}
