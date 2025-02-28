import Image from 'next/image';
import Link from "next/link"

const NavBar = () =>{
    return(
        <div className="w-full flex justify-between items-center bg-[#2f2f2f] text-white ps-2">
            <Link href={'/'}>
            <Image
                src="/photos/logo1.png" // Ruta de la imagen (puede ser local o externa)
                alt="Descripción de la imagen"
                width={70}  // Ancho de la imagen
                height={100} // Alto de la imagen
                quality={100} 
            />
            </Link>
            <Link className="font-bold hover:text-title transition-all duration-100 p-2 pe-5"  href={'/instrucciones'}>Instrucciones</Link>
        </div>
    )
}

export default NavBar