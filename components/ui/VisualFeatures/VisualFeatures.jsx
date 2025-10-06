import SectionWrapper from "@/components/SectionWrapper"
import Feature1 from "@/public/images/Feature-1.svg"
import Feature2 from "@/public/images/Feature-2.svg"
import Image from "next/image"

const VisualFeatures = () => {

    const features = [
        {
            title: "Simulador Atual vs Ideal",
            desc: "Compare em tempo real o que você cobra hoje com o que deveria cobrar para ter margem saudável. Descubra quanto está perdendo em cada procedimento e simule ajustes antes de mudar na prática.",
            img: Feature1
        },
        {
            title: "Atualização Automática em Cascata",
            desc: "Mudou um custo? O sistema recalcula automaticamente TODOS os procedimentos. Sem trabalho manual, sem planilhas quebradas, sem erros humanos. Economize 10-15 horas por mês.",
            img: Feature2
        },
    ]
    return (
        <SectionWrapper className="bg-white py-16">
            <div className="custom-screen text-gray-600">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-primary-800 text-white rounded-full text-sm font-semibold mb-6">
                        Funcionalidades Principais
                    </div>
                    <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                        Da teoria à prática em minutos
                    </h2>
                    <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                        Não é um curso, não é uma planilha. É um sistema inteligente que faz o trabalho pesado por você, mostrando exatamente onde você está e onde deveria estar.
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="space-y-8 gap-x-8 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border-2 border-primary-200 rounded-3xl bg-white hover:border-primary-400 hover:shadow-2xl transition-all duration-300 overflow-hidden group" key={idx}>
                                    <div className="p-8 bg-gradient-to-br from-white to-primary-50/30">
                                        <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-800">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-gray-900 text-2xl font-bold mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="relative overflow-hidden bg-gradient-to-t from-primary-100/20 to-transparent">
                                        <Image
                                            src={item.img}
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                            alt={item.title}
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures