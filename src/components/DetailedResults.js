import React from 'react';
import constants from 'constants'

export default class DetailedResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name, 
            location: props.location
        };
    }

    render() {
        return (
            <div className="Pictures">
                Searching for {this.state.name} in {this.state.location}: <br/>
                {getPictures(this.state)}
            </div>
        );
    }
}

function getPictures(state) {
    return 'this is a picture';
}