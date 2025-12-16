"use client";

import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    router.push("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
