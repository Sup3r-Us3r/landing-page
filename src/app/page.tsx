'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

const Home = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === '' || number === '' || email === '' || message === '') {
      window.alert('Todos os campos são obrigatórios!');

      return;
    }

    window.alert('Mensagem enviada!');
  }

  return (
    <div className="max-w-7xl mx-auto mb-28">
      <section className="flex justify-center items-center p-24">
        <div className="flex flex-col flex-wrap justify-center center mr-24 h-[829px]">
          <p className="w-9 break-words whitespace-pre-wrap text-center text-4xl text-gray-300 font-light">
            RE
            <br />
            .
            <br />
            N♻️SCER
          </p>

          <Link
            href="/dashboard"
            className="flex items-center pl-12 mt-24 bg-gray-800 font-light text-xs tracking-[0.125rem] text-white w-56 h-[72px] hover:bg-gray-800 transition-colors"
          >
            DASHBOARD
            <span className="ml-8">→</span>
          </Link>
        </div>

        <img
          className="w-[770px] h-[829px] object-cover"
          src="/assets/images/1.jpeg"
          alt="renascer"
        />
      </section>

      <section className="grid grid-cols-2 gap-12 p-20 justify-center items-center mt-32 bg-gray-100">
        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-12">
            <img
              className="w-[270px] h-[265px] object-cover"
              src="/assets/images/2.jpeg"
              alt="renascer"
            />
            <img
              className="w-[270px] h-[140px] object-cover"
              src="/assets/images/3.jpeg"
              alt="renascer"
            />
          </div>

          <img
            className="w-[270px] h-[345px] object-cover"
            src="/assets/images/6.jpeg"
            alt="renascer"
          />
        </div>

        <div>
          <h1 className="font-light text-6xl text-gray-300 mb-10">Sobre nós</h1>
          <p className="font-light text-lg text-gray-600">
            Fundada em junho de 2021, a empresa Re.Nascer Soluções em Resíduos
            Plásticos Ltda, surge baseada no fundamento dos “Res” da
            sustentabilidade no que se refere aos resíduos gerados por todo ser
            vivo e a todo momento. Amparada pela Lei nº 12.305, de 02 de agosto
            de 2010, que trata da destinação correta dos Resíduos Sólidos,
            obrigações e responsabilidades dos geradores...
          </p>

          <Link
            href="/sobre-nos"
            className="flex items-center pl-12 mt-6 bg-white font-light text-xs tracking-[0.125rem] text-gray-900 w-56 h-[72px] hover:bg-gray-50 transition-colors"
          >
            SAIBA MAIS
            <span className="ml-8">→</span>
          </Link>
        </div>
      </section>

      <section className="mt-32">
        <h1 className="font-light text-6xl text-gray-300">
          Missão, visão e valores
        </h1>

        <div className="flex flex-col gap-12 mt-12">
          <div className="flex justify-between items-center gap-12">
            <div className="flex gap-10 justify-center items-start">
              <h1 className="font-bold text-gray-200 text-9xl">1</h1>
              <p className="font-light text-gray-900 text-lg text-justify">
                A partir de uma relação de confiança, comprometimento e
                transparência, estabelecer parcerias duradouras e satisfatórias
                no tocante ao fornecimento de matéria prima reciclada
              </p>
            </div>

            <div className="flex gap-12 justify-center items-start">
              <h1 className="font-bold text-gray-200 text-9xl">2</h1>
              <p className="font-light text-gray-900 text-lg text-justify">
                Ser referência positiva no mercado pela qualidade, produção e
                satisfação de todos envolvidos no projeto/empresa Re.Nascer
              </p>
            </div>
          </div>

          <div className="flex gap-12 justify-center items-start">
            <h1 className="font-bold text-gray-200 text-9xl">3</h1>
            <p className="font-light text-gray-900 text-lg text-justify">
              Quanto mais CONHECIMENTO, maior a dúvida e maior a busca por
              CRESCIMENTO e aprimoramento. Que seja DINÂMICA, HONESTA E
              TRANSPARENTE a nossa busca, para que todos, que cruzarem seu
              caminho com o nosso, sintam a FÉ que nos move e a EMPATIA que
              prezamos estabelecer em nossas relações.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h1 className="font-light text-6xl text-gray-300">Galeria</h1>

        <div className="flex flex-wrap gap-10 mt-12">
          <div className="flex gap-12 w-full">
            <img
              className="flex-1 h-60 object-cover"
              src="/assets/images/1.jpeg"
              alt="renascer"
            />
            <img
              className="flex-1 h-60 object-cover"
              src="/assets/images/2.jpeg"
              alt="renascer"
            />
          </div>

          <div className="flex gap-12 w-full">
            <img
              className="flex-1 h-60 object-cover"
              src="/assets/images/3.jpeg"
              alt="renascer"
            />
            <img
              className="flex-1 h-60 object-cover"
              src="/assets/images/4.jpeg"
              alt="renascer"
            />
            <img
              className="flex-1 h-60 object-cover"
              src="/assets/images/5.jpeg"
              alt="renascer"
            />
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h1 className="font-light text-6xl text-gray-300">Fale conosco</h1>

        <div className="flex justify-between w-full items-center mt-12 gap-12">
          <form onSubmit={submitForm} className="flex flex-col gap-2">
            <input
              className="h-12 w-96 bg-gray-100 p-4 rounded"
              type="text"
              placeholder="Nome"
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <input
              className="h-12 w-96 bg-gray-100 p-4 rounded"
              type="text"
              placeholder="Número"
              onChange={event => setNumber(event.target.value)}
              value={number}
            />
            <input
              className="h-12 w-96 bg-gray-100 p-4 rounded"
              type="text"
              placeholder="E-mail"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <textarea
              className="h-32 w-96 bg-gray-100 p-4 rounded resize-none"
              placeholder="Mensagem"
              onChange={event => setMessage(event.target.value)}
              value={message}
            />

            <button
              type="submit"
              className="mt-12 bg-gray-800 font-light text-xs tracking-[0.125rem] text-white w-56 h-[72px] hover:bg-gray-800 transition-colors"
            >
              ENVIAR
              <span className="ml-8">→</span>
            </button>
          </form>

          <img
            className="w-full h-72 object-cover -mt-32"
            src="https://img.freepik.com/fotos-premium/fale-conosco-suporte-ao-cliente-linha-direta-pessoal-conecte-ligue-para-o-suporte-ao-clientexa_36325-4354.jpg"
            alt="renascer"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
