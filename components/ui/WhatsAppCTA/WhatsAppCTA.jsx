const WhatsAppCTA = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="bg-gradient-to-br from-[#9d670c] to-[#7a5009] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
                            Suporte Personalizado
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ainda tem dúvidas?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Nossa equipe está pronta para te ajudar! Entre em contato pelo WhatsApp e tire todas as suas dúvidas sobre o QV Precifica.
                        </p>
                        
                        <ul className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-white/90">Resposta rápida e personalizada</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-white/90">Tire dúvidas sobre funcionalidades</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-white/90">Ajuda para escolher o melhor plano</span>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/5511999999999?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20QV%20Precifica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatsAppCTA

