import React from "react";
import './App.css'
import Logo from "./components/Logo";
import Header from "./components/Header";
import IluminacaoPrincipal from "./components/IluminacaoPrincipal";
import Efeitos from "./components/Efeitos";
import ArCondicionado from "./components/ArCondicionado";
import Cortinas from "./components/Cortinas";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="w-full flex justify-center py-4 px-2 bg-base-100 shadow-md">
        <Logo />
      </div>

      <div className=" py-4">
        <Header />
      </div>
      

      <div className="px-4 mb-8"> 
         <div className="flex flex-row gap-6 flex-wrap">
          <IluminacaoPrincipal />
          <Efeitos />
          <ArCondicionado />
          <Cortinas />
        </div>
      </div>

      <Footer />

    </div>

  );
}

export default App;