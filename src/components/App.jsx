import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CountryList from "./CountryList";
import CountryShow from "./CountryShow";
import SearchBar from "./SearchBar";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h1 className="text-center">Countries app</h1>
          <SearchBar />
        </div>
        <Switch>
          <Route exact path="/" component={CountryList} />
          <Route path="/country/:countryName" component={CountryShow} />
          <Route component={() => <h1>404 error</h1>} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
