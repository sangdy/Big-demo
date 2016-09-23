import React from 'react';
import echarts from 'echarts';

class About extends React.Component {
  componentDidMount(){

      let option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};


    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
  }

  render () {
    return(
      <div className="about-container">
        <h1>我的技能展示</h1>
        <div id="main" style={{width: "800px",height:"600px"}}></div>
        <h1>个人信息</h1>
        <p>喜欢写代码，喜欢睡觉，更喜欢写点东西！</p>
      </div>
    )
  }
}

export default About;
