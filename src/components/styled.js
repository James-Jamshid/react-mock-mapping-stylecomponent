import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas: "a a a";
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 550px;
  height: 500px;
  cursor: pointer;
  #name {
    font-style: bold;
    font-size: large;
  }
  #name:hover {
    color: grey;
  }
  #slug:hover {
    color: blue;
  }
`;
export const Wallpaper = styled.img`
  width: 100%;
  height: 150px;
  cursor: pointer;
  border-radius: 12px;
  :hover {
    box-shadow: 0 0 10px #000;
  }
`;
export const Logo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 50%;
  margin-top: -30px;
  border: 4px solid white;

  :hover {
    transform: scale(1.1);
    transition: all 200ms ease;
    box-shadow: 0 0 10px #000;
  }
`;
