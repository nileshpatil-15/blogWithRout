/* eslint-disable prettier/prettier */
// Write your JS code here


import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

export default class BlogItemDetails extends Component{

state ={
    bloginfo:{},isLoaderActive:true
}


    componentDidMount(){

this.getItemDetails()

    }

getItemDetails=async()=>{
        const {match}=this.props 
        const {params}=match
        const {id}=params
console.log(params)

        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`)
const data=await response.json() 
const updatedData={
 title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
}
this.setState({bloginfo:updatedData,isLoaderActive:false})


}


renderinfo=()=>{
    const {bloginfo}=this.state
    const {title,imageUrl,content,avatarUrl,author}=bloginfo

    return(
        <div>
            <h1 className='title'>{title}</h1>
            <div className='avatar-n-name-cntr'>
            <img className='avatar' src={avatarUrl}/>
            <p className='author'>{author}</p>
                
            </div>
<img alt={title} className='img' src={imageUrl}/>
<p className='content'>{content}</p>
        </div>
    )
}


render(){
    const {isLoaderActive}=this.state
    return(
        <div className='bloginfo-cntr'>
        {
isLoaderActive?  <Loader className='loader' type="TailSpin" color="#00BFFF" height={50} width={50} />:this.renderinfo()
        }
            
        </div>
    )
}
        
    
}
