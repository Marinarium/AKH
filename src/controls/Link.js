import React, {Component} from 'react'

class Link extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <a href="./">{this.props.text}</a>
            </div>
        )
    }
}

export default Link