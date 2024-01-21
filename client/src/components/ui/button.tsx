interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="p-1.5 transition-all hover:bg-zinc-700">
      {children}
    </button>
  );
}
