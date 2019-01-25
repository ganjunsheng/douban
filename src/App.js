import React, { Component } from 'react';
// import { Button } from 'antd';
import './App.css';
  //引入路由组件
  import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'

//  引入电影页面组件
import MovieContent from './components/MovieContent' 
import About from './components/About' 
import { Layout,Menu } from 'antd';
const {
    Header, Footer, Content,
} = Layout;

// 

class App extends Component {
    render() {
        return (
        <Router>
            <Layout >
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Switch>
                        {/* exact加这个是为了继续向下执行 */}
                        <Route path="/" exact render={ ()=> <h1>这是豆瓣电影首页</h1> }></Route>
                        <Route path="/movie" render={ ()=> <MovieContent/> }></Route>
                        <Route path="/about" render={ ()=> <About/> }></Route>
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Router>
        );
    }
}

export default App;