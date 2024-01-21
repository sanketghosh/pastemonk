interface ButtonProps {
  children?: React.ReactNode;
  copyText: () => void;
}

export default function Button({ children, copyText }: ButtonProps) {
  return (
    <button
      className="rounded-sm p-1.5 transition-all hover:bg-neutral-700"
      onClick={copyText}
    >
      {children}
    </button>
  );
}
