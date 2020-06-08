import React, {Component} from 'react'

class Input extends Component {
    static defaultProps = {
        type: 'text'
    }
    

    render() {
        return (
            <div className="form__input">
                    <div className="label-input">
                        {this.props.label}
                    </div>
                    <input type={this.props.type} className={this.props.className}  name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
                </div>
        )
    }
}

export default Input