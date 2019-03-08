import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  .spinner {
    display: ${props => (props.spinner ? "block" : "none")};
  }
  .children {
    display: ${props => (props.spinner ? "none" : "block")};
  }
`;

export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinner={this.props.spinner}>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}


const mapStateToProps = function (state) {
  return { spinner: state.spinner };
};

export default connect(mapStateToProps)(Spinner);