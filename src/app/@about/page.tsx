'use client';

import styled from "styled-components";


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 40vh;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > h1 {
      color: white;
      font-size: 5vh;
      font-weight: 600;
    }
    > h2 {
      color: white;
      font-size: 2vh;
    }
    > p {
      color: white;
      font-size: 2vh;
      font-weight: 300;
      text-align: center;
      line-height: 3vh;
    }
  }
`;

export default function AboutScreen() {

    return (
        <div className="parent" id="about">
            about
        </div>
    )
}
