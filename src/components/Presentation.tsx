const Presentation = () => {
    return (
      <div className="bg-image h-[450px] lg:h-[550px] drop-shadow-xl p-5 w-full flex flex-col items-between justify-between gap-4 text-center">
        <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-xl text-black text-start bg-on lg:text-5xl font-bold uppercase p-1 ps-2 pe-2">
                El exito es la suma
            </h1>
            <h1 className="text-xl text-black text-start bg-on lg:text-5xl font-bold uppercase p-1 ps-2 pe-2">
                de pequeños esfuerzos
            </h1>
            <h1 className="text-xl text-black text-start bg-on lg:text-5xl font-bold uppercase p-1 ps-2 pe-2">
                Repetidos dia tras dia
            </h1>
            
        </div>
        
        <div className="w-full flex items-center justify-end gap-2">
            <p className="font-bold text-[#D9B504]">Empieza tu transformación hoy</p>
            <a href="#planes" className="p-2 bg-on hover:bg-hover text-gris rounded-lg font-bold">Planes</a>
        </div>
        
      </div>
    );
  };
  
  export default Presentation;
  