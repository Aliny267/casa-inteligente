import React, { useState } from "react";
import { LampPendant } from "@phosphor-icons/react";

function Efeitos() {
  const [ledLigado, setLedLigado] = useState(false);
  const [cor, setCor] = useState("");
  const [efeito, setEfeito] = useState("");

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg min-w-[250px] max-w-[350px]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <LampPendant size={24} weight="fill" />
        Efeitos de LED
      </h2>

      
      <div className="flex items-center gap-2 mb-4">
        <span>LED</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={ledLigado}
          onChange={() => setLedLigado(!ledLigado)}
        />
      </div>

      
      {ledLigado && (
        <>
          {/* Seleção de cor */}
          <div className="mb-4">
            <label className="block mb-2">Cor:</label>
            <select
              className="select select-bordered w-full"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            >
              <option value="">Selecione uma cor</option>
              <option value="vermelho">Vermelho</option>
              <option value="azul">Azul</option>
              <option value="verde">Verde</option>
              <option value="amarelo">Amarelo</option>
              <option value="multicolorido">Multicolorido</option>
            </select>
          </div>

          {/* Efeitos */}
          <div>
            <label className="block mb-2">Efeito:</label>
            <div className="flex flex-col gap-2">
              {["Flash", "Fade", "Strobo", "Sequencial"].map((opcao) => (
                <label key={opcao} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="efeito"
                    value={opcao}
                    checked={efeito === opcao}
                    onChange={(e) => setEfeito(e.target.value)}
                    className="radio radio-primary"
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Efeitos;