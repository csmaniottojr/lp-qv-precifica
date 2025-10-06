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
        <SectionWrapper>
            <div className="custom-screen text-gray-600 bg-white">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
                        Da teoria à prática em minutos
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Não é um curso, não é uma planilha. É um sistema inteligente que faz o trabalho pesado por você, mostrando exatamente onde você está e onde deveria estar.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300" key={idx}>
                                    <div className="p-8">
                                        <h3 className="text-gray-900 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 sm:text-sm md:text-base text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pl-8">
                                        <Image
                                            src={item.img}
                                            className="w-full ml-auto"
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