import NavBar from "@/components/NavBar"
import SouthIcon from '@mui/icons-material/South';
import Footer from "@/components/Footer";

const Instrucciones = () =>{
    return(
        <div className="w-full h-full background">
            <NavBar/>
            <div className="w-full flex flex-col gap-4 mb-10 lg:gap-10 justify-center items-center p-4 text-white">
                <h1 className="font-bold text-3xl">¡Estos son los pasos que debes seguir para obtener tu plan!</h1>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">Inicio</p>
                </div>
                <div>
                    <SouthIcon/>
                </div>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">Selecciona el plan que necesites</p>
                </div>
                <div className="mt-5 ">
                    <SouthIcon/>
                </div>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">Elige la duracion a la que tu plan este diagramado</p>
                </div>
                <div className="mt-5 ">
                    <SouthIcon/>
                </div>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">Rellena el formulario con tus datos</p>
                </div>
                <div className="mt-5 ">
                    <SouthIcon/>
                </div>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">Procede con el pago</p>
                </div>
                <div className="mt-5 ">
                    <SouthIcon/>
                </div>
                <div className="p-10 mt-5 rounded-lg border border-[#a3a3a3] text-center">
                    <p className="font-bold text-xl uppercase">¡Listo! Tu plan te llegara via Whatsapp en un plazo de 5 dias habiles</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Instrucciones