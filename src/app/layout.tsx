import './styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing page - Trabalho 4º Semestre',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <main className="w-full">{children}</main>

        <footer className="w-full bg-gray-900 text-white mt-16">
          <div className="flex justify-center w-full gap-32 p-24">
            <div className="flex flex-col">
              <span className="text-9xl">♻️</span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-bold mb-6">Informação</h1>
              <span className="text-sm font-medium leading-9">
                Dashboard / BI
              </span>
              <span className="text-sm font-medium leading-9">Sobre nós</span>
              <span className="text-sm font-medium leading-9">
                Missão, visão e valores
              </span>
              <span className="text-sm font-medium leading-9">Galeria</span>
              <span className="text-sm font-medium leading-9">
                Fale conosco
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-bold mb-6">Contato</h1>
              <span className="text-sm font-medium leading-9">
                Rua Nelson José da Silva, 222 Bairro Juscelino Kubitschek,
                Itaúna - MG
              </span>
              <span className="text-sm font-medium ">(37) 9 9989-1441</span>
              <span className="text-sm font-medium leading-9">
                renascersolucoesresplasticos@gmail.com
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-bold mb-6">Redes sociais</h1>
            </div>
          </div>

          <div className="h-0.5 w-full bg-gray-800" />

          <div className="flex justify-center items-center p-6">
            <p className="text-gray-600 text-sm">
              &copy; Todos os direitos reservados
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
