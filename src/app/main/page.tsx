"use client";
import "./estilos.css";
import Navbar from "./../components/navbar/index.tsx";
import Info from "../components/info/index.tsx";
import NavGuia from "../components/navguia/intex.tsx";
import Habilidades from "../components/habilidades/index.tsx";
import Proyectos from "../components/proyectos/index.tsx";
import Contacto from "../components/contacto/index.tsx";
import Switch from "@/src/context/switch/index.tsx";
import Radio from "@/src/context/radio/index.tsx";
export default function MainPage() {
  return (
  <div className="min-h-screen bg-black/30 text-white">
      <Navbar />
      <Info />
      <NavGuia />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Switch />
      <Radio/>
    </div>
  );
}
