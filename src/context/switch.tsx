"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Switch() {
  const [isMinecraft, setIsMinecraft] = useState(false);

  // Cada vez que isMinecraft cambia, actualizamos el body
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
      {isMinecraft ? (
        <>
          <Image src="/iconos/minecraft_logo.png" alt="Minecraft" width={24} height={24} />
          <span>Modo Minecraft</span>
        </>
      ) : (
        <>
          <span>👔</span>
          <span>Modo Traje</span>
        </>
      )}
    </button>
  );
}