import React from 'react';
import { Button, Input } from 'antd';
import './HomeForm.scss';

const HomeForm = ({ onButtonClick }) => (
  <div className="home-form">
    <div className="primary">Vamos começar!</div>
    <div className="secondary">Primeiro, informe o seu endereço!</div>
    <div className="actions">
      <Input
        className="actions__input-text"
        placeholder="Digite aqui o seu endereço completo"
      />
      <Button className="actions__button" onClick={onButtonClick}>
        Ver Produtos
      </Button>
    </div>
  </div>
);

export default HomeForm;
