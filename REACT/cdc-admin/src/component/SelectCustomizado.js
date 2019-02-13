import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SelectCustomizado extends Component {

  constructor(){
      super();
      this.state = { msgErro : '' };
  }

  render() {
    return (
        <div className="pure-control-group">
            <label 
                htmlFor={this.props.id}>{this.props.label}</label> 
            
            <select id={this.props.id} onChange={this.props.onChange}>
                <option id="">Selecione</option> 
                {
                    this.props.dados.map( element => {
                        return (
                            <option 
                                value={element.id} 
                                key={element.id}>

                                {element.value}
                            </option>
                        );
                    })
                }
            </select>

            <span className="error">{this.state.msgErro}</span>
        </div>
    )
  }
}

SelectCustomizado.propTypes = {
    id : PropTypes.number,
    label : PropTypes.string    
}

export default SelectCustomizado
