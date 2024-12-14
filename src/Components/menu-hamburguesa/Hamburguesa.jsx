import { Link } from "react-router-dom";
import "./hamburguesa.css"
import { dialog } from "framer-motion/client";
export default function Hamburguesa({ variant = "default" }) {
        const designs = {
                default: {
                        content: "menu-Hamburguesa",
                        modal: "panel-menu",
                        modalDesing: "modal-desing-default",
                        hoverTextClass: "hover:text-green-500 hover:bg-[#ffffff20]",
                        colortext: "text-white",
                },
                kids: {

                },
                young: {

                },
                adult: {

                },
        };
        const { content, modal, modalDesing, hoverTextClass } = designs[variant]

        const click = () => {
                const dialog = document.querySelector(".panel-menu")
                if (dialog.open) {
                        dialog.close(); // Cierra el modal si está abierto
                } else {
                        dialog.showModal(); // Abre el modal si está cerrado
                }
        }
        const dynamicPath = (path) =>
                `${path}${variant ? `?variant=${variant}` : ""}`;
        return (
                <>
                        <dialog className={`${modal} ${modalDesing}`}>
                                <nav className={`flex flex-col text-white`}>
                                        <Link
                                                onClick={click}
                                                to={dynamicPath("/")}
                                                className={`outline-none transition-transform duration-500 p-3 ${hoverTextClass} `}
                                        >
                                                Home
                                        </Link>
                                        <Link
                                                onClick={click}
                                                to={dynamicPath("/cursos")}
                                                className={`transition-transform duration-500 p-3 ${hoverTextClass}`}
                                        >
                                                Cursos
                                        </Link>
                                        <Link
                                                onClick={click}
                                                to={dynamicPath("/beca")}
                                                className={`transition-transform duration-500 p-3 ${hoverTextClass}`}
                                        >
                                                Becas
                                        </Link>
                                        <Link
                                                onClick={click}
                                                to={dynamicPath("/planes")}
                                                className={`transition-transform duration-500 p-3 ${hoverTextClass}`}
                                        >
                                                Planes
                                        </Link>
                                </nav>
                        </dialog>

                        <div className={`${content}`} onClick={click}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                        </div>
                </>

        );


} 
