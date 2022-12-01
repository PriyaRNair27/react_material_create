
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar color='secondary'>
          
       
          <Toolbar>
        
         
              <Typography><Link href="/">Home</Link></Typography>&nbsp;&nbsp;&nbsp;
              <Link href="/count">Counter</Link>&nbsp;&nbsp;&nbsp;
              <Link href="/add">Add course</Link>&nbsp;&nbsp;&nbsp;
              <Link href="/post">Post</Link>&nbsp;&nbsp;&nbsp;
              <Link href="/news"> Live News</Link>&nbsp;&nbsp;&nbsp;
              <Link href="/user">User</Link>&nbsp;&nbsp;&nbsp;
              <Link href="/course">Courses</Link>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>

        

       


      </div>
    )
  }
}
