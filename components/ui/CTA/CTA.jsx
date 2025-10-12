import NavLink from "../NavLink"
import LayoutEffect from "@/components/LayoutEffect"

const CTA = () => (
    <section className="relative !bg-[#9d670c]" style={{backgroundColor: '#9d670c'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 !bg-transparent">
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0 translate-y-6"
                }}
            >
                <div className="text-center !bg-transparent">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white mb-6 !bg-transparent">
                        Chega de trabalhar de graça sem saber
                    </h2>
                    <p className="text-xl md:text-2xl !text-white mb-12 max-w-4xl mx-auto leading-relaxed !bg-transparent opacity-90">
                        Em 90 dias, clientes aumentam margem significativamente sem perder pacientes. É o fim do achismo e o início de decisões baseadas em dados reais.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center !bg-transparent">
                        <NavLink
                            href="/#precos"
                            className="group inline-flex items-center justify-center px-8 py-4 !bg-white !text-[#9d670c] font-semibold text-lg rounded-full hover:!bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Começar agora
                            <svg 
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </NavLink>
                        
                        <NavLink
                            href="https://wa.me/554840428384?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20QV%20Precifica"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 !border-white !text-white font-semibold text-lg rounded-full hover:!bg-white hover:!text-[#9d670c] !bg-transparent transition-all duration-300"
                        >
                            Falar com Vendas
                        </NavLink>
                    </div>
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default CTA