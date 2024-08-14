import { cn } from "@/lib/utils";

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    disabled?: boolean;
    outline?: boolean;
    type?: "button" | "submit";
    onClick?: () => void;
}

export default function Button({
    label,secondary,fullWidth,large,
    disabled,outline,type,onClick}: ButtonProps) {
  return <button
  disabled={disabled} onClick={onClick} type={type} className={cn("rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed", fullWidth ? "w-full" : "w-fit",
   secondary ? "bg-white text-black" : "bg-sky-500 text-white",
   large ? "text-xl px-5 py-3" : "text-md px-4 py-3",
   outline ? "bg-transparent border-slate-600 text-sky-600 hover:bg-slate-800/40" : "")} >{label}</button>
} 