import { Button, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class Courses extends Component {
    state={
        course:[],
        is_Loading:false
    }
    fetchData=()=>{
        this.setState({
            is_Loading:true
        })
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response.data)
                this.setState({
                    is_Loading:false,
                    course:response.data
                })
            }
        )
    }
  render() {
    return (
      <div>

        <Header/>
        <Grid container style={{padding:80}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button  variant='contained'
                fullWidth
                onClick={this.fetchData}
                color='primary'>get Courses 

                </Button>
                
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography>
                        {this.state.is_Loading ? <CircularProgress/> :(
                            <div></div>
                        )}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>id</TableCell>
                                                <TableCell>courseTitle</TableCell>
                                                <TableCell>courseDescription</TableCell>
                                                <TableCell>courseDuration</TableCell>
                                                <TableCell>courseDate</TableCell>
                                                <TableCell>courseVenue</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>{this.state.course.map(
                                            (value,index)=>{
                                                return<TableRow>
                                                <TableCell>{value._id}</TableCell>
                                                <TableCell>{value.courseTitle}</TableCell>
                                                <TableCell>{value.courseDescription}</TableCell>
                                                <TableCell>{value.courseDuration}</TableCell>
                                                <TableCell>{value.courseDate}</TableCell>
                                                <TableCell>{value.courseVenue}</TableCell>
                                            </TableRow>
                                            }
                                        )}
                                            
                                        </TableBody>
                                    </Table>
                                </TableContainer>


                </Grid>

            </Grid>
        </Grid>
      </div>
    )
  }
}
