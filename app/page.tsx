import Image from "next/image";
import LoginForm from "./HookForm/LoginForm/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:pt-0 pt-8  ">
     <LoginForm/>
    </main>
  );
}
