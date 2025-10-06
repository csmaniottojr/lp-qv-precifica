import SectionWrapper from "@/components/SectionWrapper"
import user1 from "@/public/testimonial/user1.webp"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Dr. Marcelo Silva",
            title: "Dentista - Clínica Odonto+",
            quote: "Descobri que estava cobrando 30% abaixo do necessário em implantes. Em 2 meses ajustei os preços e aumentei a margem sem perder um único paciente. O simulador mostrou exatamente onde eu estava perdendo dinheiro."
        },
        {
            avatar: user2,
            name: "Dra. Juliana Costa",
            title: "Médica Esteta - Harmonize Clinic",
            quote: "Antes eu precificava copiando a concorrência. Agora sei exatamente quanto vale minha hora clínica e quanto preciso cobrar para ter margem saudável. Clareza financeira total."
        },
        {
            avatar: user3,
            name: "Dr. Ricardo Mendes",
            title: "Ortodontista - Sorriso Perfeito",
            quote: "Economizo 15 horas por mês que gastava com planilhas. Mudou um custo? O sistema recalcula tudo automaticamente. Transformou minha gestão financeira."
        },
        {
            avatar: user4,
            name: "Dra. Fernanda Alves",
            title: "Dermatologista - DermaVida",
            quote: "O ranking de rentabilidade me mostrou que 3 procedimentos estavam dando prejuízo! Ajustei os preços e agora todos os atendimentos são lucrativos. Resultado imediato."
        },
        {
            avatar: user5,
            name: "Dr. Paulo Henrique",
            title: "Fisioterapeuta - Fisio+ Reabilitação",
            quote: "Finalmente entendi quanto custa cada sessão de verdade. Acabaram os conflitos com meu sócio sobre valores. Agora temos dados concretos para tomar decisões."
        },
        {
            avatar: user6,
            name: "Dra. Carolina Rocha",
            title: "Médica - Clínica Integrada",
            quote: "Em 90 dias aumentei minha margem de lucro em 40%. O sistema é tão completo que substitui consultoria de precificação. Melhor investimento que já fiz na clínica."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-600 bg-gray-50">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
                        Profissionais de saúde que transformaram sua precificação
                    </h2>
                </div>
                <div className="mt-12">
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
                                    <li key={idx} className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="text-gray-700">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-900 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5 text-gray-600">{item.title}</span>
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