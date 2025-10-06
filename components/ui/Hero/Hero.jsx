import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/hero.svg"
import LayoutEffect from "@/components/LayoutEffect"

const Hero = () => (
    <section className="bg-white">
        <div className="custom-screen py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl text-gray-900 font-extrabold mx-auto sm:text-6xl">
                            Aumente seu lucro com precificação baseada em dados reais
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-600">
                        Mapeie custos ocultos, simule margens e defina preços lucrativos em minutos — software completo de precificação para médicos, dentistas e profissionais da saúde
                        </p>
                        <div className="flex justify-center font-medium text-sm gap-4">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900 px-6 py-3 rounded-lg"
                            >
                                Começar Agora
                            </NavLink>
                            <NavLink
                                href="/#contact"
                                className="flex items-center text-primary-800 bg-white border-2 border-primary-800 hover:bg-primary-50 active:bg-primary-100 px-6 py-3 rounded-lg"
                            >
                                Falar com Vendas
                            </NavLink>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-28 flex justify-center">
                        <Image
                            src={HeroImg}
                            className="shadow-lg rounded-2xl max-w-3xl"
                            alt="QV Precifica - Software de Precificação Estratégica"
                        />
                    </div>
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero