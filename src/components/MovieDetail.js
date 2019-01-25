import React, { Component } from 'react';
//引入fetchJson 处理跨域
import fetchJson from 'fetch-jsonp'

import { Button } from 'antd'
// 引入加载动漫
import { Spin, Alert } from 'antd';


// this.props.match.params.id 获取携带过来的参数
export default class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            movieDetail:{},
            loading:false
        }
    }

    // 页面加载的时候直接请求数据
    componentWillMount(){
        this.setState({
            loading:true
        })
        let url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}`
        console.log(url);
        fetchJson(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            // 操作数据，相当于赋值
            this.setState({
                movieDetail:res,
                loading:false
            })
        })
    }

    // 返回
    goBack =() => {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
            {
               this.state.loading
               ?
            //    加载动画
                <Spin tip="Loading...">
                  <Alert
                    message="拼命加载中..."
                    description="Further details about the context of this alert."
                    type="info"
                  />
                </Spin>
               :<div>
                   <Button type="primary" onClick={this.goBack}>返回</Button>
                   <div style={{textAlign:'center'}}>
                    <h1>{this.state.movieDetail.title}</h1>
                    <img src={this.state.movieDetail.images.large} alt={this.state.movieDetail.title}/>
                </div>
                <p>{this.state.movieDetail.summary}</p>
               </div>
            }
            </div>
        );
    }
} 