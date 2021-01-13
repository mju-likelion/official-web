import styled from '@emotion/styled';
import React from 'react';

import Button from '../components/Members/Button';
import Profile from '../components/Members/Profile';

const BackColor = styled.div`
  background-color: #000000;
`;

const Grid = styled.div`
  padding: 20px 100px 16px 100px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 45px;
`;

const CardScroll = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 6px;
    background: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff9e1b;
    border-radius: 6px;
  }
`;

const Members: React.FC = () => {
  return (
    <BackColor>
      <Grid>
        <Button />

        <Title>대표</Title>
        <Profile />
        {VicePresident()}
        <Title>운영진</Title>
        <CardScroll>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </CardScroll>
        <Title>아기사자</Title>
        <Profile />
      </Grid>
    </BackColor>
  );
};

const VicePresident = () => {
  return (
    <>
      <Title>부대표</Title>
      <Profile />
    </>
  );
};

export default Members;
