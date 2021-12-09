import styled from "styled-components";
import { useContext } from "react";
import { TermContext } from "../context/termContext";
export default function Gallery(props) {
  const { setTerm } = useContext(TermContext);

  const fullSize = (img) => {
    <FullImg>
      <p>image</p>
      <img src={img.urls.full} />
    </FullImg>;
  };

  return (
    <GalleryContainer>
      {props.gallery?.map((el) => {
        return (
          <ContainerImg key={el.id}>
            <Img
              src={el.urls.regular}
              alt={el.alt_description}
              onClick={() => {
                return fullSize(el);
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
  );
}
const FullImg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 300px;
  background: red;
  img {
    width: 100%;
  }
`;

const GalleryContainer = styled.main`
  padding: 0 5%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 2.5em;
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