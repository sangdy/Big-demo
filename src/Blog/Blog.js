<<<<<<< HEAD
import React from 'react';

import BlogCard from '../components/BlogCard';
import { getJson } from '../Utils/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        this.setState({
          data:recData.getJson,
          wait:false
        })
      });
  }
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { this.state.wait ? '请稍等' : this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> ) }
      </div>
=======
import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    return(
      <div>blog</div>
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
    )
  }
}

export default Blog;
