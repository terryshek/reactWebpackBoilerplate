import React, { Component } from 'react';
import {render} from 'react-dom';
import Awesome from './component/AwesomeComponent';

class App extends Component {
    render () {
        return (
            <div>
                <p> Hello React, terry! !</p>
                <Awesome />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
