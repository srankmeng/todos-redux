
import React, {Component} from 'react';

class Filter extends Component {

  render() {
    return (
        <div className="filter">
          view as : 
          <select onChange={(e) => this.props.changeFilter(e)} value={this.props.value}>
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="inComplete">Incomplete</option>
          </select>
        </div>
    );
  }
}

export default Filter
