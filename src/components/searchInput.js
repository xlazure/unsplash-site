import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
<<<<<<< HEAD
import { useState, useContext, useEffect } from "react";
=======
import { useEffect, useState } from "react";
//import { searchPhotos } from "../api/searchPhotos";
>>>>>>> 7ed45b66ba829824ec3a665d461ef9185065e63b
import { useNavigate, useLocation } from "react-router-dom";
import { TermContext } from "../context/termContext";
// import { TiDeleteOutline } from "react-icons/ti";
import { photoCollections } from "../api/getPhotoCollections";
import { useFetchKeywords } from "../hooks/useFetchKeywords";

import keywords from "../data/keywords_min.json";

export default function SearchInput() {
<<<<<<< HEAD
  const [inpTerm, setInpTerm] = useState("");
  const [test, setTest] = useFetchKeywords(inpTerm);
=======
  //const [term, setTerm] = useState();
  const [bg, setBg] = useState();
>>>>>>> 7ed45b66ba829824ec3a665d461ef9185065e63b
  const navigate = useNavigate();
  const location = useLocation();
  const { term, setTerm, isLoading } = useContext(TermContext);

<<<<<<< HEAD
  async function Search() {
    await setTerm(inpTerm);
    navigate("/results");
    // isLoading(true);
  }
=======
  useEffect(() => {
    if (location.pathname === "/") {
      setBg("white");
    } else if (location.pathname === "/results") {
      setBg("#c9c9c9");
    }
  }, [location.pathname]);

  const Button = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    /* background: transparent; */
    width: 2.5em;
    height: 100%;
    border: none;
    padding: 0;
    margin: 0;
    :hover {
      cursor: pointer;
    }
  `;
  const Input = styled.input`
    background: ${bg};
    width: 100%;
    padding: 0.8em 0.5em 0.8em 2.8em;
    outline: none;
    border: none;
    :hover {
      outline: none;
    }
  `;
>>>>>>> 7ed45b66ba829824ec3a665d461ef9185065e63b

  useEffect(() => {}, [inpTerm]);
  return (
    <>
    <h1>Unsplash</h1>
    <div style={{ position: "relative", width: "100%" }}>
      <Button
        onClick={() => {
          navigate("/results");
        }}
      >
        <AiOutlineSearch color="#b3b3b3" size="1.4em" />
      </Button>
      <Input
        type="text"
        placeholder="Search free high-resolution photos"
        style={location.pathname === "/results" ? Input_resultPage : null}
        defaultValue={term}
        onChange={(e) => {
          setInpTerm(e.target.value);
          if (inpTerm.length > 2) {
            // console.log("fetch");
          }
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && Search();
        }}
        renderInput={() => {}}
      />
      <AutocompleteHelper>
        {keywords.keywords
          ?.filter((filterword) => filterword.keyword?.includes(inpTerm))
          .slice(0, 10)
          .map((word, index) => {
            return <p key={index}>{word.keyword}</p>;
          })}
      </AutocompleteHelper>
    </div>
    </>
  );
}
const AutocompleteHelper = styled.div`
  color: black;

  margin-top: 1em;
  width: 100%;
  background: #f4f4f4;
  height: 5em;
  overflow-y: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 0em;
  left: 0;
  background: red;
  width: 2.5em;
  height: 28%;
  border: none;
  padding: 0;
  margin: 0;
  :hover {
    cursor: pointer;
  }
  svg {
    display: none;
  }
`;
const Input = styled.input`
  background: #f4f4f4;
  width: 100%;
  padding: 0.8em 0.5em 0.8em 2.8em;
  outline: none;
  border: none;
  :hover {
    outline: none;
  }
`;
const Input_resultPage = {
  borderRadius: "15px",
};
