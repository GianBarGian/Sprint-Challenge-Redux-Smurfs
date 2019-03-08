import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfs } from '../actions/index'

import Smurf from './Smurf';


export class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurf-list">
                {
                    this.props.smurfs.map(smurf => (
                        <Smurf 
                            key={smurf.id}
                            id={smurf.id}
                            smurf={smurf}
                        />
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      smurfs: state.smurfs,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getSmurfs
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);