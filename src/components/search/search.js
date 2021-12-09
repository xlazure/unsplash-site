import { useContext, useEffect, useState } from "react";
import { TermContext } from "../../context/termContext";
import { useNavigate } from "react-router-dom";
import SearchEngine from "./searchEngine";
import { useFetchData } from "../../hooks/useFechData";
import styled from "styled-components";
export default function SearchBar(props) {
  let uniqueTags = [];
  const { term, setTerm } = useContext(TermContext);
  const [relatedTags, setRealatedTags] = useState([]);
  const [data, setData] = useFetchData(term);
  const [test, setTest] = useState();
  const navigation = useNavigate();

  useEffect(() => {
    if (term !== undefined || "") {
      setData();

      data?.results?.map((tag) =>
        tag.tags.forEach(function (value) {
          if (value.type === "search")
            setRealatedTags((oldArray) => [...oldArray, value.title]);
        })
      );
    }
    setTest([...new Set(relatedTags)]);
  }, [term]);

  return (
    <Container>
      <SearchEngine
        inpValue={(value) => {
          setTerm(value);
          navigation("/results");
        }}
      />
      <Realated>{test?.map((tag, index) => console.log(tag))}</Realated>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  /* display: flex; */
`;
const RealatedTag = styled.div`
  background: skyblue;
  margin-right: 1em;
  min-width: 120px;
`;

const Realated = styled.div`
  margin: 1em auto;
  width: 95%;
  overflow-x: auto;

  display: flex;
  flex-direction: row;
`;
//  <MainSearchInput
//    inpValue={(value) => {
//      console.log(value);
//      setTerm(value);
//      navigation("/results");
//    }}
//  />;
