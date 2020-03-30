import React from "react";
import styled from 'styled-components';

const MallCardDiv = styled.div`
width: 300px;
height: 400px;
border: 2px solid purple;
`

const MallCard = props => {
  return (
    <MallCardDiv>
      <p>name</p>
    </MallCardDiv>
  );
};
export default MallCard;
