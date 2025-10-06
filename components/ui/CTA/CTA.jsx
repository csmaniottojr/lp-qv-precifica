import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "@/public/images/bg-pattern.webp"
import LayoutEffect from "@/components/LayoutEffect"

const CTA = () => (
    <section className="bg-gray-50">
        <div className="custom-screen py-28 relative">
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0 translate-y-6"
                }}
            >
                <div className="relative z-10">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
                            Chega de trabalhar de graça sem saber
                        </h2>
                        <p className="mt-5 text-gray-600">
                            Em 90 dias, clientes aumentam margem significativamente sem perder pacientes. É o fim do achismo e o início de decisões baseadas em dados reais.
                        </p>
                    </div>
                    <div className="mt-5 flex justify-center font-medium text-sm">
                        <NavLink
                            href="/#pricing"
                            className="flex items-center text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900 px-6 py-3 rounded-lg"
                        >
                            Começar agora
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </LayoutEffect>
            <div className="absolute inset-0 opacity-5">
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover m-auto"
                    alt="Background pattern"
                />
            </div>
        </div>
    </section>
)

export default CTA