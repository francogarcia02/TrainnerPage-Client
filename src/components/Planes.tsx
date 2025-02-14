interface Plan {
    titulo: string,
    frase: string,
    opcion1: {
        checks: number,
        semanas: number,
        price: number
    },
    opcion2: {
        checks: number,
        semanas: number,
        price: number
    },
    opcion3: {
        checks: number,
        semanas: number,
        price: number
    },
    atencion: {
        dias: string[],
        horario: string
    }
}

const Planes = () => {
    const plans: Plan[] = [
        {  
            titulo: 'Basic',
            frase: 'Entrenamiento personalizado para comenzar con seguridad',
            opcion1: {
                checks: 1,
                semanas: 4,
                price: 0
            },
            opcion2: {
                checks: 2,
                semanas: 8,
                price: 0
            },
            opcion3: {
                checks: 4,
                semanas: 12,
                price: 0
            },
            atencion: {
                dias: ['Martes', 'Jueves'],
                horario: '12 a 16 PM'
            }
        },
        {  
            titulo: 'Standard',
            frase: 'Más seguimiento y optimización para tu progreso',
            opcion1: {
                checks: 2,
                semanas: 4,
                price: 0
            },
            opcion2: {
                checks: 4,
                semanas: 8,
                price: 0
            },
            opcion3: {
                checks: 8,
                semanas: 12,
                price: 0
            },
            atencion: {
                dias: ['Lunes','Miercoles','Viernes'],
                horario: '12 a 16 PM'
            }
        },
        {  
            titulo: 'Premium',
            frase: 'Atención exclusiva y seguimiento avanzado',
            opcion1: {
                checks: 4,
                semanas: 4,
                price: 0
            },
            opcion2: {
                checks: 8,
                semanas: 8,
                price: 0
            },
            opcion3: {
                checks: 16,
                semanas: 12,
                price: 0
            },
            atencion: {
                dias: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
                horario: '9 a 22 PM'
            }
        },
    ]
    
    return(
        <div className="p-2 mt-20 flex flex-col gap-4" id="planes">
            <h1 className="text-5xl font-bold text-white">Planes</h1>
            <div className="flex flex-wrap gap-4 p-4">
                {plans && plans.map(plan=>(
                    <div key={plan.titulo} className=" flex flex-col bg-[#151515] w-full p-4 rounded-lg">
                        <h1 className="text-white text-[#D72638] font-bold text-xl">{plan.titulo}</h1>
                        <div className="pb-4">
                            <p className="font-bold text-white">{plan.frase}</p>
                        </div>
                        <div className="flex justify-start items-start text-white gap-1">
                            <p className="font-bold">Dias de atencion: </p> 
                            <div className="flex flex-wrap gap-2 text-[#D72638]">
                                {plan.atencion.dias.map(dia =>(
                                    <p key={dia}>{dia}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-start items-start text-white gap-1">
                            <p className="font-bold">Horario de atencion: </p> 
                            <div className="flex flex-wrap gap-2 text-[#D72638]">
                                {plan.atencion.horario}
                            </div>
                        </div>
                        <div className="flex w-full items-end justify-end">
                            <button className="font-bold text-white bg-[#D72638] rounded-lg p-2">Desde {plan.opcion1.price}$</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planes