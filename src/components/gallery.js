import styled from "styled-components";
import { useContext, useState } from "react";
import { TermContext } from "../context/termContext";

export default function Gallery(props) {
  const { setTerm } = useContext(TermContext);
  const [showFullSize, setShowFullSize] = useState(false);
  const [url, setUrl] = useState();

  const FullSize = (props) => {
    return (
      <Overlay>
        <FullImg
          onClick={() => {
            setShowFullSize(false);
          }}
        >
          <p>{Image}</p>
          <img
            src={props.link}
            alt="full"
            onChange={(e) => {
              console.log("3");
              console.log(e.target.style.width);
            }}
          />
        </FullImg>
      </Overlay>
    );
  };

  return (
    <>
      {showFullSize ? <FullSize link={url} /> : ""}
      <GalleryContainer>
        {props.gallery?.map((el) => {
          return (
            <ContainerImg key={el.id}>
              <Img
                src={el?.urls.regular}
                alt={el?.alt_description}
                onClick={(e) => {
                  console.log(e.nativeEvent);
                  setShowFullSize(true);
                  setUrl(el?.urls?.full);
                }}
              />
              <AuthorBio>
                <AuthorImg
                  src={el.user.profile_image.small}
                  alt={el.user.username}
                />
                <p>{el.user.username}</p>
              </AuthorBio>
              <div>
                {el.tags?.map((tags, index) => {
                  return (
                    <Tag key={index} onClick={() => setTerm(tags.title)}>
                      {tags.title}
                    </Tag>
                  );
                })}
              </div>
            </ContainerImg>
          );
        })}
      </GalleryContainer>
    </>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 102;
  width: 100%;
  height: 100%;
  background: #000000ad;
`;
const FullImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 103;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;

  /* padding: 3em 4em 3em 4em; */
  background: #ffffff;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  :hover {
    cursor: zoom-out;
  }
`;

const GalleryContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2.5em;
`;

const ContainerImg = styled.div`
  width: 33%;

  :nth-of-type(3n + 1) {
    padding-right: 0.4em;
  }
  :nth-of-type(3n + 2) {
    padding: 0 0.4em;
  }
  :nth-of-type(3n + 3) {
    padding-left: 0.4em;
  }
  position: relative;
  margin-bottom: 1em;
  /* :nth-of-type(even) {
    padding-left: 0.8em;
  }
  :nth-of-type(odd) {
    padding-right: 0.8em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  } */
`;
const AuthorImg = styled.img`
  border-radius: 50%;
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 0.5em;
  transition: 0.4s ease;

  :hover {
    cursor: zoom-in;
  }
`;
const Tag = styled.span`
  padding: 0.2em 0.4em;
  background: #f4f4f4;
  color: #595959;
  margin-right: 1em;
  :hover {
    cursor: pointer;
  }
`;
const AuthorBio = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-left: 0.3em;
  position: absolute;
  bottom: 2.5em;
  p {
    letter-spacing: 0.1rem;
    filter: drop-shadow(0px 0px 6px #00000086);
  }
`;
