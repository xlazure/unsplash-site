import styled from "styled-components";
import SearchInput from "../../searchInput";
import mainBG from "../../../images/mainBg.jpg";
export default function Home() {
  return (
    <Container>
      <SearchContainer>
        {/* <h1>Unsplash</h1> */}
        <SearchInput />
      </SearchContainer>
    </Container>
  );
}
const SearchContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`;
const Container = styled.main`
  color: #fff;
  background-image: url(${mainBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
