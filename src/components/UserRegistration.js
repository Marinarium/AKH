import React, { Component } from "react";
import Input from "../controls/Input";
import Button from "../controls/Button";
import Title from "../controls/Title";
import {ValidationInput, ValidateState, Rule, TypeOfRule} from "../helpers/ValidationHelper";

class UserRegistration extends Component {
  inputStyle="input input_weight";
  constructor() {
    super();
    this.state = {
      userEmail: new ValidationInput([new Rule(TypeOfRule.REQUIRED, "Введите пожалуйста email адрес"),
                                      new Rule(TypeOfRule.REGEX, "Введите пожалуйста email", /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),                                                                   
      ]),
      userName: new ValidationInput([new Rule(TypeOfRule.REQUIRED, "Введите пожалуйста имя")]),
      userSurname: new ValidationInput([new Rule(TypeOfRule.REQUIRED, "Введите пожалуйста фамилию")]),
      userPassword: new ValidationInput([new Rule(TypeOfRule.REQUIRED, "Введите пожалуйста пароль")])
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    let input = this.state[name];
    this.setState({
      [name]: new ValidationInput(input.rules, input.isValid, value, input.validationMessage)
    });
  };

  submit = () => {
    //validation
    let validationResult = ValidateState(this.state);
    this.setState({...validationResult.state})
    if(validationResult.isValid) {
      //return;
      this.props.changeAuthorized(true);
    } else {
      this.props.changeAuthorized(false);
    }
  };

  updateData = value => {
    this.setState({ userLogIn: value });
  };

  render() {
    const {userEmail, userPassword, userName, userSurname} = this.state;
    return (
      <div className='content'>
                    <div className='container'>
                        <div className='signin'>
      <Title titleText='Регистрация пользователя' titleStyles='title' />
      <div className="form">
        <form>
          <Input
            label="Email"
            name="userEmail"
            value={userEmail.value}
            onChange={this.handleChange}
            className={userEmail.isValid?this.inputStyle:`${this.inputStyle} error`}
            isValid={userEmail.isValid}
            validationMessageLength={userEmail.validationMessage.length}
            validationMessageText={userEmail.validationMessage[0]}
          />
          <Input
            label="Имя"
            name="userName"
            value={userName.value}
            onChange={this.handleChange}
            className={userName.isValid?this.inputStyle:`${this.inputStyle} error`}
            isValid={userName.isValid}
            validationMessageLength={userName.validationMessage.length}
            validationMessageText={userName.validationMessage[0]}
          />
          <Input
            label="Фамилия"
            name="userSurname"
            value={userSurname.value}
            onChange={this.handleChange}
            className={userSurname.isValid?this.inputStyle:`${this.inputStyle} error`}
            isValid={userSurname.isValid}
            validationMessageLength={userSurname.validationMessage.length}
            validationMessageText={userSurname.validationMessage[0]}
          />
          <Input
            label="Пароль"
            name="userPassword"
            value={userPassword.value}
            onChange={this.handleChange}
            type="password"
            className={userPassword.isValid?this.inputStyle:`${this.inputStyle} error`}
            isValid={userPassword.isValid}
            validationMessageLength={userPassword.validationMessage.length}
            validationMessageText={userPassword.validationMessage[0]}
          />
          <Input
            label="Пароль"
            name="userPassword"
            value={userPassword.value}
            onChange={this.handleChange}
            type="password"
            className={userPassword.isValid?this.inputStyle:`${this.inputStyle} error`}
            isValid={userPassword.isValid}
            validationMessageLength={userPassword.validationMessage.length}
            validationMessageText={userPassword.validationMessage[0]}
          />
          <Button handleClick={this.submit} value="Регистрация"/>
        </form>
      </div>
      </div></div></div>
    );
  }
}

export default UserRegistration;