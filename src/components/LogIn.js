import React, {Component} from 'react'
import Input from '../controls/Input'
import Button from '../controls/Button'
import Link from '../controls/Link'

 class LogIn extends Component {
        constructor() {
            super()
            this.state = {
                userEmailInput: {
                    isValid: false,
                    userEmail: "user-error",
                    inputStyle: "input input_weight"
                },
                userPasswordInput: {
                    isValid: false,
                    userPassword: "111-error",
                    inputStyle: "input input_weight"
                }               
            }
        }
    
        handleChange = (event) => {
            const {name, value} = event.target
            this.setState({
                [name]: value
            }) 
        }

        submit = () => {
            //validation
            //success event
            //fail event
            if(this.state.userEmailInput.userEmail==="user" && this.state.userPasswordInput.userPassword==="111") {
                this.props.changeAuthorized(true)
            } else {
                this.props.changeAuthorized(false)
                if(this.state.userEmailInput.userEmail!=="user") {
                    console.log ("incorrect mail")
                    this.setState({
                        userEmailInput: { inputStyle: "input input_weight error"}
                    })
                }
                if(this.state.userEmailInput.userEmail==="user" && this.state.userPasswordInput.userPassword!=="111") {
                    console.log ("incorrect password")
                    this.setState({
                        userPasswordInput: { inputStyle: "input input_weight error"}
                    })
                } 
            }
        }    
        
        updateData = (value) => {
            this.setState({ userLogIn: value })
        }

    render() {  
        return (
            <div className="form form_mini">
                <form>
                    <Input label="Email" name="userEmail" value={this.state.userEmailInput.userEmail} onChange={this.handleChange} className={this.state.userEmailInput.inputStyle}/>
                    <Input label="Пароль" name="userPassword" value={this.state.userPasswordInput.userPassword} onChange={this.handleChange} type="password" className={this.state.userPasswordInput.inputStyle}/>
                    <Link />
                    <Button handleClick={this.submit} />
                </form>
            </div>
        )
        }
}

export default LogIn