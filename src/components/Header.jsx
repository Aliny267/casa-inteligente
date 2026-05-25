import React, { useEffect, useState } from "react";
import { Thermometer, Bed, CookingPot, Gear, PlantIcon, BathtubIcon  } from "@phosphor-icons/react";

function Header() {
  const [temperature] = useState(25);
  const [theme, setTheme] = useState("garden");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
        <span>{temperature}°C</span>
      </div>

      {/* Coluna 3: controlador de tema */}
      <div className="flex justify-center">
        <label className="swap swap-rotate">
          <input 
            type="checkbox" 
            checked={theme === "dark"} 
            onChange={() => setTheme(theme === "garden" ? "dark" : "garden")} 
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

      {/* Coluna 4: FAB com etiquetas */}
      <div className="flex justify-end pr-4">
  <div className="fab">
    
    <div tabIndex="0" role="button" className="btn btn-lg btn-circle btn-info">+</div>

    
    <div className="fab-close">
      <span className="btn btn-circle btn-lg btn-error">✕</span>
    </div>

    
    <div>Configurações <button className="btn btn-lg btn-circle"><Gear size={24} weight="fill" /></button></div>
    <div>Quarto 2 <button className="btn btn-lg btn-circle"><Bed size={24} weight="fill" /></button></div>
    <div>Quarto 1 <button className="btn btn-lg btn-circle"><Bed size={24} weight="fill" /></button></div>
    <div>Banheiro <button className="btn btn-lg btn-circle"><BathtubIcon size={24} weight="fill" /></button></div>
    <div>Cozinha <button className="btn btn-lg btn-circle"><CookingPot size={24} weight="fill" /></button></div>
    <div>Jardim <button className="btn btn-lg btn-circle"><PlantIcon size={24} weight="fill" /></button></div>
    
  </div>
</div>
    </header>
  );
}

export default Header;
