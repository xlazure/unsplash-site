import AutoSuggest from "react-autosuggest";
import keywords from "../../data/keywords_min.json";
import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const lowerCasedCompanies = keywords.keywords.map((word, index) => {
  return {
    id: index,
    name: word.keyword.toLowerCase(),
  };
});

const SearchEngine2 = (props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies
      .filter((company) => company.name.includes(value.trim().toLowerCase()))
      .slice(0, 10);
  }
  return (
    <Search>
      <button
        onClick={() => {
          if (value !== "") {
            props.inpValue(value);
          }
        }}
      >
        <BiSearch size="1.5em" color="#828080" />
      </button>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          props.inpValue(suggestionValue)
        }
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
        highlightFirstSuggestion={true}
        inputProps={{
          placeholder: "Search free high-resolution photos",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" && value !== "") {
              props.inpValue(value);
            } else {
              // alert("empty input");
            }
          },
        }}
      />
    </Search>
  );
};
export default SearchEngine2;

const Search = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  button {
    width: 4em;
    border: 1px solid transparent;
    border-right: none;
    outline: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    :hover {
      cursor: pointer;
    }
  }
  .react-autosuggest__container {
    width: 100%;
    /* width: calc(100% + 4em); */
  }
`;
