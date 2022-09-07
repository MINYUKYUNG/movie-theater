import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Images } from '../../assets/myPageDefaultImage.svg';

export default function Main() {
  return (
    <div>
      <div>하이</div>
      <StyledMyIcon></StyledMyIcon>
    </div>
  );
}

const StyledMyIcon = styled(Images)``;
