import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/hero.svg"
import LayoutEffect from "@/components/LayoutEffect"

const Hero = () => (
    <section className="relative bg-white overflow-hidden">
        <div className="custom-screen py-12 relative z-10">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-4 max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-2">
                            Exclusivo para Médicos, Dentistas e Profissionais da Saúde
                        </div>
                        <h1 className="text-4xl text-gray-900 font-extrabold mx-auto leading-tight sm:text-5xl lg:text-6xl">
                            Aumente seu lucro com precificação baseada em{' '}
                            <span className="text-primary-800 bg-transparent">dados reais</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                            Mapeie custos ocultos, simule margens e defina preços lucrativos em minutos — software completo de precificação para médicos, dentistas e profissionais da saúde
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center font-medium text-base gap-4 pt-4">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center justify-center w-full sm:w-auto text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900 px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Começar Agora
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                            <NavLink
                                href="/#contact"
                                className="flex items-center justify-center w-full sm:w-auto text-primary-800 bg-white border-2 border-primary-800 hover:bg-primary-50 active:bg-primary-100 px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Falar com Vendas
                            </NavLink>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-200 blur-3xl opacity-30 rounded-full"></div>
                            <Image
                                src={HeroImg}
                                className="relative shadow-2xl rounded-2xl max-w-3xl border border-gray-200"
                                alt="QV Precifica - Software de Precificação Estratégica"
                            />
                        </div>
                    </div>
                </div>
            </LayoutEffect>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
)

export default Hero