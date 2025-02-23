import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Success = () =>{
    const router = useRouter();
    const { payment_id, status } = router.query;

    const getData = async (payment_id:string | string[]) => {
        const response = await fetch('https://trainnerpage-server-production.up.railway.app/send-email/verify-payment', {
            method: 'POST',
            body: JSON.stringify({payment_id: payment_id}), // No se agregan headers manualmente
        });
        const result = await response.json();
        console.log(result)
    }

    useEffect(() => {
        if (payment_id && status) {
            getData(payment_id)
        }
    }, [payment_id, status]);

    return(
        <div>
            <NavBar/>
            <div className="background flex flex-col p-2 lg:p-10">
                <h1>Pago completado</h1>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Success