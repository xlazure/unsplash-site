import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { TermContext } from "../context/termContext";
import { useFetchData } from "../hooks/useFechData";
import Gallery from "../components/gallery";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";
import SearchBar from "../components/search/search";

export default function Results() {
  const navigation = useNavigate();
  const { term, setTerm, loading, isLoading } = useContext(TermContext);
  const [gallery, setGallery] = useFetchData(term);

  useEffect(() => {
    if (term !== undefined || "") {
      setGallery();
    }
    if (gallery?.total !== 0) {
      isLoading(false);
    }
    console.log(gallery);
  }, [term]);

  return (
    <Container>
      {loading ? (
        <Loading>
          <AiOutlineLoading
            className="loadingAnimation"
            size="6em"
            color="#fff"
          />
        </Loading>
      ) : (
        ""
      )}

      <InputContainer>
        <Button
          onClick={async () => {
            await setTerm(undefined);
            navigation("/");
          }}
        >
          Return
        </Button>
        <SearchBar />
      </InputContainer>
      <h1>{term}</h1>
      {gallery?.total !== 0 ? (
        <Gallery gallery={gallery?.results} />
      ) : (
        <Error>
          <h2>Empty</h2>
          <BiErrorCircle size="1.5em" />
        </Error>
      )}
    </Container>
  );
}
const Container = styled.main`
  margin: 0 auto;
  padding-top: 2.5em;
  max-width: 1280px;
`;

const Button = styled.button`
  position: absolute;
  top: 1em;
  left: 1em;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;
const Error = styled.div`
  font-size: 3em;
  color: #595959d3;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.5em;
  align-items: center;
`;
const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000b7;
  z-index: 101;
`;
