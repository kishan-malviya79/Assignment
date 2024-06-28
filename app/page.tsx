import Image from "next/image";
import LoginForm from "./HookForm/LoginForm/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:pt-0 pt-20 ">
     <LoginForm/>
    </main>
  );
}
