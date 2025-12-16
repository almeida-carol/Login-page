// components/Navbar.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  function handleLogout() {
    // Aqui futuramente você pode limpar token, session, etc.
    router.push("/");
  }

  return (
    <nav className="w-full bg-[#c83232] h-16 flex items-center justify-between px-6 shadow-lg">
      {/* Título SPORT CENTER e Ícone de Vôlei */}
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold mr-2">
          SPORT CENTER
        </span>
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs text-black">
          🏐
        </div>
      </div>

      {/* Botão SAIR */}
      <button
        onClick={handleLogout}
        className="px-4 py-1 rounded shadow-md font-bold transition bg-white text-gray-800 hover:bg-gray-100"
      >
        SAIR
      </button>
    </nav>
  );
}
