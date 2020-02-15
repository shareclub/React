import React from 'react'
import './main.css'
import Background from './background.jpg'

const bg = {
    width: "1671px",
    height: "902px",
    backgroundImage:`url(${Background})`
}

class Main extends React.Component {
    render(){
        return(
            <div className="main" style={bg}>
                <div className="content" >
                    <h1 className="font">欢迎使用招聘数据可视化系统</h1>
                    <h2>制作者：刘志东</h2>
                    <h2>3116008798 计算机科学与技术3班</h2>
                </div>
            </div>
        );
    }
}

export default Main;