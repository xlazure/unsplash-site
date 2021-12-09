import Autosuggest from "react-autosuggest";
import keywords from "../../data/keywords_min.json";
import React, { Fragment } from "react";
import styled from "styled-components";

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return keywords.keywords
    .filter((language) => regex.test(language.keyword))
    .slice(0, 8);
}

function shouldRenderSuggestions(value, reason) {
  return value.trim().length > 2;
}

function getSuggestionValue(suggestion) {
  return suggestion.keyword;
}

function renderSuggestion(suggestion) {
  return <p>{suggestion.keyword}</p>;
}

class SearchEngine extends React.Component {
  constructor(props) {
    super(props);

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);

    this.state = {
      value: "",
      suggestions: [],
      initialRun: 1,
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      this.search(event.target.value);
    }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    if (this.state.value.length > this.state.initialRun) {
      this.setState({
        suggestions: getSuggestions(value),
      });
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected(event, { suggestionValue }) {
    this.search(suggestionValue);
  }
  search = (value) => {
    this.props.inpValue(value);
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search free high-resolution photos",
      value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
    };
    return (
      <Search>
        <button>s</button>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          multiSection={true}
          onSuggestionSelected={this.onSuggestionSelected}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
        />
      </Search>
    );
  }
}

export default SearchEngine;

const Search = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  button {
    width: 4em;
    border: 1px solid #aaa;
    border-right: none;
    outline: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .react-autosuggest__container {
    width: 100%;
    /* width: calc(100% + 4em); */
  }
`;
