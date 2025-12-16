import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Bem-vindo à Sport 🏆
        </h1>

        <p className="mt-4 text-gray-700">
          Aqui você acompanha notícias, resultados e conteúdos exclusivos
          sobre o mundo dos esportes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-bold text-lg mb-2">⚽ Futebol</h2>
            <p className="text-gray-600">
              Últimos jogos e campeonatos.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-bold text-lg mb-2">🏀 Basquete</h2>
            <p className="text-gray-600">
              NBA, ligas nacionais e destaques.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-bold text-lg mb-2">🏃 Atletismo</h2>
            <p className="text-gray-600">
              Recordes, eventos e atletas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
