import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class Addcourses extends Component {
    state={
        courseTitle: "",
        courseDescription: "",
        courseDate:"",
        courseDuration: "",
        courseVenue: ""
    }

    onHandle=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onRead=()=>{
       console.log(this.state)
       axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfully added")

                }
                else{
                    alert("something went wrong")
                }
                
            }
        )





       
    }
  render() {
    return (
      <div>
        <Header/>

        <Grid container  style={{padding:50}}>
       
            <Grid  style={{padding:5}}item xs={12}  sm={6} md={6} lg={6}>
                <TextField variant='outlined'
                required
                type="text"
                fullWidth
                label="enter name"
                onChange={this.onHandle}
                name='courseTitle'
                />
            </Grid>
            <Grid style={{padding:5}} item xs={12}  sm={6} md={6} lg={6}>
            <TextField variant='outlined'
                required
                fullWidth
                onChange={this.onHandle}
                type="text"
                label="enter description"
                name='courseDescription'
                />
            </Grid>
             <Grid style={{padding:5}} item xs={12}  sm={6} md={6} lg={6}>
             <TextField variant='outlined'
                required
                onChange={this.onHandle}
                fullWidth
                type="date"
                label="enter date"
                name='courseDate'
                />
             </Grid>
            <Grid style={{padding:5}} item xs={12}  sm={6} md={6} lg={6}>
            <TextField variant='outlined'
                required type="text"
                fullWidth
                onChange={this.onHandle}
                label="enter duration"
                name='courseDuration'
                />
            </Grid>
            <Grid style={{padding:5}} item xs={12}  sm={6} md={6} lg={6}>
            <TextField variant='outlined'
                required
                onChange={this.onHandle}
                type="text"
                fullWidth
                label="enter venue"
                name='courseVenue'
                />
            </Grid>
            <Grid   item xs={12}  sm={12} md={12} lg={12}>
                <Button 
                fullWidth variant='contained'
                onClick={this.onRead}
                 color="secondary">submit</Button>
            </Grid>

        </Grid>
      </div>
    )
  }
}
