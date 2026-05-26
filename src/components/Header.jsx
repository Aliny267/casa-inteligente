import React, { useEffect, useState, useRef } from "react";
import { Thermometer, Bed, CookingPot, Gear, PlantIcon, BathtubIcon } from "@phosphor-icons/react";

function Header() {
  const [temperature, setTemperature] = useState(25);
  const [theme, setTheme] = useState("cyberpunk");
  
  /* NOVO: Estado para controlar o botão FAB */
  const [isFabOpen, setIsFabOpen] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    let mounted = true;

    function scheduleNext() {
      const novaTemp = Number((16 + Math.random() * 14).toFixed(1));
      if (mounted) setTemperature(novaTemp);
      timeoutRef.current = setTimeout(scheduleNext, 5000);
    }

    scheduleNext();

    return () => {
      mounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <header className="grid grid-cols-4 items-center 
                   bg-base-300 text-base-content p-1 md:px-8 
                   border border-base-400 rounded-lg shadow-md 
                   w-full max-w-6xl mx-auto">
      
      {/* Coluna 1: título */}
      <h2 className="text-lg md:text-xl font-bold pl-4">Sala de Estar</h2>

      {/* Coluna 2: temperatura */}
      <div className="flex items-center justify-center gap-1 text-sm md:text-base">
        <Thermometer size={20} />
        <span>{temperature.toFixed(1)}°C</span>
      </div>

      {/* Coluna 3: controlador de tema */}
      <div className="flex justify-center">
        <label className="swap swap-rotate">
          <input 
            type="checkbox" 
            checked={theme === "dark"} 
            onChange={() => setTheme(theme === "cyberpunk" ? "dark" : "cyberpunk")} 
          />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </label>
      </div>

      {/* Coluna 4: FAB Refatorado com React State */}
      <div className="flex justify-end pr-4 relative">
        
        {/* Botão Principal que alterna entre abrir e fechar */}
        <button 
          onClick={() => setIsFabOpen(!isFabOpen)}
          className={`btn btn-lg btn-circle shadow-md relative z-50 ${isFabOpen ? 'btn-error' : 'btn-info'}`}
        >
          {isFabOpen ? '✕' : '+'}
        </button>

        {/* Menu Suspenso (Renderizado apenas se isFabOpen for true) */}
        {isFabOpen && (
          <div className="absolute top-16 right-4 flex flex-col items-end gap-3 z-40 animate-fade-in">
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Configurações</span>
              <button className="btn btn-circle shadow-md"><Gear size={24} weight="fill" /></button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Quarto 2</span>
              <button className="btn btn-circle shadow-md"><Bed size={24} weight="fill" /></button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Quarto 1</span>
              <button className="btn btn-circle shadow-md"><Bed size={24} weight="fill" /></button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Banheiro</span>
              <button className="btn btn-circle shadow-md"><BathtubIcon size={24} weight="fill" /></button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Cozinha</span>
              <button className="btn btn-circle shadow-md"><CookingPot size={24} weight="fill" /></button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-base-100 px-3 py-1 rounded-lg shadow-md border border-base-300 font-medium">Jardim</span>
              <button className="btn btn-circle shadow-md"><PlantIcon size={24} weight="fill" /></button>
            </div>
            
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;