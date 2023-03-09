import EventsComponents from "../components/EventsComponents/EventsComponents";
import RecycleTargetList from "../components/RecycleTargetList/RecycleTargetList";
import TipDayList from "../components/TipDayList/TipDayList";

import TipsTargetList from "../components/TipsTargetLis/TipsTargetList";
import { TbClick } from "react-icons/tb";
import FormInit from "../components/FormInit/FormInit";

import imgheroe from "../../public/mascota.png"


const Home = () => {
    return (
        <>
            <div className="w-full text-center">
                <div className="max-w-screen-lg m-auto">
                    <h2 className="text-7xl font-bold mb-11">¿Qué hacemos <br />y cómo lo <span className="text-green-600">hacemos ?</span></h2>
                    <p className="leading-10 px-10 md:px-0"> <span className="text-green-600 font-bold">RROP</span>  es una organizacion sin animo de lucro que busca generar un cambio en las personas e influir en la sociedad,
                        su comportamiento y en su estilo de vida, a travez de la educacion, el arte y la cultura sobre la importancia del reciclaje
                        y el cuidado del medio ambiente para poder lograr un futuro sostenible.
                    </p>
                </div>


                <section className="">
                    <RecycleTargetList />
                </section>


                <section className="relative" >
                    <h2 className=" mt-40 text-7xl font-bold mb-40 "><span className="text-green-600">El reciclaje </span>todo <br /> lo que debes saber</h2>

                    <div className="container">
                        <TipsTargetList />
                    </div>

                    <div className="w-full h-80 bg-green-600 absolute z-0 bottom-2" ></div>
                </section>


                <section className="mb-40 ">
                    <h2 className="mt-40 text-7xl font-bold mb-40 "><span className="text-green-600">Eventos</span> <br /> más cercanos</h2>
                    <div className="  container relative">
                        <EventsComponents />
                    </div>
                </section>


                <section>
                    <h2 className="mt-40 text-7xl font-bold mb-40"><span className="text-green-600" >Blog</span> <br />últimas entradas</h2>
                    <div className="container">
                        <TipDayList />
                    </div>
                    <button
                        className=" bg-green-600 px-6 py-2 rounded-xl mt-14 text-white flex  items-center gap-4 mx-auto">Más articulos aquí <TbClick className="text-3xl" />
                    </button>
                </section>


                <section className="container grid grid-cols-1 md:grid-cols-2 gap-28 p-20">
                    <div>
                        <h2 className="text-6xl text-left font-bold"> <span className="text-green-600">Iniciativas</span>  ambientales</h2>
                        <p className="text-left">Inscríbete a nuestras iniciativas y recibe en tu correo electrónico nuestros próximos eventos y contenido exclusivo sobre el reciclaje y el medio
                            ambiente.</p>
                        <FormInit />
                    </div>
                    <div className="w-full grid place-items-center">
                        <img width="350" src={imgheroe} alt="" />

                    </div>

                </section>
            </div>
        </>
    )
}

export default Home
