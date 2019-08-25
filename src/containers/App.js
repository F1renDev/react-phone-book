import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  

  render() {
    const monsters = this.state.monsters;
    const searchfield = this.props.searchField;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (monsters.length === 0) {
      return (
        <div className="tc">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="f1">MonsterFriends</h1>
          <SearchBox searchChange={this.props.onSearchFieldChange} />
          <Scroll>
            <CardList monsters={filteredMonsters} />
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) =>
      dispatch({ type: actionTypes.INPUT_SEARCHFIELD_CHANGE, nextLetter: event.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
