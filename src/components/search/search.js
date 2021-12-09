import { useContext } from "react";
import { TermContext } from "../../context/termContext";
import { useNavigate } from "react-router-dom";
import SearchEngine from "./searchEngine";
// import SearchEngine2 from "./searchEngine2";
import styled from "styled-components";
export default function SearchBar(props) {
  const { setTerm, isLoading } = useContext(TermContext);

  const navigation = useNavigate();

  return (
    <Container>
      {/* <SearchEngine2 /> */}
      <SearchEngine
        inpValue={(value) => {
          navigation("/results");
          isLoading(true);
          setTerm(value);
        }}
      />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1.2em 0;
  /* display: flex; */
`;
