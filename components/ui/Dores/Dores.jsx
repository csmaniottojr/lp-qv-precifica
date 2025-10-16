const Dores = () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
            title: "Agenda cheia, conta bancária vazia",
            desc: "Você trabalha o dia inteiro, a clínica vive movimentada, mas o saldo no fim do mês decepciona. Sem saber exatamente quanto custa cada procedimento, o lucro se dissolve entre atendimentos e despesas invisíveis."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>,
            title: "Custos desconhecidos, decisões no achismo",
            desc: "Você define preços olhando a concorrência ou “pelo que parece justo”. Mas cada procedimento tem um custo diferente — e sem dados, você pode estar pagando pra trabalhar sem perceber."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>,
            title: "Insegurança e conflito sobre valores",
            desc: "Você não tem clareza se seus preços estão corretos e isso gera ansiedade constante. Discussões sobre valores viram fonte de estresse porque ninguém tem números concretos para se basear. O resultado? Incerteza, tensão e decisões baseadas em opinião, não em fatos."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>,
            title: "Finais de semana perdidos com planilhas",
            desc: "Você chega em casa exausto, mas ainda precisa atualizar custos, refazer cálculos e tentar descobrir se os preços estão certos. Horas preciosas que poderiam ser com a família viram maratonas de Excel que nunca terminam. Seu tempo livre vale mais que isso."
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                    <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                    Trabalhar muito e lucrar pouco não é coincidência. É falta de clareza.
                    </h2>
                    <p className="text-lg text-gray-600">
                    Você se dedica, atende dezenas de pacientes, mas no fim do mês o lucro não acompanha o esforço.
                    <strong> A verdade é que o problema não está na quantidade de pacientes — está na forma como você precifica.</strong>
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                                    <div className="w-14 h-14 border-2 border-primary-300 text-primary-800 rounded-xl flex items-center justify-center bg-primary-50 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-gray-900 font-bold mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Dores