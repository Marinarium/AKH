import React, { Component } from "react";
import Input from "../controls/Input";
import Button from "../controls/Button";
import Link from "../controls/Link";
import {ValidationInput, ValidateState, Rule, TypeOfRule} from "../helpers/ValidationHelper";

class RestorePassword extends Component {
  inputStyle="input input_weight";
  constructor() {
    super();
    this.state = {
      userEmail: new ValidationInput([new Rule(TypeOfRule.REQUIRED, "Введите пожалуйста email адрес"),
                                      new Rule(TypeOfRule.REGEX, "Введите пожалуйста email", /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),                                                                   
      ]),
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
    const {userPassword} = this.state;
    return (
      <div className="form form_mini">
        <form>
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
          <Button handleClick={this.submit} value="Восстановить"/>
          <Link className="back" text="Вернуться"/>
        </form>
      </div>
    );
  }
}

export default RestorePassword;
