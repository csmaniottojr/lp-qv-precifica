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
            className="space-y-3 mt-5 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white hover:border-primary-300 transition-all duration-300"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className={`cursor-pointer p-6 flex items-center justify-between text-lg font-bold transition-all duration-300 ${
                state ? 'text-primary-800' : 'text-gray-900 hover:text-primary-700'
            }`}>
                {faqsList.q}
                <div className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    state ? 'bg-transparent text-primary-800 rotate-180' : 'bg-transparent text-gray-600'
                }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQs = () => {

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
        },
        {
            "q": "Posso exportar meus dados?",
            "a": "Sim! Você pode exportar seus procedimentos e preços em planilha Excel a qualquer momento. Os dados são seus e podem ser usados onde quiser."
          }
    ]
  
    return (
        <section id="duvidas" className="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8 bg-white py-16">
            <div className="space-y-4 text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                    FAQ
                </div>
                <h1 className="text-4xl text-gray-900 font-bold sm:text-5xl">
                    Perguntas Frequentes
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Respondemos as principais dúvidas. Ainda com dúvidas? Entre em contato.
                </p>
            </div>
            <div className="mt-10 max-w-4xl mx-auto space-y-4">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default FAQs