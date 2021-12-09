import styled from "styled-components";
import { useContext, useState } from "react";
import { TermContext } from "../context/termContext";
import { MdOutlinePlace } from "react-icons/md";

export default function Gallery(props) {
  const { setTerm } = useContext(TermContext);
  const [showFullSize, setShowFullSize] = useState(false);
  const [imgProps, setImgProps] = useState();

  const FullSize = (props) => {
    return (
      <Overlay>
        <FullImg>
          <CloseBtn
            onClick={() => {
              setShowFullSize(false);
            }}
          >
            Close
          </CloseBtn>
          <img src={props?.urls.full} alt="full" />
          <AuthorBio>
            <AuthorImg
              src={props.user?.profile_image.small}
              alt={props.user.username}
            />
            <p>{props.user.username}</p>
          </AuthorBio>
          {props.user.location ? (
            <Place>
              <MdOutlinePlace size="1.5em" />
              <p>{props.user.location}</p>
            </Place>
          ) : (
            ""
          )}
        </FullImg>
      </Overlay>
    );
  };

  return (
    <>
      {showFullSize ? <FullSize {...imgProps} /> : ""}
      <GalleryContainer>
        {props.gallery?.map((el) => {
          return (
            <ContainerImg key={el.id}>
              <AuthorBio style={{ position: "absolute" }}>
                <AuthorImg
                  src={el.user.profile_image.small}
                  alt={el.user.username}
                />
                <p>{el.user.username}</p>
              </AuthorBio>
              <Img
                src={el?.urls.regular}
                alt={el?.alt_description}
                onClick={() => {
                  setShowFullSize(true);
                  setImgProps(el);
                  console.log(imgProps);
                }}
              />
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
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 103;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80vw;

  max-height: 80vh;
  /* padding: 3em; */

  /* padding: 3em 4em 3em 4em; */
  background: #ffffff;
  img {
    width: 100%;
    height: 100%;
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

  @media screen and (max-width: 1024px) {
    width: 50%;

    :nth-of-type(2n + 1) {
      padding-right: 0.4em;
    }
    :nth-of-type(2n + 2) {
      padding-left: 0.4em;
    }
    :nth-of-type(3n + 3) {
      padding-left: 0;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    :nth-of-type(2n + 1) {
      padding-right: 0em;
    }
    :nth-of-type(2n + 2) {
      padding-left: 0em;
    }
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
  /* position: absolute; */
  top: 0.2em;
  p {
    font-size: 0.9em;
    filter: drop-shadow(0px 0px 6px #00000086);
  }
`;
const Place = styled.div`
  display: flex;
`;
const CloseBtn = styled.button`
  position: absolute;

  transition: 0.1s ease;
  border-radius: 0 !important;
  border: none;
  padding: 0.5em 0.7em;
  right: 0.4em;
  top: 0.4em;
  /* position: absolute; */
  /* top: 1em; */
  /* left: 1em; */
  box-shadow: 0px 0px 3px #77777792;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px #777777;
  }
`;
