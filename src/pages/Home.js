import styled from "styled-components";
import mainBG from "../images/mainBg.jpg";
import SearchBar from "../components/search/search";

export default function Home() {
  return (
    <Container>
      <SearchContainer>
        <div style={{ paddingBottom: "1em", color: "#fff", fontWeight: "700" }}>
          <h1>Unsplash</h1>
          <p>
            The internet's source of{" "}
            <a
              href="https://unsplash.com/developers"
              target="_blank"
              rel="noreferrer"
            >
              freely-usable images.
            </a>
          </p>
          <p>Powered by creators everywhere</p>
        </div>
        <SearchBar />
      </SearchContainer>
    </Container>
  );
}
const SearchContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  h1 {
    padding-bottom: 0.3em;
  }
  a {
    color: #fff;
  }
  .react-autosuggest__suggestions-container--open {
    color: #000;
  }
`;
const Container = styled.main`
  background-image: url(${mainBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
