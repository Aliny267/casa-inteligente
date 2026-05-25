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
      

      <main className="flex-1 px-4 mb-8"> 
         <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          <IluminacaoPrincipal />
          <Efeitos />
          <ArCondicionado />
          <Cortinas />
        </div>
      </main>

      <Footer />

    </div>

  );
}

export default App;
