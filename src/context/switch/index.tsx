"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./../tema/index";
import { THEMES } from "./../../constantes/index";
import "./estilos.css";

export default function Switch() {
  const { themeId, setThemeId } = useTheme();

  // Mantiene el body actualizado con la clase del tema actual
  useEffect(() => {
    Object.values(THEMES).forEach((theme) => {
      document.body.classList.remove(theme.bodyClass);
    });

    if (themeId && THEMES[themeId as keyof typeof THEMES]) {
      document.body.classList.add(
        THEMES[themeId as keyof typeof THEMES].bodyClass
      );
    }
  }, [themeId]);

  const handleToggle = () => {
    const keys = Object.keys(THEMES); // Obtenemos ["minecraft", "silenthill", "profesional"]
    const currentIndex = themeId ? keys.indexOf(themeId) : -1;
    const nextIndex = currentIndex + 1;

    // Si llegamos al final del array, volvemos a null, sino pasamos al siguiente
    setThemeId(nextIndex < keys.length ? keys[nextIndex] : null);
  };

  // Obtenemos la configuración del tema actual
  const currentTheme = themeId ? THEMES[themeId as keyof typeof THEMES] : null;

  return (
    <button onClick={handleToggle} className="switch-btn">
      {currentTheme?.icon ? (
        <Image 
          src={currentTheme.icon} 
          alt="Icono del tema" 
          width={24} 
          height={24} 
        />
      ) : (
        <span>👔</span> // Ícono por defecto para el modo Profesional
      )}
    </button>
  );
}