import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b border-gray-200"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-900 font-medium hover:text-primary-800 transition-colors duration-200">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-600">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Como o QV Precifica é diferente de usar planilhas?",
            a: "Planilhas precisam de atualização manual e quebram facilmente. No QV Precifica, quando você muda um custo, o sistema recalcula TODOS os procedimentos automaticamente em cascata. Economize 10-15 horas por mês que gastaria atualizando planilhas."
        },
        {
            q: "Funciona para minha especialidade?",
            a: "Sim! O sistema é flexível e funciona para qualquer área da saúde: dentistas, médicos de todas especialidades, harmonização facial, fisioterapia, nutrição, psicologia. Você cadastra seus procedimentos específicos e personaliza conforme sua realidade."
        },
        {
            q: "Preciso ter conhecimento técnico de precificação?",
            a: "Não! O sistema faz os cálculos complexos por você. Você só precisa cadastrar seus custos (que você já conhece) e o sistema calcula automaticamente hora clínica, margens e preços ideais. No plano Ouro, ainda tem onboarding personalizado para te guiar."
        },
        {
            q: "Quanto tempo levo para ter os primeiros resultados?",
            a: "Nas primeiras horas você já descobre o valor real da hora clínica e identifica procedimentos com preço errado. Em 30 dias você tem clareza financeira total e preços ajustados. Em 90 dias, clientes reportam aumento significativo de margem."
        },
        {
            q: "E se eu mudar um custo, preciso refazer tudo?",
            a: "Não! Essa é a grande vantagem. Mudou aluguel, salário ou custo de material? O sistema recalcula automaticamente TODOS os procedimentos. É a atualização em cascata que economiza horas de trabalho manual."
        },
        {
            q: "O que é o Simulador Atual vs Ideal?",
            a: "É a funcionalidade estrela. Você vê lado a lado: quanto você cobra hoje vs quanto deveria cobrar para ter a margem desejada. Mostra exatamente quanto você está perdendo em cada procedimento e permite simular ajustes antes de implementar."
        },
        {
            q: "Qual plano escolher?",
            a: "Prata: se você quer as funcionalidades completas e prefere configurar sozinho. Ouro (mais popular): se quer onboarding personalizado e suporte para implementar mais rápido. Diamante: para redes com múltiplas unidades que precisam de diagnóstico financeiro completo."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white py-16">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-900 font-semibold">
                    Perguntas Frequentes
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Respondemos as principais dúvidas. Ainda com dúvidas? Entre em contato.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}