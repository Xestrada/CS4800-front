import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Header from '../common/header';
import './about.scss';

class About extends Component {


  render() {
    return (
      <div className="about-root">
        <Header/>
        <h2>Team Members:</h2>
        <Table striped>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Joshua</td>
            <td>Chen</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jorge</td>
            <td>Estrada</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Wei-Hao</td>
            <td>Lan</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Issac</td>
            <td>Kim</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Grant</td>
            <td>Okamoto</td>
          </tr>
        </tbody>
      </Table>
      <h2>GitHub Links:</h2>
      <Table striped>
        <tbody>
          <tr>
            <th scope="row">Frontend:</th>
            <td>
              <a href="https://github.com/Xestrada/CS4800-front">https://github.com/Xestrada/CS4800-front</a>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default About;
