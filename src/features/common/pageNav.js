import React from 'react';
import PropTypes from 'prop-types';
import '../portfolio/portfolioConstants';
import './pageNav.scss';
import { FESTIVE_FALL,
  SEQUIN_DJ,
  REMNANT,
  BRATZ_EW,
  HADES,
  SLOW,
  SCIENCE,
  LEAF,
  AUTUMN
} from '../portfolio/portfolioConstants';

export default class PageNav extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };

    this.selectClick = this.selectClick.bind(this);
  }

  selectClick(value){
    this.setState({
      selected: value
    }, () => {
      this.props.onClick(value);
    });
  }

  render() {
    return (
      <div className = {`pageNav ${this.props.className}`}>
        <h4>Portfolio</h4>
        <h6 onClick = {() => this.selectClick(0)} className = {this.state.selected == 0 ? 'selected' : ''} >
          {FESTIVE_FALL}
        </h6>
        <h6 onClick = {() => this.selectClick(1)} className = {this.state.selected == 1 ? 'selected' : ''} >
          {SEQUIN_DJ}
        </h6>
        <h6 onClick = {() => this.selectClick(2)} className = {this.state.selected == 2 ? 'selected' : ''} >
          {BRATZ_EW}
        </h6>
        <h6 onClick = {() => this.selectClick(3)} className = {this.state.selected == 3 ? 'selected' : ''} >
          {REMNANT}
        </h6>
        <h6 onClick = {() => this.selectClick(4)} className = {this.state.selected == 4 ? 'selected' : ''} >
          {HADES}
        </h6>
        <h6 onClick = {() => this.selectClick(5)} className = {this.state.selected == 5 ? 'selected' : ''} >
          {SLOW}
        </h6>
        <h6 onClick = {() => this.selectClick(6)} className = {this.state.selected == 6 ? 'selected' : ''} > 
          {SCIENCE}
        </h6>
        <h6 onClick = {() => this.selectClick(7)} className = {this.state.selected == 7 ? 'selected' : ''} >
          {LEAF}
        </h6>
        <h6 onClick = {() => this.selectClick(8)} className = {this.state.selected == 8 ? 'selected' : ''} >
          {AUTUMN}
        </h6>

      </div>
    );
  }
}
