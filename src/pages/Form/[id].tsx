import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useState } from "react";

interface Opcion {
    checks: number;
    semanas: number;
    price: number;
}

interface Plan {
    id: number;
    titulo: string;
    frase: string;
    opciones: Opcion[];
    atencion: {
        dias: string[];
        horario: string;
    };
}

interface Pregunta {
    pregunta: string;
    aclaracion?: string;
    type?: boolean;
    function: string;
}

const PlanDetail = () => {
    const [opcionSelected, setOpcion] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [respuestas, setRespuestas] = useState<Record<number, string | File[]>>({});
    const [errores, setErrores] = useState<number[]>([])

    const router = useRouter();
    const id = Number(router.query.id);
    
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
    
    const usedPlan: Plan = plans[id];
    
    const preguntas: Pregunta[] = [
        {
            pregunta: 'Ingresa tu peso, altura y edad: ',
            function: ''
        },
        {
            pregunta: 'Ingrese su horario de entrenamiento: ',
            function: ''
        },
        {
            pregunta: 'Ingresa a qué hora te despiertas y a qué hora te acuestas: ',
            function: ''
        },
        {
            pregunta: 'Ingrese las comidas que hace en el dia: ',
            function: ''
        },
        {
            pregunta: ' Si ya sigues una rutina dietética, ingresa lo que comes en cada comida: ',
            aclaracion: '(si no sigues una rutina, di lo que comes, esto es importante)',
            function: ''
        },
        {
            pregunta: 'Ingresa los suplementos que utiliza: ',
            aclaracion: '(En caso de no usar aclararlo igualmente)',
            function: ''
        },
        {
            pregunta: 'Ingresa cuantas veces a la semana realiza entrenamiento de pesas u otra actividad y en que horario',
            function: ''
        },
        {
            pregunta: 'Ingresa cual es el momento del dia en el que reportas mayor hambre: ',
            function: ''
        },
        {
            pregunta: 'Tiene alguna intolerancia alimentaria?',
            aclaracion: '(gluten/lactosa, en caso de no tener aclararlo igualmente)',
            function: ''
        },
        {
            pregunta: 'Ingresar cual es su disponibilidad de Dias/Semana para entrenar: ',
            function: ''
        },
        {
            pregunta: '¿Desde cuándo practicas actividad física regularmente?',
            aclaracion: '(En caso de no entrenar con anterioridad aclararlo igualmente)',
            function: ''
        },
        {
            pregunta: '¿Practicas alguna otra actividad?',
            aclaracion: '(Especificar tiempo y frecuencia)',
            function: ''
        },
        {
            pregunta: '¿Tiene alguna limitación para hacer ejercicio?',
            function: ''
        },
        {
            pregunta: '¿Tiene alguna enfermedad o toma medicación continua?',
            aclaracion: '(anticonceptiva por ejemplo)',
            function: ''
        },
        {
            pregunta: '¿Alguna vez ha usado esteroides anabólicos u otros medicamentos con fines estéticos?',
            aclaracion: '(informe todos los compuestos o medicamentos en uso o todo el historial de uso por favor)',
            function: ''
        },
        {
            pregunta: 'Describa su calidad de sueño: ',
            function: ''
        },
        {
            pregunta: '¿Tiene antecedentes de Diabetes en familiares cercanos?',
            function: ''
        },
        {
            pregunta: '¿Tiene enfermedad del tracto gastrointestinal?',
            function: ''
        },
        {
            pregunta: '¿Cuál es su objetivo con la consultoría?',
            function: ''
        },
        {
            pregunta: 'Fotos: de frente, de espalda y de perfil',
            aclaracion: '(Necesarias para evaluar tu fisico, hombre con ropa interior y mujer con topper y short o bikini)',
            type: true,
            function: ''
        },
        {
            pregunta: 'Ingrese su numero telefonico: ',
            aclaracion: '(El plan sera enviado por WhatsApp, asegurese de no cometer errores)',
            function: ''
        },
    ]

    const handleSelectOption = (index: number, price: number) => {
        setOpcion(index + 1);
        setPrice(price);
    };

    const handleChange = (index: number, value: string | FileList) => {
        setRespuestas(prev => ({
            ...prev,
            [index]: value instanceof FileList ? Array.from(value) : value
        }));
    };

    const handleSubmit = () => {
        const preguntasIncompletas: number[] = [];
    
        preguntas.forEach((_, index) => {
            if (!respuestas[index] || respuestas[index] === '') {
                preguntasIncompletas.push(index);
            }
        });
    
        if (preguntasIncompletas.length > 0) {
            setErrores(preguntasIncompletas)
            alert(`Por favor, completa todas las preguntas antes de enviar. Preguntas incompletas: ${preguntasIncompletas.join(', ')}`);
            return;
        }
    
        if (respuestas[19].length === 0) {
            alert("Por favor, ingresa las imágenes para continuar");
            return;
        }
    
        console.log("Respuestas enviadas:", respuestas);
    };
    

    return (
        <div>
            {usedPlan && 
            <>
            <NavBar/>
            <div className="background flex flex-col p-2 lg:p-10">
                <div className="flex flex-col justify-center items-center p-5">
                    <h1 className="text-white text-2xl lg:text-4xl">Plan seleccionado: {usedPlan.titulo}</h1>
                    <p className="text-white text-xl lg:text-4xl">Rellene los siguientes datos</p>
                </div>
                <div className="flex flex-col text-white bg-[#151515] p-5 lg:m-5 rounded-lg">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Duracion del plan</h1>
                            <p>Esta opcion altera el precio final del plan</p>
                        </div>
                        <div>
                            <div className="flex gap-2 justify-start items-center">
                                <h1 className="font-bold">Opcion seleccionada:</h1>
                                {opcionSelected ?
                                    <h1 className="font-bold text-red-600">Opcion {opcionSelected}</h1>
                                :
                                    <></>
                                }
                            </div>
                            <div className="flex gap-2 justify-start items-center">
                                <h1 className="font-bold">Precio final: </h1>
                                <h1 className="font-bold text-red-600">{price}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start pt-5 gap-4">
                        {usedPlan.opciones.map((opcion, index) =>(
                            <div key={index} className={`w-full rounded-lg border p-2 ${opcionSelected && opcionSelected-1 === index ? 'bg-[#252525]' : ''}`}>
                                <p className="text-xl font-bold">Opcion {index + 1}</p>
                                <div className="p-2">
                                    <div className="pb-2">
                                        <div className="flex gap-2">
                                            <p>Plan pensado para</p>
                                            <p className="text-red-600">{opcion.semanas}</p>
                                            <p>semanas</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-red-600">{opcion.checks}</p>
                                            <p>checks en total</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 justify-center items-center">
                                            <p className="font-bold">Precio final: </p>
                                            <p className="font-bold text-red-600">${opcion.price}</p>
                                        </div>
                                        <button onClick={()=>handleSelectOption(index, opcion.price)} className="p-2 bg-red-500 rounded-lg font-bold">Elegir</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col text-white bg-[#151515] p-5 lg:m-5 rounded-lg">
                    <h1 className="text-2xl font-bold">Datos personales</h1>
                    <div className="flex flex-col justify-center gap-4 items-start w-full">
                        {preguntas.map((pregunta, index) => (
                            <div key={index} className="flex flex-col pb-5 lg:p-10 gap-2 w-full">
                                <div>
                                    <div className="flex flex-col lg:flex-row gap-2">
                                        <p className="text-xl text-[#D72638]">{index + 1}</p>
                                        <p className="text-lg">{pregunta.pregunta}</p>
                                    </div>
                                    <p className="text-[#a5a5a5]">{pregunta.aclaracion}</p>
                                </div>
                                
                                {pregunta.type ? (
                                    <input type="file" multiple onChange={(e) => handleChange(index, e.target.files!)} />
                                ) : (
                                    <input type="text" className={`rounded-lg p-2 text-black ${errores.includes(index) ? 'border-2 border-red-600' : '' }`} placeholder="Rellenar aquí" onChange={(e) => handleChange(index, e.target.value)} />
                                )}   
                            </div>
                        ))}
                    </div>
                    <button onClick={handleSubmit} className="p-2 bg-red-500 rounded-lg font-bold">Ir a Pagar</button>
                </div>                
            </div>
            <Footer/>
            </>
            }
        </div>
    );
};

export default PlanDetail;
