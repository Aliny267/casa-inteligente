import React, { useState } from "react";
import { Butterfly } from "@phosphor-icons/react";

function Cortinas() {
  const [posicao, setPosicao] = useState("");

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg min-w-[250px] max-w-[350px]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Butterfly size={24} weight="fill" />
        Cortinas
      </h2>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="cortinas"
            value="Abertas"
            checked={posicao === "Abertas"}
            onChange={(e) => setPosicao(e.target.value)}
            className="radio radio-primary"
          />
          Abertas
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="cortinas"
            value="50%"
            checked={posicao === "50%"}
            onChange={(e) => setPosicao(e.target.value)}
            className="radio radio-primary"
          />
          50%
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="cortinas"
            value="Fechadas"
            checked={posicao === "Fechadas"}
            onChange={(e) => setPosicao(e.target.value)}
            className="radio radio-primary"
          />
          Fechadas
        </label>
      </div>
    </div>
  );
}

export default Cortinas;
