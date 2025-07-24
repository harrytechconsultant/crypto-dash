"use client";

import { useTheme } from "next-themes";
import { NavBar } from "@/components/nav-bar";
import { useEffect, useState } from "react";
// import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("");

  useEffect(() =>{
    setBgColor(theme === "dark" ? "bg-black" : "bg-slate-100");
  }, [theme]);


  return (
    <div className={`poppins ${bgColor} p-2 min-h-screen`}>
      <h1 className="text-4xl font-bold">Welcome to Crypto Dash</h1>
      <NavBar />
    </div>
  );
}
