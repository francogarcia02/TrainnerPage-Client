import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

interface Props {
    preferenceID: string;
}

const PaymentWindow = ({ preferenceID }: Props) => {
    initMercadoPago('APP_USR-90d2caac-e318-4b54-b849-378b07cb4f19', {
        locale: 'es-AR'
    });
    
    return (
        preferenceID ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white text-center p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4">Realiza tu pago</h2>
                    <p className="font-bold mb-4">Espera a que aparezca el boton de marcado pago</p>
                    <Wallet initialization={{ preferenceId: preferenceID }} customization={{ texts: { valueProp: 'smart_option' } }} />
                </div>
            </div>
        ) : null
    );
};

export default PaymentWindow;