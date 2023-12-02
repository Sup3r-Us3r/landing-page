import Link from 'next/link';

const imageURL =
  'https://img.freepik.com/fotos-gratis/reciclar-fundo-com-aquarela-de-ideia-sustentavel-de-suporte-de-mao_53876-108705.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mt-28 mx-auto">
      <section className="flex flex-col">
        <h1 className="text-6xl font-light text-gray-300">RE.N♻️SCER</h1>
        <h2 className="text-6xl font-bold text-gray-800">Dashboard</h2>
      </section>

      <section className="flex flex-col mt-12">
        {/* <img
          className="w-full h-[50vh] object-cover"
          src={imageURL}
          alt="renascer"
        /> */}

        <iframe
          className="w-full h-[50vh]"
          src="https://nextjs.org/"
          title="Dashboard Power BI"
          allowFullScreen
        />

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

export default Dashboard;
