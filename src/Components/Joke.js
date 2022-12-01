import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Joke extends Component {
    state={
        "joke_setup":"",
        "joke_punchline":"",
        is_Loading:false
    }
    fetchjoke=()=>{
      this.setState({
        is_Loading:true
      })
        axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response)=>{
                console.log(response.data.punchline)
                this.setState({
                  is_Loading:false,
                    joke_setup:response.data.setup,
                    joke_punchline:response.data.punchline
                })

            }
        )
    }

  render() {
    return (
      <div>


        <Grid container>
            <Grid  item xs={12} sm={12}>
                <Button  onClick={this.fetchjoke}
                variant='contained'
                color='primary'
                fullWidth> get a Joke</Button>
            </Grid>

            <Grid  item xs={12} sm={12}>
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
