import React, { useState } from "react";
import { Wind } from "@phosphor-icons/react";

function ArCondicionado() {
  const [ligado, setLigado] = useState(false);
  const [temperatura, setTemperatura] = useState(23);
  const [modo, setModo] = useState("Frio");
  const [timerOn, setTimerOn] = useState("");
  const [timerOff, setTimerOff] = useState("");

  // Funções para controlar temperatura com limites
  const aumentarTemp = () => {
    if (temperatura < 30) setTemperatura(temperatura + 1);
  };

  const diminuirTemp = () => {
    if (temperatura > 16) setTemperatura(temperatura - 1);
  };

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg min-w-[250px] max-w-[350px]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Wind size={24} weight="fill" />
        Ar Condicionado
      </h2>

      
      <div className="flex items-center gap-2 mb-4">
        <span>Status</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={ligado}
          onChange={() => setLigado(!ligado)}
        />
        <span>{ligado ? "Ligado" : "Desligado"}</span>
      </div>

      
      {ligado && (
        <div className="mb-4">
          <label className="block mb-2">Temperatura: {temperatura}°C</label>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-accent" onClick={aumentarTemp}>
              +
            </button>
            <button className="btn btn-sm btn-accent" onClick={diminuirTemp}>
              -
            </button>
          </div>
        </div>
      )}

      
      {ligado && (
        <div className="mb-4">
          <label className="block mb-2">Modo:</label>
          <select
            className="select select-bordered w-full"
            value={modo}
            onChange={(e) => setModo(e.target.value)}
          >
            <option value="Frio">Frio</option>
            <option value="Quente">Quente</option>
            <option value="Ventilar">Ventilar</option>
            <option value="Automático">Automático</option>
          </select>
        </div>
      )}

      
      {ligado && (
        <div className="mb-4">
          <label className="block mb-2">Timer ON:</label>
          <select
            className="select select-bordered w-full"
            value={timerOn}
            onChange={(e) => setTimerOn(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="1h">1h</option>
            <option value="2h">2h</option>
            <option value="3h">3h</option>
            <option value="6h">6h</option>
            <option value="8h">8h</option>
            <option value="12h">12h</option>
            <option value="24h">24h</option>
          </select>
        </div>
      )}

      
      {ligado && (
        <div>
          <label className="block mb-2">Timer OFF:</label>
          <select
            className="select select-bordered w-full"
            value={timerOff}
            onChange={(e) => setTimerOff(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="1h">1h</option>
            <option value="2h">2h</option>
            <option value="3h">3h</option>
            <option value="6h">6h</option>
            <option value="8h">8h</option>
            <option value="12h">12h</option>
            <option value="24h">24h</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default ArCondicionado;
