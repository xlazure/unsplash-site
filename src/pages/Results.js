import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { TermContext } from "../context/termContext";
import { useFetchData } from "../hooks/useFechData";
import Gallery from "../components/gallery";
import { BiErrorCircle } from "react-icons/bi";
import SearchBar from "../components/search/search";

export default function Results() {
  const navigation = useNavigate();
  const { term, setTerm, loading, isLoading } = useContext(TermContext);
  const [gallery, setGallery] = useFetchData(term);

  //tabs
  // const [uniqueArr, setUniqueArr] = useState([]);
  // const [tags, setTags] = useState([]);

  useEffect(() => {
    const init = async () => {
      if (term !== undefined && loading) {
        await setGallery();
        console.log("fetch...");
        isLoading(false);

        // if (uniqueArr !== []) {   //tabs
        //   console.log("tabs");
        //   gallery?.results?.map((el) =>
        //     el.tags.map((tag) => setTags((obj) => [...obj, tag.title]))
        //   );
        //     setUniqueArr([...new Set(tags)]);
        // }
      }
    };

    init();
  }, [term, isLoading, loading, setGallery]);

  return (
    <Container>
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

      {/* <RelatedTags>    //tabs
        {uniqueArr?.map((el, index) => {
          return <Tab key={index}>{el}</Tab>;
        })}
      </RelatedTags> */}

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
// const Tab = styled.div`   //tabs
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #777;
//   margin-right: 1em;
//   height: 3em;
//   min-width: 120px;
// `;
// const RelatedTags = styled.div`  //tabs
//   display: flex;
//   overflow-x: hidden;
// }
// `;

const Container = styled.main`
  margin: 0 auto;
  /* padding-top: 2.5em; */
  padding: 2.5em 5% 0 5%;
  max-width: 1280px;
`;

const Button = styled.button`
  transition: 0.1s ease;
  border-radius: 0 !important;
  border: none;
  padding: 0.5em 0.7em;
  position: absolute;
  top: 1em;
  left: 1em;
  box-shadow: 0px 0px 3px #77777792;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px #777777;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  button {
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }
  .react-autosuggest__input {
    background: #f1f1f1;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
  }
  .react-autosuggest__input,
  button {
    box-shadow: 1px 1px 3px #777;
  }
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
