import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Result{
    payer: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        identification: {
            type: string,
            number: number
        }
    },
    transaction_amount: number,
}

const Success = () =>{
    const [result, setResult] = useState<Result | undefined>()
    const router = useRouter();
    const query = router.query
    const payment_id = query.payment_id;
    const status  = query.status;

    const getData = async (payment_id:string | string[]) => {
        const response = await fetch('https://trainnerpage-server-production.up.railway.app/verify-payment', {
            method: 'POST',
            body: JSON.stringify({payment_id: payment_id}), // No se agregan headers manualmente
        });
        const result = await response.json();
        console.log(result)
        setResult(result)
        
        return result
    }

    const sendMail = async (formData: FormData) => {
        try {
            const response = await fetch('https://trainnerpage-server-production.up.railway.app/send-payment-confirmation', {
                method: 'POST',
                body: formData,
            });
        
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    }
 
    useEffect(() => {
        if (payment_id && status) {
            getData(payment_id)
        }
    }, [payment_id, status]);

    useEffect(()=>{
        if(result && result.payer){
            const subject = '| ' + result.payer.first_name + result.payer.last_name + ' |'
            const text = '| ' + result.transaction_amount + ' |'
            const formData = new FormData
            formData.append('subject', subject)
            formData.append('text', text)
            sendMail(formData)
        }
    },[result])

    return(
        <div>
            <NavBar/>
            <div className="background flex flex-col w-full justify-center items-center p-2 lg:p-10">
                <h1 className="text-white text-2kx font-bold">Pago completado</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Success