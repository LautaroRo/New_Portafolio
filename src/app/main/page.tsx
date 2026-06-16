// "use client";
// import { useState } from 'react';
// import "./estilos.css";

// export default function MainPage() {
//   const [theme, setTheme] = useState('default');

//   return (
//     <div data-theme={theme} className="container">

//       {/* Fondo dinámico: video para Minecraft, nada para otros */}
//       {theme === 'minecraft' && (
//         <video
//           src="/Video Minecraft.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="video-fondo"
//         />
//       )}

//       {/* Sidebar - Omnitrix */}
//       <aside className="sidebar">
//         <h2 className="title">Omnitrix</h2>
//         <button onClick={() => setTheme('default')}>Standard UI</button>
//         <button onClick={() => setTheme('minecraft')}>Minecraft Mode</button>
//         <button onClick={() => setTheme('lol')}>LoL Client Mode</button>

//         <nav className="nav">
//           <p>Navegación</p>
//           <a href="#inicio">Inicio</a>
//           <a href="#proyectos">Proyectos</a>
//         </nav>
//       </aside>

//       {/* Contenido Principal */}
//       <main className="main-content">
//         <section id="inicio">
//           <h1 className="title">Hola! Soy Lauta.</h1>
//           <p className="subtitle">Desarrollador Full-Stack & Estudiante de Ciencias Matemáticas.</p>
//         </section>

//         <section id="proyectos">
//           <h2 className="title">Mis Proyectos Destacados</h2>
//           <div className="grid">
//             <div className="card">
//               <h3>Peluquería App</h3>
//               <p>Sistema de gestión de turnos para el negocio de mi viejo.</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import "./estilos.css";
import Navbar from "./../components/navbar/index.tsx";
import Info from "../components/info/index.tsx";
import NavGuia from "../components/navguia/intex.tsx";
import Habilidades from "../components/habilidades/index.tsx";
import Proyectos from "../components/proyectos/index.tsx";
import Contacto from "../components/contacto/index.tsx";

export default function MainPage() {
  const [theme, setTheme] = useState("default");

  return (
    <>
      <Navbar />
      <Info />
      <NavGuia/>
      <Habilidades/>
      <Proyectos/>
      <Contacto/>
    </>
  );
}
