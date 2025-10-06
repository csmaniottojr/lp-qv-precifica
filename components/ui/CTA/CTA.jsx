import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "@/public/images/bg-pattern.webp"
import LayoutEffect from "@/components/LayoutEffect"

const CTA = () => (
    <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
        <div className="custom-screen py-16 relative z-10">
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0 translate-y-6"
                }}
            >
                <div className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white text-4xl font-bold sm:text-5xl leading-tight">
                            Chega de trabalhar de graça sem saber
                        </h2>
                        <p className="mt-6 text-primary-100 text-lg leading-relaxed">
                            Em 90 dias, clientes aumentam margem significativamente sem perder pacientes. É o fim do achismo e o início de decisões baseadas em dados reais.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <NavLink
                            href="/#pricing"
                            className="flex items-center justify-center w-full sm:w-auto text-primary-900 bg-white hover:bg-primary-50 active:bg-primary-100 px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Começar agora
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </NavLink>
                        <NavLink
                            href="/#contact"
                            className="flex items-center justify-center w-full sm:w-auto text-white bg-transparent border-2 border-white hover:bg-white/10 active:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                        >
                            Falar com Vendas
                        </NavLink>
                    </div>
                </div>
            </LayoutEffect>
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover"
                    alt="Background pattern"
                />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
        </div>
    </section>
)

export default CTA