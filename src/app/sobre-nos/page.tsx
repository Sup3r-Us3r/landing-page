import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mt-28 mx-auto">
      <section className="flex flex-col">
        <h1 className="text-6xl font-light text-gray-300">RE.N♻️SCER</h1>
        <h2 className="text-6xl font-bold text-gray-800">Sobre nós</h2>
      </section>

      <section className="flex flex-col mt-12">
        <p className="font-light text-base leading-8 text-gray-800">
          Fundada em junho de 2021, a empresa Re.Nascer Soluções em Resíduos
          Plásticos Ltda, surge baseada no fundamento dos “Res” da
          sustentabilidade no que se refere aos resíduos gerados por todo ser
          vivo e a todo momento. Amparada pela Lei nº 12.305, de 02 de agosto de
          2010, que trata da destinação correta dos Resíduos Sólidos, obrigações
          e responsabilidades dos geradores, a atividade principal da empresa
          Re.nascer, se define como Re-ciclar. Ou seja, devolver ao ciclo de
          vida de um produto, a matéria prima da qual o mesmo é feito, para que
          possa ser Re-aproveitada antes de chegar ao fim de sua vida útil.
          <br />
          Atenta à necessidade das empresas quanto a destinação final dos
          resíduos gerados, oferece gerenciamento dos resíduos sólidos e coleta
          dos mesmos.
          <br />
          Através de parcerias com cooperativas e empresas privadas, beneficia e
          comercializa o material reciclado, pós consumo e pós indústria, que
          chegam em fardos ou em bags.
          <br />
          Esse material é retriado para melhor segregação, no intuito de que não
          haja contaminação nos tipos de plásticos, visto que cada um tem uma
          característica e aplicação diferente na fabricação dos mais variados
          objetos.
          <br />
          Após seleção minuciosa, os materiais são moídos, lavados e secos,
          ficando assim aptos para retornarem às indústrias. Esse beneficiamento
          do material reciclado feito pela empresa Re.nascer , em parceria com
          seus fornecedores e posteriormente clientes que compram o material
          beneficiado, se enquadra na Logística Reversa pretendida pela Política
          Nacional de Resíduos Sólidos.
          <br />A Re-utilização do material reciclado, evita que novos insumos e
          matéria virgem, sejam extraídos da natureza. Empregos ainda são
          gerados, direta ou indiretamente. Plásticos deixam de ser jogados em
          bueiros ou lixões o que contaminaria solos e rios.
          <br />
          Enfim... o conceito de Re-ciclar para a Re.Nascer Soluções em Resíduos
          Plásticos Ltda, é algo motivador, pois requer a busca contínua por
          conhecimento e aprimoramento. Requer uma busca dinâmica pela
          sustentabilidade, ambiental, social e econômica.
        </p>

        <Link
          href="/"
          className="self-end flex items-center justify-end pr-12 mt-24 bg-gray-800 font-light text-xs tracking-widest text-white w-56 h-[72px] hover:bg-gray-800 transition-colors"
        >
          <span className="mr-8">←</span>
          VOLTAR
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
