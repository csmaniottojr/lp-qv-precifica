import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const Features = () => {

    const featuresList = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>,
            title: "Simulador de precificação",
            desc: "Compare o que você cobra hoje com o que deveria cobrar para a margem desejada. Simule com diferentes margens e formas de repasse para parceiros."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>,
            title: "Cadastro de Custos",
            desc: "Mapeie todos os custos fixos (aluguel, salários, energia) e variáveis (materiais por procedimento). Tudo organizado em um só lugar."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
            title: "Cálculo de Hora Clínica",
            desc: "Sistema calcula automaticamente quanto vale cada minuto do seu trabalho. Considera custos fixos, dias trabalhados e horas disponíveis."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>,
            title: "Configuração de Margens",
            desc: "Defina margem de lucro desejada por procedimento e comissionamento de parceiros. O preço final é calculado automaticamente."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>,
            title: "Cadastro de Procedimentos",
            desc: "Cadastre procedimentos ilimitados. Personalize nomes e estrutura. Flexível para qualquer especialidade médica."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>,
            title: "Importação e exportação de dados",
            desc: "Não tenha retrabalho para usar o simulador. Importe seus dados de outras planilhas/sistemas, ajuste os preços e em seguida exporte para Excel."
        },

    ]

    return (
        <SectionWrapper className="py-16">
            <div id="recursos" className="custom-screen text-gray-600">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-2">
                            Funcionalidades Principais
                        </div>
                        <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                            Tudo que você precisa para precificar corretamente e de forma fácil
                        </h2>
                        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                        Não é um curso, não é uma planilha. É um sistema inteligente que faz todos os cálculos por você, mostrando exatamente onde você está e onde deveria estar.
                        </p>
                    </div>
                </LayoutEffect>
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="relative mt-10">
                        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                featuresList.map((item, idx) => (
                                    <li key={idx} className="group relative space-y-4 p-6 rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl text-primary-800 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg text-gray-900 font-bold relative">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed relative">
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Features