
import React from 'react'

class Work extends React.Component {
  render () {
    return(
      <div className="work-container">
        <div className="work-card">
          <img src="http://node-os.com/images/github.png" />
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.5.6</p>
          </div>
        </div>
        <div className="work-card">
          <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1474532982&di=d48df5c6516d39fa28d23249633e687d&src=http://img2.niushe.com/upload/201304/19/14-22-31-71-26144.jpg" />
          <div className="work-text">
            <h3>作品二</h3>
            <p>2016.5.7</p>
          </div>
        </div>

      </div>
    )
  }
}
export default Work;
