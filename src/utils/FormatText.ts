interface Pregunta {
    pregunta: string;
    aclaracion?: string;
    type?: boolean;
}

interface Props {
    respuestas: Record<number, string | File[]>
    preguntas: Pregunta[]
}

export const FormatText = ({preguntas, respuestas}: Props) => {
    const textLines: string[] = []
    let images: File[] = []

    preguntas.forEach((item, index) => {
        const respuestaLocal = respuestas[index]
        if (typeof respuestaLocal === "string") {
            textLines.push(item.pregunta)
            textLines.push(respuestaLocal)
        }
        else {
            images = respuestaLocal
        }
    })

    return { text: textLines, images }
}
