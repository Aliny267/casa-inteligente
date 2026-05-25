import React from "react";
import { House } from "@phosphor-icons/react";

function Logo() {
  return (
    <div className="flex items-center gap-12 text-primary">
      <House size={32} weight="fill" />
      <h1 className="text-2xl font-bold tracking-wide"> Casa Inteligente</h1>
    </div>
  );
}

export default Logo;

