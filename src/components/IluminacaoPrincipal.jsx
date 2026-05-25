import React, { useState } from "react";
import { Lightbulb } from "@phosphor-icons/react";

function IluminacaoPrincipal() {
  const [lampadas, setLampadas] = useState({
    lampada1: false,
    lampada2: false,
    lampada3: false,
  });

  const toggleLampada = (lampada) => {
    setLampadas((prev) => ({
      ...prev,
      [lampada]: !prev[lampada],
    }));
  };

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg min-w-[250px] max-w-[350px]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Lightbulb size={24} weight="fill" />
        Iluminação Principal
      </h2>

      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <span>Lâmpada 1</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={lampadas.lampada1}
            onChange={() => toggleLampada("lampada1")}
          />
        </label>

        <label className="flex items-center gap-2">
          <span>Lâmpada 2</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={lampadas.lampada2}
            onChange={() => toggleLampada("lampada2")}
          />
        </label>

        <label className="flex items-center gap-2">
          <span>Lâmpada 3</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={lampadas.lampada3}
            onChange={() => toggleLampada("lampada3")}
          />
        </label>
      </div>
    </div>
  );
}

export default IluminacaoPrincipal;
