                            --Criação do banco de dados--
create database exercicio_query_builder;

                            --Criação das tabelas--
create table usuarios (
  id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
 );

