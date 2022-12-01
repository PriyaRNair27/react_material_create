import { Avatar, Button, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

export default class News extends Component {
    state={
    news:[],
    is_Loading:false

    }
    fetchNews=()=>{
        this.setState({
            is_Loading:true
        })
        axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39f4f5bf493a413091f729843d583490").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState({
                    is_Loading:false,
                    news:response.data.articles
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
        <Button variant='contained'
        fullWidth
        color='primary'
        onClick={this.fetchNews}>NEWS

        </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
            <Typography>
                {this.state.is_Loading ? <CircularProgress color='secondary'/> :
                (
                    <div></div>
                )}
            </Typography>

        </Grid>
        <Grid itemxs={12} sm={12}>
             
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Date of published</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Small description</TableCell>
                        <TableCell>Desription</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody> {this.state.news.map(
                        (value,index)=>{
                            return<TableRow>
                            <TableCell><Avatar variant='square' src={value.urlToImage}/></TableCell>
                            <TableCell>{value.author}</TableCell>
                            <TableCell>{value.publishedAt}</TableCell>
                            <TableCell>{value.title}</TableCell>
                            <TableCell>{value.description}</TableCell>
                            <TableCell>{value.content}</TableCell>
                            </TableRow>
                        }
                    )}
                    
                </TableBody>
            </Table>
        </TableContainer>
       
            </Grid>
        </Grid>
      </div>
    )
  }
}
