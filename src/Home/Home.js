<<<<<<< HEAD
import React from 'react'

class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      }
    }
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2 style={styles.h2}>HI, I'M <span style={{color:'#00bcd4'}}>SANGDY</span></h2>
            <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/sangdy" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}
=======
import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return(
      <div>home</div>
    )
  }
}

>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
export default Home;
