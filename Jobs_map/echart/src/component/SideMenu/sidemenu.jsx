import React from 'react'
import { Link } from 'react-router-dom'

//antd按需引入
import { Menu, Icon } from 'antd';
//list数据
import {Hadoop} from '../../asserts/data/Hadoop'
import {java} from '../../asserts/data/java'
import {PHP} from '../../asserts/data/PHP'
import {web} from '../../asserts/data/web'
import { python } from '../../asserts/data/python'

//map数据
import { data } from '../../asserts/data/webMap'

//import { java, web, PHP, python, Hadoop } from '../../asserts/data/datas'

const { SubMenu } = Menu;



class SideMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const web1Datas = {
                pathname: "/Web1",
                state: web
        }
        const Hadoop1Datas = {
            pathname: "/Hadoop1",
            state: Hadoop
        }

        const java1Datas = {
            pathname: "/Java1",
            state: java
        }
        const PHP1Datas = {
            pathname: "/PHP1",
            state: PHP
        }
        const python1Datas = {
            pathname: "/Python1",
            state: python
        }

        const webMaps = {
            pathname: "/Web",
            state: data
        }
        return (
            <div>
                <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="1"
                            title={
                            <span>
                                <Link to={"/"}>
                                    <Icon type="solution" />
                                    <span>职位分布</span>
                                </Link>
                            </span>
                            }
                        >
                            <Menu.Item key="sub1"><Link to={webMaps}>Web</Link></Menu.Item>
                            <Menu.Item key="sub2"><Link to={"/Java"}>Java</Link></Menu.Item>
                            <Menu.Item key="sub3"><Link to={"/PHP"}>PHP</Link></Menu.Item>
                            <Menu.Item key="sub5"><Link to={"/Python"}>Python</Link></Menu.Item>
                            <Menu.Item key="sub6"><Link to={"/Hadoop"}>Hadoop</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="2"
                            title={
                            <span>
                                <Icon type="home" />
                                <span>相关企业</span>
                            </span>
                            }
                        >
                            <Menu.Item key="sub12"><Link to={Hadoop1Datas}>Hadoop</Link></Menu.Item>
                            <Menu.Item key="sub8"><Link to={java1Datas}>Java</Link></Menu.Item>
                            <Menu.Item key="sub9"><Link to={PHP1Datas}>PHP</Link></Menu.Item>
                            <Menu.Item key="sub7"><Link to={web1Datas}>Web</Link></Menu.Item>
                            <Menu.Item key="sub11"><Link to={python1Datas}>Python</Link></Menu.Item>
                        </SubMenu>
                    </Menu> 
            </div>
        );
    }
}

export default SideMenu;