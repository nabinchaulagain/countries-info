import React, { createContext } from "react";
import axios from "axios";
import history from "./history";
export const Context = createContext();
class ContextProvider extends React.Component {
  state = {
    countries: [],
    searchQuery: "",
    error: null
  };
  onSubmit = async event => {
    event.preventDefault();
    if (this.state.searchQuery !== "") {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${this.state.searchQuery}`)
        .then(response => {
          this.setState({ countries: response.data, error: null }, () => {
            history.push("/");
          });
        })
        .catch(() => {
          this.setState(
            {
              error: `No results found for ${this.state.searchQuery}`,
              countries: []
            },
            () => {
              history.push("/");
            }
          );
        });
    }
  };
  onQueryChange = newQuery => {
    this.setState({ searchQuery: newQuery });
  };
  componentDidMount = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSubmit: this.onSubmit,
          onQueryChange: this.onQueryChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default ContextProvider;
