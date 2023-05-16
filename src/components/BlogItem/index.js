/* eslint-disable prettier/prettier */
// Write your JS code here

import { Link } from 'react-router-dom'

import './index.css'




const BlogItem = (props) => {
    const {data}=props
    const { avatarUrl, author, id, topic, title,imageUrl } = data

    return (
        
        <Link to={`/blogs/${id}`}>
        <li className='blogItem'>
        <img className='image' src={imageUrl} alt='itemimage'/>
        <p className='topic'>{topic}</p>
        <h1 className='title'>{title}</h1>
        <p className='author'>{author}</p>


        </li>

        </Link>
    )
}

export default BlogItem