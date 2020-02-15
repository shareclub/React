import React from 'react'

//引入路由
import { Switch,  Route } from 'react-router-dom'



//页面
import Main from '../../page/Main/Main'
import Web from '../../page/Maps/Web'
import Hadoop from '../../page/Maps/Hadoop'
import Java from '../../page/Maps/Java'
import Python from '../../page/Maps/Python'
import Php from '../../page/Maps/Php'
import Lists from '../../page/Lists/lists'

//UI-antd按需引入
import { Layout } from 'antd';
const { Content, Footer } = Layout;


class ContentMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>
                <div style={{ background: '#fff', minHeight: 750, marginTop: 20 }}>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route exact path="/Web" component={Web}></Route>
                        <Route exact path="/Java" component={Java}></Route>
                        <Route exact path="/PHP" component={Php}></Route>
                        <Route exact path="/Python" component={Python}></Route>
                        <Route exact path="/Hadoop" component={Hadoop}></Route>

                        <Route exact path="/Web1" component={Lists} ></Route>
                        <Route exact path="/Java1" component={Lists}></Route>
                        <Route exact path="/PHP1" component={Lists}></Route>
                        <Route exact path="/Python1" component={Lists}></Route>
                        <Route exact path="/Hadoop1" component={Lists}></Route>
                    </Switch>
                </div>
                <Footer>制作者：刘志东 3116008798 16计算机科学与技术</Footer>
                </Content>
            </div>
        );       
    }
}

export default ContentMain;