import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  constructor(){
    super()
    this.statem = ({
      search:''
    })
  }
  getSearch(e){
    this.setState({search:e.target.search})
    console(this.state.search)
  }
  render() {
    return (
    <div>
      <div className='menu'>
    <ul>
    <li><Link to="/">All</Link></li>
    <li><Link to="/Science">Science</Link></li>
    <li><Link to="/Technology">Technology</Link></li>
    <li><Link to="/Sports">Sports</Link></li>
    <li><Link to="/Jokes">Jokes</Link></li>
    <li><Link to="/Cricket">Cricket</Link></li>
    <li><Link>language</Link>
    <ul>
      <li onClick={()=> this.props.chnangeLang("hi")}>Hindi</li>
      <li onClick={()=> this.props.chnangeLang("en")}>English</li>
  </ul>
    </li>
  </ul>
  </div>
 
  <ul>
    <li onClick={()=> this.props.chnangePageSize(9)}>9</li>
    <li onClick={()=> this.props.chnangePageSize(12)}>12</li>
    <li onClick={()=> this.props.chnangePageSize(16)}>16</li>
  </ul>
  <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                            <input className="form-control me-2" type="search" name='search' onChange={(e)=>this.getSearch(e)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
  </div>
  )
  }
}