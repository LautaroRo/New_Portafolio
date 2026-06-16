"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import "./estilos.css";

export default function Switch() {
  // Empezamos en false (Modo Traje activo)
  const [isMinecraft, setIsMinecraft] = useState(false);

  useEffect(() => {
    if (isMinecraft) {
      document.body.classList.add('minecraft-mode');
    } else {
      document.body.classList.remove('minecraft-mode');
    }
  }, [isMinecraft]);

  return (
    <button 
      onClick={() => setIsMinecraft(!isMinecraft)} 
      className="switch-btn"
    >
      {/* Si isMinecraft es false, mostramos el icono de Minecraft para invitarte a cambiar */}
      {isMinecraft ? (
        <>
          <span>👔</span>
        </>
      ) : (
        <>
          <Image src="/iconos/minecraft_logo.png" alt="Minecraft" width={24} height={24} />
        </>
      )}
    </button>
  );
}