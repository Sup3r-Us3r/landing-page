import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mt-28 mx-auto">
      <section className="flex flex-col">
        <h1 className="text-6xl font-light text-gray-300">RE.N♻️SCER</h1>
        <h2 className="text-6xl font-bold text-gray-800">Dashboard</h2>
      </section>

      <section className="flex flex-col mt-12">
        <iframe
          className="w-full h-screen"
          title="Report Section"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzI5MWEwOWQtMWM4MC00ZTY1LTk4YmMtMTEyZDIxMDg3NDg1IiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"
          frameBorder="0"
          allowFullScreen
        ></iframe>

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
