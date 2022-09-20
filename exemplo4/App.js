import React from 'react';
import styled from 'styled-components/native';
import Sanji from './assets/img/sanji.jpg';
import Zoro from './assets/img/zoro.jpg';

const Imagem1 = styled.Image`
  width: 200px;
  border-width: 5px;
  height: 200px;
  border: 2px solid yellow;
  border-radius: 100px;
  display: flex;
  margin-bottom: 400px;
  margin-right: 150px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #020202;
 
  justify-content: center;
`;
const Title = styled.Text`
  color: yellow;
  text-align: center;
  font-size: 16px;
  margin-right: 190px;
  padding: 10px;
  `;
export default () => (
  <Container>
    <Title>Sanjasso
    </Title>
    <Imagem1 source={Sanji}/>
  </Container>
  
);
