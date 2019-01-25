import React, { Component } from 'react';
// 引入星星插件
import { Rate } from 'antd'

export default class MovieBox extends Component{
    render() {
        return (
            // 点击的时候，利用到MovieList传递过来的history对象，进行跳转
            <div className='movielistbox' onClick={ () => this.props.history.push(`/movie/detail/${this.props.id}`) }>
             <div>
               <img src={this.props.images.medium} alt={this.props.title} style={{width:100,height:140}}/>
             </div>
             <p><strong>名称:</strong>{this.props.title}</p>
             <p><strong>上映年份:</strong>{this.props.year}</p>
             <p><strong>电影类型:</strong>{this.props.genres.join(',')}</p>
             <Rate allowHalf defaultValue={this.props.rating.average/2}></Rate>
         </div>
        );
    }
}
