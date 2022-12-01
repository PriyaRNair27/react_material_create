import { Button, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class Posts extends Component {
    state={
        post:[ ],
        is_Loading:false
    }
    fetchData=()=>{
        this.setState({
            is_Loading:true
        })
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                console.log( response.data)
                this.setState({
                    is_Loading:false,
                    post:response.data
                })
            }
        )
    }
  render() {
    return (
      <div>
        <Header/>
        <Grid container style={{padding:80}}>
            <Grid item xs={12} sm={12} md={12    } >
                <Button variant='contained' onClick={this.fetchData}
                color='primary'
                fullWidth
                >
                    POSTS
                </Button>
              
                
                <Grid item xs={12} sm={12}>
                    <Typography>
                        {this.state. is_Loading ? <CircularProgress color='secondary'/>: 
                        (
                            <div>

                            </div>
                            
                        )}
                    </Typography>
                   

                </Grid>

               <Grid item xs={12} sm={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>userid</TableCell>
                                <TableCell>id</TableCell>
                                <TableCell>title</TableCell>
                                <TableCell>message</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.state.post.map(
                            (value,index)=>{
                                return   <TableRow>
                                <TableCell>{value.userId}</TableCell>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.title}</TableCell>
                                <TableCell>{value.body}</TableCell>
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
