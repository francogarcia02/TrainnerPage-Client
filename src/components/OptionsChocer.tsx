interface Opcion {
    semanas: number;
    price: number;
}

interface Props {
    usedPlan: {
        id: number;
        titulo: string;
        frase: string;
        check: number;
        opciones: Opcion[];
        atencion: {
            dias: string[];
            horario: string;
        };
    },
    optionSelected: number | undefined,
    price: number | undefined,
    handleSelectOption: (arg1: number, arg2: number)=>void,
}

const OptionChoser = ({optionSelected, usedPlan, price, handleSelectOption}: Props) => {
    return(
        <div className="flex flex-col text-white bg-[#151515] p-5 lg:m-5 rounded-lg">
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Duracion del plan</h1>
                    <p>Esta opcion altera el precio final del plan</p>
                </div>
                <div>
                    <div className="flex gap-2 justify-start items-center">
                        <h1 className="font-bold">Opcion seleccionada:</h1>
                        {optionSelected ?
                            <h1 className="font-bold text-title">Opcion {optionSelected}</h1>
                        :
                            <></>
                        }
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <h1 className="font-bold">Precio final: </h1>
                        <h1 className="font-bold text-title">${price}</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start pt-5 gap-4">
                {usedPlan.opciones.map((opcion, index) =>(
                    <div key={index} className={`w-full rounded-lg border p-2 ${optionSelected && optionSelected-1 === index ? 'bg-[#252525]' : ''}`}>
                        <p className="text-xl font-bold">Opcion {index + 1}</p>
                        <div className="p-2">
                            <div className="pb-2">
                                <div className="flex gap-2">
                                    <p>Plan diagramado para</p>
                                    <p className="text-title">{opcion.semanas}</p>
                                    <p>semanas</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 justify-center items-center">
                                    <p className="font-bold">Precio final: </p>
                                    <p className="font-bold text-title">${opcion.price}</p>
                                </div>
                                <button onClick={()=>handleSelectOption(index, opcion.price)} className="p-2 text-gris bg-on hover:bg-hover rounded-lg font-bold">Elegir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionChoser