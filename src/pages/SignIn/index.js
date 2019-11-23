import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
