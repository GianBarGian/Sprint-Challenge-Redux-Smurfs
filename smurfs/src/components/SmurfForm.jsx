import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

export class SmurfForm extends React.Component {
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef();

    onAdd = event => {
        const nameInput = this.nameRef.current.value;
        const ageInput = this.ageRef.current.value;
        const heightInput = this.heightRef.current.value;

        const newSmurf = {
            name: nameInput,
            age: ageInput,
            height: heightInput,
        }
        event.preventDefault();
        this.props.addSmurf(newSmurf);

        this.nameRef.current.value = '';
        this.ageRef.current.value = '';
        this.heightRef.current.value = '';
    }

    render() {
        return (
            <form className="smurf-form">
                <input ref={this.nameRef} type="text" placeholder="name" />
                <input ref={this.ageRef} type="text" placeholder="age" />
                <input ref={this.heightRef} type="text" placeholder="height" />
                <button onClick={e => this.onAdd(e)}>Add Smurf</button>
            </form>
        )
    }
}
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      addSmurf,
    }, dispatch);
  }
  
  export default connect(st => st, mapDispatchToProps)(SmurfForm);