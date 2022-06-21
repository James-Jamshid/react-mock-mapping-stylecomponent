import React from "react";
import ContainerPage from "./ContainerPage";
import sport from "./mock/sports.json";
console.log("sport:", sport);

const Mapping = () => {
  return (
    <div>
      {sport.data.trendingCollections.edges.map((value, key) => (
        <ContainerPage value={value} key={key} />
      ))}
    </div>
  );
};

export default Mapping;
