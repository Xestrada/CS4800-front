import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Table } from 'reactstrap';
import Header from '../common/header';

export class DefaultPage extends Component {
  static propTypes = {
    meetings: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props){
    super(props)
    this.state = {

    };

  }

  componentDidMount(){
    this.props.actions.getMeetings();
  }

  render() {

    const items = this.props.meetings.data;
    const loadingMessage = (<h3>Loading ...</h3>)
    const errorMessage = (<h3>Error</h3>)

    const itemTable = items != undefined ? items.map(item => {
      return(
        <tr key = {item.id}>
          <th scope="row">
            {item.id}
          </th>
          <td>
            {item.meeting_time}
          </td>
          <td>
            {item.date}
          </td>
          <td>
            {item != undefined && Array.isArray(item.attended) &&
              item.attended.map(attendee => {
                return (
                  <ul key={attendee}> - {attendee} </ul>
                )
              })
            }
          </td>
          <td>
            {item != undefined && Array.isArray(item.topics) && 
              item.topics.map(topic => {
                return (
                  <ul key={topic}> * {topic} </ul>
                )
              })
            }
          </td>
          <td>
            {item != undefined && typeof item.todo == 'object' && 
              Object.keys(item.todo).map(key => {
                return(
                  <div key={key}>
                    <ul>{key}:</ul>
                    <div>
                      {item.todo[key].map(task => {
                        return (
                          <ul> - {task} </ul>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </td>
          <td>
            {item != undefined && typeof item.completed == 'object' && 
              Object.keys(item.completed).map(key => {
                return(
                  <div key={key}>
                    <ul>{key}:</ul>
                    <div>
                      {item.completed[key].map(task => {
                        return (
                          <ul> - {task} </ul>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </td>
        </tr>
      )
    }) : null;

    return (
      <div className = "meetings-default-page">
        <Header />
        <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Meeting Time</th>
            <th>Date</th>
            <th>Attended</th>
            <th>Topics Discussed</th>
            <th>To-Do</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {itemTable}
        </ tbody>
        </ Table>
        {this.props.meetings.getMeetingsPending ? loadingMessage : null}
        {this.props.meetings.getMeetingsError ? errorMessage : null}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    meetings: state.meetings,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
