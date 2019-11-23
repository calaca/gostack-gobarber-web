import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
