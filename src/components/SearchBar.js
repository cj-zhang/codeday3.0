import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.name, 
        location: props.location
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("hello");
  }

  render() {
      return (
          <div className="Pictures">
            <form onSubmit={this.handleSubmit}>
              Enter name: <input type="text" name="search-bar" placeholder="Search..." 
                            onInput={event => this.setState({ location: event.target.value })}/>
              <input type="submit" value="Submit" />
            </form>
          </div>
      );
  }
}
