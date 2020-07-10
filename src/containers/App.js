import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actions";
import { storeResult } from "../store/actions/actions";

const App = (props) => {
  const { onUsersFetch } = props;

  useEffect(() => {
    onUsersFetch();
  }, [onUsersFetch]);

  const monsters = props.monsterList;
  const searchfield = props.searchField;
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
      <React.Fragment>
        <Header />
        <div className="tc">
          <h1 className="f1">Monster Friends</h1>
          <SearchBox searchChange={props.onSearchFieldChange} />
          <Scroll>
            <CardList monsters={filteredMonsters} />
          </Scroll>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    searchField: state.srch.searchField,
    monsterList: state.usrs.monsters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) =>
      dispatch({
        type: actionTypes.INPUT_SEARCHFIELD_CHANGE,
        nextLetter: event.target.value,
      }),
    onUsersFetch: () => dispatch(storeResult()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
