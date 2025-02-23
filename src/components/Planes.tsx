import Link from "next/link"

interface Opcion {
    checks: number,
    semanas: number,
    price: number
}

interface Plan {
    id: number,
    titulo: string,
    frase: string,
    opciones: Opcion[],
    atencion: {
        dias: string[],
        horario: string
    }
}

const Planes = () => {

    const plans: Plan[] = [
        {  
            id:0,
            titulo: 'Basic',
            frase: 'Entrenamiento personalizado para comenzar con seguridad',
            opciones: [
                {
                    checks: 1,
                    semanas: 4,
                    price: 30000
                },
                {
                    checks: 2,
                    semanas: 8,
                    price: 50000
                },
                {
                    checks: 4,
                    semanas: 12,
                    price: 75000
                },
            ],        
            atencion: {
                dias: ['Martes', 'Jueves'],
                horario: '12 a 16 PM'
            }
        },
        {  
            id:1,
            titulo: 'Standard',
            frase: 'Más seguimiento y optimización para tu progreso',
            opciones: [
                {
                    checks: 2,
                    semanas: 4,
                    price: 38000
                },
                {
                    checks: 4,
                    semanas: 8,
                    price: 65000
                },
                {
                    checks: 8,
                    semanas: 12,
                    price: 100000
                },
            ], 
            atencion: {
                dias: ['Lunes','Miercoles','Viernes'],
                horario: '12 a 16 PM'
            }
        },
        {  
            id:2,
            titulo: 'Premium',
            frase: 'Atención exclusiva y seguimiento avanzado',
            opciones: [
                {
                    checks: 4,
                    semanas: 4,
                    price: 50000
                },
                {
                    checks: 8,
                    semanas: 8,
                    price: 90000
                },
                {
                    checks: 12,
                    semanas: 12,
                    price: 135000
                },
            ], 
            atencion: {
                dias: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
                horario: '9 a 22 PM'
            }
        },
        ]
    
    return(
        <div className="p-2 mt-20 flex flex-col gap-4 lg:p-6" id="planes">
            <h1 className="text-5xl font-bold text-white">Planes</h1>
            <div className="flex flex-wrap gap-4 p-4">
                {plans && plans.map(plan=>(
                    <div key={plan.titulo} className=" flex flex-col bg-[#151515] hover:bg-[#252525] w-full p-4 rounded-lg">
                        <h1 className="text-title font-bold text-2xl">{plan.titulo}</h1>
                        <div className="pb-6">
                            <p className="font-bold text-white">{plan.frase}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-start items-start text-white gap-1">
                            <p className="font-bold">Atencion via WhatsApp</p> 
                        </div>
                        <div className="flex justify-start items-start text-white gap-1"> 
                            <div className="flex gap-2 text-title">
                                <p>{plan.opciones[0].checks}</p>
                            </div>
                            <p className="font-bold">checks por semana</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-start items-start text-white gap-1">
                            <p className="font-bold">Dias de atencion: </p> 
                            <div className="flex flex-wrap gap-2 text-title">
                                {plan.atencion.dias.map(dia =>(
                                    <p key={dia}>{dia}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-start items-start text-white gap-1">
                            <p className="font-bold">Horario de atencion: </p> 
                            <div className="flex flex-wrap gap-2 text-title">
                                {plan.atencion.horario}
                            </div>
                        </div>
                        <div className="flex w-full items-end justify-end">
                            <Link href={`Form/${plan.id}`} className="font-bold text-gris bg-title rounded-lg p-2 hover:bg-hover">Desde ${plan.opciones[0].price}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planes