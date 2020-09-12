import React, {Component} from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default class Sidebar extends Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      return (
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:'100vh', flex:1}}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{paddingTop:'40px'}}>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/shippings">Shippings</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<TeamOutlined />}>
                Team
              </Menu.Item>
            </Menu>
          </Sider>
    );
  }
}

