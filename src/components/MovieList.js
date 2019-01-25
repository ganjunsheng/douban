import React, { Component } from 'react';
import MovieBox from './MovieBox'

//引入fetchJson 处理跨域
import fetchJson from 'fetch-jsonp'

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 定义电影的类型，当前的页码，每页保存的条数
            type: this.props.match.params.type,
            currentPage: this.props.match.params.currentPage,
            count: 12,
            // count表示每一页显示多少条数据
            movieList:[],
            total:0
        }
    }

    componentWillReceiveProps(newProps){
        // 在这个钩子函数中，可以获取到新的props，也就是外部组件给我传进来的新的props，然后使用新的值去发送请求获取新的数据
        // 注意：这个发送请求的函数，应该写在setState中的回调函数里面
        console.log(newProps)
        this.setState({
            type:newProps.match.params.type,
            currentPage:newProps.match.params.currentPage,
            movieList:[],
            total:0
        },()=>{this.getList()})
    }

    getList = () => {
        let start=(this.state.currentPage-1)*this.state.count
        let url=`https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}}`
        // fetchJson(url).then(res => res.json()).then((res) => console.log(res)
        // )
         fetchJson(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({
                movieList:res.subjects,
                total:res.total
            })
        })
    }

    componentWillMount() {
        // let start=(this.state.currentPage-1)*this.state.count
        // let url=`https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}}`
        // // fetchJson(url).then(res => res.json()).then((res) => console.log(res)
        // // )
        //  fetchJson(url)
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        //     this.setState({
        //         movieList:res.subjects,
        //         total:res.total
        //     })
        // })
        // 调用接口
        this.getList()
    }
    render() {
        return (
            <div style={{display:'flex',justifyContent:'spacetbetween',flexWrap:'wrap'}}>
            {/* 这里将MovieList组件中的history对象，通过属性传递给MovieList组件。因为在MovieList组件中，需要使用到history对象作跳转 */}
                {this.state.movieList.map(item => <MovieBox {...item} key={item.id} history={this.props.history}/>)}
            </div>
        );
    }
}