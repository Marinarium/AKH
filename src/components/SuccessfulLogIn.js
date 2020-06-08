import React, {Component} from 'react'

class SuccessfulLogIn extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="success">
                    Вы авторизировались.
                </div>
                <div className="back">
                    <a href="../">Вернуться</a>
                </div>
            </React.Fragment>
        ) 
    }
}

export default SuccessfulLogIn