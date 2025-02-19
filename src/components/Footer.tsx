import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return(
        <div className="w-full bg-[#252525] text-white">
            <div className="w-full flex p-10 lg:p-20 justify-center lg:justify-start items-center gap-2">
                <p className='font-bold uppercase'>Mas informacion en</p>
                <a href='' className='hover:text-[#D72638] transition-all duration-100'>
                    <InstagramIcon fontSize='large'/>
                </a>
            </div>
        </div>
    )
}

export default Footer