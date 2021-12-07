import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
//import { searchPhotos } from "../api/searchPhotos";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchInput() {
  //const [term, setTerm] = useState();
  const [bg, setBg] = useState();
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
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
        // onChange={(e) => {
        //   setTerm(e.target.value);
        // }}
        onKeyDown={(e) => {
          e.key === "Enter" && navigate("/results");
        }}
      />
    </div>
  );
}
