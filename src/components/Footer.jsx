function Footer() {
    return (
        <footer>
            <hr className=" border-blue-white-radio opacity-15 sm:mx-auto text-center" />
            <center className="flex flex-col justify-center items-center">
                
                <img src="/codelogo.png" alt="logo" className="w-full h-20 object-contain transform group-hover:scale-105 transition-transform duration-500"/>
                <span className="block text-sm pb-4 text-blue-black text-center dark:text-gray-400">
                    © 2025{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Diego Guerrero
                    </a>
                    . All Rights Reserved.
                </span>
            </center>
        </footer>
    )
}

export default Footer 