# Projeto Login – Next.js e Tailwind CSS

## Descrição do Projeto
Este projeto consiste no desenvolvimento de uma aplicação web simples de login utilizando **Next.js (App Router)**, **React** e **Tailwind CSS**.  
O objetivo é demonstrar a estrutura correta do framework, componentização, gerenciamento de estado e estilização, conforme os critérios propostos.

---

## Credenciais para Teste
Para acessar o sistema, utilize as credenciais abaixo:

- **Email:** admin@sport.com  
- **Senha:** 123

Essas credenciais estão definidas diretamente no componente de login apenas para fins acadêmicos e de avaliação.

---

## Estrutura do Projeto
O projeto utiliza a estrutura de pastas do **Next.js App Router**, incluindo:

- `app/login/page.tsx` → Página de login  
- `app/home/page.tsx` → Página inicial após o login  
- `components/LoginForm.tsx` → Componente de formulário de login reutilizável  
- `components/Navbar.tsx` → Componente de navegação  

---

## Funcionalidades Implementadas
- Gerenciamento de estado com **useState** para os campos de email e senha  
- Validação simples de login com renderização condicional de mensagem de erro  
- Redirecionamento após login utilizando **useRouter**  
- Logout com retorno à página de login  
- Componentização utilizando **props** para comunicação entre componentes  

---

## Estilização
- Estilização realizada com **Tailwind CSS**
- Formulário centralizado na tela
- Uso extensivo de classes utilitárias para layout, cores, espaçamento e tipografia
- Layout inspirado em um site esportivo

---

## Como Executar o Projeto
Siga os passos abaixo para executar o projeto localmente:

```bash
npm install
npm run dev
