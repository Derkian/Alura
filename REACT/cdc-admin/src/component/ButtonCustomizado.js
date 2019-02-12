import React, { Component } from 'react'

export class ButtonCustomizado extends Component {
  render() {
    return (
        <div className="pure-control-group">                                  
            <label>{this.props.label}</label> 
            <button 
                type={this.props.type} 
                className="pure-button pure-button-primary">{ this.props.name }
            </button>                                    
        </div>
    )
  }
}

export default ButtonCustomizado
