//全局文件
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router} from 'react-router-dom'



//样式
import './index.css'

import SideMenu from './component/SideMenu/sidemenu'  //导航
import ContentMain from './component/ContentMain/contentMain' //内容
//UI-antd按需引入
import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Sider } = Layout;


class App extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Router>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <SideMenu />
                    </Sider>
                    <Layout>
                        <ContentMain />
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();