import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import * as thingActions from '../../actions/thingsAction';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({thing}) {
    this.props.addThing({thing});
  }

  render() {
    const {handleSubmit, fields: {thing}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="thing">Question:</label>
          <textarea className="form-control" id="thing" rows="3" {...thing}></textarea>
        </fieldset>
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    things: state.things
  };
}

AdminPage.propTypes = {
  things: PropTypes.array.isRequired,
  addThing: PropTypes.func.isRequired,
  fields: PropTypes.obj,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'question',
  fields: ['thing']
}, mapStateToProps, thingActions)(AdminPage);
