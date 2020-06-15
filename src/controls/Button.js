import React, {Component} from 'react'

class Button extends Component {
    static defaultProps = {
        
    }

    render() {
        return (
            <div className="form__submit">
                <input 
                    type="button" 
                    className="button" 
                    value={this.props.value}
                    onClick={this.props.handleClick}
                />
            </div>
        )
    }
}

export default Button