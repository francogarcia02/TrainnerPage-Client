import Link from "next/link"

const NavBar = () =>{
    return(
        <div className="w-full flex justify-between items-center bg-[#2f2f2f] text-white p-5">
            <Link href={'/'}>Icono</Link>
        </div>
    )
}

export default NavBar