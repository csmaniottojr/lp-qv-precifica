import SectionWrapper from "@/components/SectionWrapper"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: "/testimonial/user1.webp",
            name: "Dr. Marcelo Silva",
            title: "Dentista - Clínica Odonto+",
            quote: "Descobri que estava cobrando 30% abaixo do necessário em implantes. Em 2 meses ajustei os preços e aumentei a margem sem perder um único paciente. O simulador mostrou exatamente onde eu estava perdendo dinheiro."
        },
        {
            avatar: "/testimonial/user2.webp",
            name: "Dr. Lucas Martins",
            title: "Ortopedista - OrtoPrime",
            quote: "Antes eu precificava copiando a concorrência. Agora sei exatamente quanto vale minha hora clínica e quanto preciso cobrar para ter margem saudável. Clareza financeira total."
        },
        {
            avatar: "/testimonial/user3.webp",
            name: "Dr. Ricardo Mendes",
            title: "Ortodontista - Sorriso Perfeito",
            quote: "Economizo 15 horas por mês que gastava com planilhas. Mudou um custo? O sistema recalcula tudo automaticamente. Transformou minha gestão financeira."
        },
        {
            avatar: "/testimonial/user4.webp",
            name: "Dr Fernando Paiva",
            title: "Cardiologista - CardioCare",
            quote: "O ranking de rentabilidade me mostrou que 3 procedimentos estavam dando prejuízo! Ajustei os preços e agora todos os atendimentos são lucrativos. Resultado imediato."
        },
        {
            avatar: "/testimonial/user5.webp",
            name: "Dr. Paulo Henrique",
            title: "Fisioterapeuta - Fisio+ Reabilitação",
            quote: "Finalmente entendi quanto custa cada sessão de verdade. Acabaram os conflitos com meu sócio sobre valores. Agora temos dados concretos para tomar decisões."
        },
        {
            avatar: "/testimonial/user6.webp",
            name: "Dr. Marcos Costa",
            title: "Médico-responsável - Clínica Saúde Plena",
            quote: "Fiz vários cursos de precificação, mas nenhum deu o resultado que eu esperava para a minha clínica. O QV Precifica realmente me ajudou a aumentar minha margem de lucro e a tomar decisões estratégicas para o negócio."
        },
    ]

    return (
        <SectionWrapper className="py-16">
            <div id="depoimentos" className="custom-screen text-gray-600">
                <div className="max-w-3xl text-center mx-auto mb-12">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
                        Depoimentos
                    </div>
                    <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                        Profissionais de saúde que transformaram sua precificação
                    </h2>
                    <p className="mt-5 text-lg text-gray-600">
                        Resultados reais de quem já usa o QV Precifica
                    </p>
                </div>
                <div className="mt-10">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="group relative p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-primary-300 hover:shadow-2xl transition-all duration-300">
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="relative pl-8">
                                                <svg className="absolute -top-2 left-0 w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 32 32">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className="text-gray-700 leading-relaxed relative z-10">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4 pt-4 border-t border-gray-100">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-primary-200 rounded-full blur-md opacity-50"></div>
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        width={56}
                                                        height={56}
                                                        className="relative w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="block text-gray-900 font-bold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5 text-primary-700">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial