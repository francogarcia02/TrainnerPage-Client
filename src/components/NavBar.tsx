import Link from "next/link"

const NavBar = () =>{
    return(
        <div className="w-full flex justify-between items-center bg-[#2f2f2f] text-white p-5">
            <Link href={'/'}>Icono</Link>
            <Link className="font-bold hover:text-title transition-all duration-100"  href={'/instrucciones'}>Instrucciones</Link>
        </div>
    )
}

export default NavBar