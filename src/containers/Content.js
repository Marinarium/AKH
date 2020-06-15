import React, {Component} from 'react'
import Main from './Main'
import UserRegistration from '../components/UserRegistration'
import {Route} from 'react-router-dom'

class Content extends Component{
    render(){
        return(
            <React.Fragment>   
                <Route exact={true} path='/' component={Main}/>
                <Route exact={true} path='/registartion' component={UserRegistration}/>
            </React.Fragment> 
        )
    }
}

export default Content