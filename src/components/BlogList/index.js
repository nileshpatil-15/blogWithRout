/* eslint-disable prettier/prettier */
// Write your JS code here
import { Component } from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {

    state = {
        blogList: [], isDataFetched: false
    }

    componentDidMount() {
        this.getBlogDetails()
    }

    getBlogDetails = async () => {
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json();

        const updatedData =
            data.map(eachData => ({
                author: eachData.author,
                avatarUrl: eachData.avatar_url,
                imageUrl:eachData.image_url,
                id: eachData.id,
                title: eachData.title,
                topic: eachData.topic
            }))


        console.log('didmount called')
        // this.setState({blogList:})

        this.setState({ blogList: updatedData, isDataFetched: true })


    }

    render() {
        const { isDataFetched, blogList } = this.state
        console.log('rendercalled')

        return (
            <ul className='bloglist-container'>

           { isDataFetched ? blogList.map(each => <BlogItem data={each} key={each.id} />) : <Loader data-test-d="loader" className='loader' type="TailSpin" color="#00BFFF" height={50} width={50} />}
</ul>
        )
    }
}


export default BlogList
