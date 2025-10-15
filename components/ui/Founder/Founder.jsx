import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const Founder = () => {
    return (
        <SectionWrapper className="py-16">
            <div className="custom-screen text-gray-600">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                            Conheça o Fundador
                        </div>
                        <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                            A experiência por trás da solução
                        </h2>
                    </div>
                </LayoutEffect>
                
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Coluna esquerda - Resumo */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Jaci Kons
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                    Fundador do Grupo QV, trabalho há mais de 10 anos ajudando profissionais da saúde a transformarem sua gestão financeira.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                    Durante anos atendendo clínicas de diferentes especialidades, percebi um padrão: profissionais talentosos que não sabiam precificar corretamente. Planilhas complicadas, achismo nos 
preços e lucros abaixo do esperado.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                    Criei o QV Precifica para resolver isso. É a mesma metodologia que aplico pessoalmente nas consultorias — testada, validada e que já ajudou centenas de profissionais a precificar com clareza e aumentar suas margens.
                                    </p>
                                </div>
                                
                                
                            </div>
                            
                            {/* Coluna direita - Foto */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                                        <img 
                                            src="/images/jaci.png" 
                                            alt="Dr. Jaci - Fundador da QV Precifica" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Founder
