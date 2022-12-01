import { Button, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Header from './Header'

export default class Counter extends Component {
    state={
        counter:0
    }
    onIncrement=()=>{
        
        this.setState({
            counter:this.state.counter+1
        })
    }
    onDecrement=()=>{
        
        this.setState({
            counter:this.state.counter-1
        })
    }
  render() {
    return (
      <div>
      <Header/>
      <Grid container style={{padding:50}}>
        <Grid item xs={12} sm={12}>
            <h1>{this.state.counter}</h1>
        <Button 
        margin="normal"
        variant='contained'
        color='primary'
        onClick={this.onIncrement}>+
    
        </Button>
        <br></br>
        <br></br>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <Button 
        margin="normal"
        variant='contained'
        color='primary'
        onClick={this.onDecrement}>-

        </Button>
        </Grid>
        
      </Grid>
      </div>
    )
  }
}
