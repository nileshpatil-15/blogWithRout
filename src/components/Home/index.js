/* eslint-disable prettier/prettier */
import './index.css'

import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div data-testid='loader' className="home-container">
<UserInfo/>
      <BlogList/>
  </div>
  
)

export default Home
