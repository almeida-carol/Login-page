// components/LoginForm.tsx
"use client";

import { useState } from "react";

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false); 

  const handleLogin = () => {
    // Lógica de autenticação
    if (email === "admin@sport.com" && senha === "123") {
      setErro(false); 
      console.log("Login de Sucesso");
      onLogin(); 
    } else {
      setErro(true); 
      console.log("Login Falhou");
      setEmail(""); // Limpa o email
      setSenha(""); // Limpa a senha
    }
  };

  return (
    // 'font-sans' para garantir Inter
    <div className="font-sans min-h-screen w-full bg-[#8B1A1A] flex flex-col items-center justify-center relative">
      
      {/* 1. Navbar (Barra Superior) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#d62828] flex items-center p-6 z-10 shadow-lg">
        <div className="text-white text-xl font-bold flex items-center">
          SPORT CENTER
          
          {/* Ícone 1: Bola de Vôlei (Revertido para Emoji) */}
          <span className="ml-3 text-2xl" role="img" aria-label="Bola de Vôlei">
            🏐
          </span>
        </div>
      </div>
      
      {/* Espaço reservado para o header */}
      <div className="pt-16"></div> 

      {/* 2. Cartão de Login - max-w-xs e padding p-6 */}
      <div className="w-full max-w-xs bg-white p-6 rounded-xl shadow-2xl mt-8"> 
        
        {/* Título LOGIN - Ícone do corredor removido */}
        <h1 className="text-3xl font-extrabold text-[#333333] text-center mb-6">
          LOGIN
        </h1>

        {/* ------------------------------------------------------------- */}
        {/* Renderização Condicional do Erro */}
        {erro && (
            <div 
                className="bg-red-100 border border-red-400 text-red-700 p-2 rounded relative mb-4 text-xs font-semibold text-center"
                role="alert"
            >
                <span className="block">❌ Email ou Senha Inválidos.</span>
            </div>
        )}
        {/* ------------------------------------------------------------- */}

        {/* Input Email - Fundo ajustado para cinza claro (#E0E0E0) */}
        <input
          type="email"
          placeholder="DIGITE SEU EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded focus:outline-none placeholder-gray-500 text-sm"
          style={{ backgroundColor: '#E0E0E0', border: '1px solid #CCC' }}
        />

        {/* Input Senha - Fundo ajustado para cinza claro (#E0E0E0) */}
        <input
          type="password"
          placeholder="DIGITE SUA SENHA"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 mb-6 rounded focus:outline-none placeholder-gray-500 text-sm"
          style={{ backgroundColor: '#E0E0E0', border: '1px solid #CCC' }}
        />

        {/* Botão ENTRAR - Cor de fundo ajustada para o vermelho-tijolo */}
        <button
          onClick={handleLogin}
          className="w-full text-white font-bold py-2 rounded transition shadow-md text-base hover:opacity-90"
          style={{ backgroundColor: '#cc4a4a' }} 
        >
          ENTRAR
        </button>
        {erro && (
  <p className="mt-3 text-center text-[11px] text-gray-500">
    Dica para teste: admin@sport.com | 123
  </p>
)}

      </div>
    </div>
  );
}