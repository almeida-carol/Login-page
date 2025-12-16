// Este código deve estar em: app/login/page.tsx

"use client";

import { useRouter } from "next/navigation";
import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    router.push("/home");
  }

  return <LoginForm onLogin={handleLogin} />;
}