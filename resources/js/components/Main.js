import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
  render() {
    return (
      <div style={{marginTop:50+'px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Example Component</div>
                <div className="card-body">
                  Get to building!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<Main/>, document.getElementById('root'));
}