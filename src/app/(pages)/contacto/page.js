export const metadata={
    title: "Contacto"
};

let datosContacto = {
    telefono: '5554651563',
    correo: 'palmar@correo.com',
}

function Contacto(){
    return(
        <>
         <div className=" place-content-center mt-10 md:mt-20  p-8  md:w-auto">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Contáctanos</h1>
            <p className="mt-10 text-justify">Si quieres realizar alguna reservación da click en el siguiente elemento, nos pondremos en contacto contigo</p>
        </div>
         <div className="grid gap-3 md:flex space-x-3 md:space-x-5 justify-center  mt-10 md:mt-0">
            <button className="grid border place-content-center cursor-pointer  border-verde-elementos bg-verde-elementos rounded-2xl w-70 h-60 md:w-60 md:h-50 p-5">
                <div className="flex flex-col  text-center">
                    <i className="fa-brands fa-whatsapp text-white text-5xl md:text-4xl"></i>
                </div>
            </button>
            <button className="grid border place-content-center cursor-pointer  border-blue-800 bg-blue-800 rounded-2xl w-70 h-60 md:w-60 md:h-50 p-5">
                <div className="flex flex-col  text-center">
                    <i className="fa-brands fa-facebook text-white text-5xl md:text-4xl"></i>
                </div>
            </button>
        </div>
        
       
        </>
    );
}

export default Contacto;