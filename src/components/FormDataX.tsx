interface Pregunta {
    pregunta: string;
    aclaracion?: string;
    type?: boolean;
}

interface Props {
    preguntas: Pregunta[],
    handleChange: (arg1: number, arg2: FileList | string)=>void,
    errores: number[],
    handleSubmit: () => void
}

const FormDataX = ({preguntas, handleChange, errores, handleSubmit}: Props) => {
    return(
        <div className="flex flex-col text-white bg-[#151515] p-5 lg:m-5 rounded-lg">
            <h1 className="text-2xl font-bold">Datos personales</h1>
            <div className="flex flex-col justify-center gap-4 items-start w-full">
                {preguntas.map((pregunta, index) => (
                    <div key={index} className="flex flex-col pb-5 lg:p-10 gap-2 w-full">
                        <div>
                            <div className="flex flex-col lg:flex-row gap-2">
                                <p className="text-xl text-title">{index + 1}</p>
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
            <button onClick={handleSubmit} className="p-2 bg-on hover:bg-hover text-gris rounded-lg font-bold">Proceder</button>
        </div> 
    )
}

export default FormDataX