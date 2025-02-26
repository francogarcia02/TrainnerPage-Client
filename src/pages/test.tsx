import Footer from "@/components/Footer";
import FormDataX from "@/components/FormDataX";
import NavBar from "@/components/NavBar";
import OptionChoser from "@/components/OptionsChocer";
import { useState } from "react";
import { FormatText } from "@/utils/FormatText";
import PaymentWindow from "@/components/PaymentWindow";


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
}

const PlanDetail = () => {
    const [opcionSelected, setOpcion] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [respuestas, setRespuestas] = useState<Record<number, string | File[]>>({});
    const [errores, setErrores] = useState<number[]>([])
    const [data, setData] = useState<FormData>()
    const [subject, setSubject] = useState<string>()

    const plans: Plan[] = [
        {  
            id:0,
            titulo: 'Basic',
            frase: 'Entrenamiento personalizado para comenzar con seguridad',
            opciones: [
                {
                    checks: 1,
                    semanas: 4,
                    price: 100
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
    
    const usedPlan: Plan = plans[0];
    
    const preguntas: Pregunta[] = [
        {
            pregunta: 'Ingresa tu nombre y apellido: '
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

    const handleSubmit = async () => {
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

        if(!opcionSelected){
            alert("Por favor, selecciona la duracion del plan para continuar");
            return;
        }
    
        const subject = respuestas[0] + ' | ' + 'Plan: ' + usedPlan.titulo + ' | ' + 'Opcion: ' + opcionSelected
        setSubject(subject)
        const { text, images } = FormatText({ preguntas, respuestas });

        const formData = new FormData();
        text.forEach((str) => {
            formData.append('text', str);  // 'strings[]' es el nombre del campo
        });
        
        images.forEach((image) => {
            formData.append('images', image);
        });

        formData.append('subject', subject)
        setData(formData)
        console.log(formData)
    }

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
                <OptionChoser optionSelected={opcionSelected} usedPlan={usedPlan} price={price} handleSelectOption={handleSelectOption}/>
                <FormDataX preguntas={preguntas} handleChange={handleChange} handleSubmit={handleSubmit} errores={errores}/>              
                {data ?
                <PaymentWindow data={data} price={price} subject={subject}/>
                :
                <></>
                }
            </div>
            <Footer/>
            </>
            }
        </div>
    );
};

export default PlanDetail;
