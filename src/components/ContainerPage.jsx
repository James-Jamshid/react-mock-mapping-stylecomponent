import React from "react";
import data from "./mock/sports.json";
import { Container, Logo, Wallpaper, Wrapper } from "./styled";
console.log("data:", data);

const ContainerPage = ({ value }) => {
  return (
    <Container>
      <Wrapper>
        <Wallpaper src={value.node.banner} alt="something is error" />
        <Logo src={value.node.logo} alt="" />
        <p id="name"> {value.node.name}</p>
        <p id="slug">by {value.node.slug} </p>
        <p>{value.node.description}</p>
      </Wrapper>
    </Container>
  );
};

export default ContainerPage;
