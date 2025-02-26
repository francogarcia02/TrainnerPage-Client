import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';

interface Props {
    data: FormData;
    price: number | undefined,
    subject: string | undefined
}

const PaymentWindow = ({ data, price, subject }: Props) => {
    const [preferenceID, setPreferenceID] = useState()
    console.log('payment')
    initMercadoPago('APP_USR-90d2caac-e318-4b54-b849-378b07cb4f19', {
        locale: 'es-AR'
    });

    const createPreference = async (price: number | undefined, title: string | undefined ) => {
        console.log(price, title)
        try {
            fetch('https://trainnerpage-server-production.up.railway.app/create-preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ title: title, price: price}), 
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPreferenceID(data.id)
                return data
            })
        } catch (error) {
            return error
        }
    }

    

    useEffect(()=>{
        const sendMail = async (data:FormData) => {
            try {
                const response = await fetch('https://trainnerpage-server-production.up.railway.app/send-email', {
                    method: 'POST',
                    body: data, // No se agregan headers manualmente
                });
            
                const result = await response.json();
                console.log('result: ', result)
                if(result){
                    await createPreference(price, subject)
                }
            } catch (error) {
                console.error('Error al enviar el correo:', error);
            }
        }

        sendMail(data)
    },[data, price, subject])
    
    return (
        data ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white text-center p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4">Realiza tu pago</h2>
                    <p className="font-bold mb-4">Espera a que aparezca el boton de marcado pago</p>
                    {preferenceID ?
                    <Wallet initialization={{ preferenceId: preferenceID }} customization={{ texts: { valueProp: 'smart_option' } }} />                    
                    :
                    <></>
                    }
                </div>
            </div>
        ) : null
    );
};

export default PaymentWindow;