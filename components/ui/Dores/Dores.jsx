export default () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
            title: "Agenda cheia, conta bancária vazia",
            desc: "Você trabalha 60h por semana, atende dezenas de pacientes, mas no fim do mês sobra pouco. Muito esforço, pouco lucro. A sensação é de estar trabalhando de graça sem saber."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>,
            title: "Não sabe os custos reais",
            desc: "Precifica no achismo ou copiando a concorrência. Não mapeia custos com materiais, tempo, equipe e fixos. Resultado: pode estar no prejuízo sem perceber."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>,
            title: "Insegurança na precificação",
            desc: "Não sabe se está lucrando ou tendo prejuízo em cada procedimento. Conflitos com sócios sobre valores. Medo de perder pacientes ao ajustar preços."
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                    <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                        Reconhece alguma dessas situações?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Se você se identifica com algum desses problemas, está no lugar certo
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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