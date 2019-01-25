import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

// 引入跳转路由
import { Link,Route } from 'react-router-dom'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const {Content, Sider} = Layout;
export default class MovieContent extends Component {
    render() {
        return (
            <Layout style={{ padding: '0px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在上映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/movie/top250/1'>Top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {/* 由于三个页面都有相同的路由，即可写成下面的样式 */}
                    {/* 商品详情组件 */}
                    <Route path='/movie/detail/:id' render={ ()=> <MovieDetail/> }></Route>
                    <Route path="/movie/:type/:currentPage" render={ (props)=> <MovieList {...props}></MovieList> }></Route>
                </Content>
            </Layout>
        );
    }
}