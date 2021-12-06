import styled from "styled-components";
import SearchInput from "../../searchInput";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigation = useNavigate();

  return (
    <Container>
      <InputContainer>
        <Button onClick={() => navigation("/")}>Return</Button>
        <SearchInput />
      </InputContainer>
      <h1>Unsplash</h1>
    </Container>
  );
}
const Container = styled.main`
  padding-top: 2.5em;
`;
const Button = styled.button`
  position: absolute;
  top: 1em;
  left: 1em;
`;

const InputContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
`;
