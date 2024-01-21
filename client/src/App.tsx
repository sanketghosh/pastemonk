import { Toaster } from "react-hot-toast";
import Editor from "./components/editor";

export default function App() {
  return (
    <main className="h-screen border-none bg-zinc-900 p-3 md:p-5 lg:p-6 xl:p-8">
      <Toaster position="top-right" />
      <Editor />
    </main>
  );
}
