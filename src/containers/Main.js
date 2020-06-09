import React, {Component} from 'react'
import Title from '../controls/Title'
import LogIn from '../components/LogIn'
import SuccessfulLogIn from '../components/SuccessfulLogIn'

class Main extends Component{
    constructor() {
        super()
        this.state = {
            isAuthorized: false,
            titleText: "",
            titleStyles: ""
        }
    }

    changeAuthorized = (isAuthorized) => {
        this.setState({isAuthorized})
    }

    render() {
        var {changeAuthorized} = this;
        return (
            <div className="content">
                <div className="container">
                    <div className="signin">
                    {this.state.isAuthorized ? 
                    <React.Fragment>
                        <Title titleText='Успешно!' titleStyles='title title_margin' />
                        <SuccessfulLogIn />
                    </React.Fragment>
                    :  
                    <React.Fragment>
                        <Title titleText='Войти на сайт' titleStyles='title' />
                        <LogIn changeAuthorized={changeAuthorized}/>
                    </React.Fragment>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Main


