import Head from "next/head";
import Link from "next/link";

export default function PurchaseConfirmed() {

    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Instruções de Acesso",
            description: "Enviadas para seu e-mail em até 5 minutos"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Acesso Imediato",
            description: "Comece a usar assim que receber as credenciais"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Suporte Dedicado",
            description: "Nossa equipe está pronta para ajudar você"
        }
    ];

    return (
        <>
            <Head>
                <title>Compra Confirmada! - QV Business Solution</title>
                <meta name="description" content="Sua compra foi confirmada com sucesso" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="bg-white min-h-screen">

                {/* Hero Section com Confetti effect */}
                <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                        {/* Success Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 animate-ping bg-green-400 rounded-full opacity-25"></div>
                                <div className="relative bg-green-500 rounded-full p-6 shadow-2xl">
                                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🎉 Parabéns pela Compra!
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Sua assinatura do QV Precifica foi confirmada com sucesso.
                        </p>

                        {/* Benefits Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="text-[#9d670c] mb-4 flex justify-center">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 md:px-8">
                        <div className="bg-gradient-to-br from-[#9d670c] to-[#7a5009] rounded-2xl p-8 md:p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Precisa de Ajuda?
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                Nossa equipe de suporte está pronta para ajudá-lo em cada etapa
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/55484042838?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20QV%20Precifica"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-[#9d670c] hover:text-[#7a5009] font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para a página inicial
                    </Link>
                </div>
            </div>
        </>
    );
}

