import Image from "next/image";
import LoginForm from "./HookForm/LoginForm/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <LoginForm/>
    </main>
  );
}
