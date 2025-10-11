import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {

    return (
        <>
            <Head>
                <title>Quem Somos - QV Precificação</title>
                <meta name="description" content="Conheça a QV Precificação e o Grupo QV - especialistas em organizar e planejar as finanças de clínicas e consultórios" />
            </Head>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Quem Somos
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                A QV Precificação é uma das soluções do <span className="font-semibold text-primary-800">Grupo QV</span>, que há anos organiza e planeja as finanças de clínicas e consultórios com foco em aumentar os lucros, realizar sonhos e garantir QV — abreviação de <span className="font-semibold text-primary-800">Qualidade de Vida!</span>
                            </p>
                            <div className="inline-block px-6 py-3 bg-primary-100 text-primary-800 rounded-full text-lg font-semibold">
                                Acreditamos que o profissional da saúde não deve abrir mão da sua Qualidade de Vida!
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Sobre o fundador
                                </h2>
                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                    A QV foi criada por <span className="font-semibold text-primary-800">Jaci Kons</span>, profissional com mais de 10 anos de experiência no mercado financeiro, que já atendeu dezenas de clínicas em todo o Brasil.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Sua expertise e visão estratégica foram fundamentais para desenvolver soluções que realmente atendem às necessidades específicas do setor da saúde.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
                                    <p className="text-lg leading-relaxed mb-6">
                                        O Grupo QV nasceu oferecendo consultoria financeira especializada em clínicas e consultórios e, a partir dessa vivência, desenvolveu soluções únicas para as principais dores do setor.
                                    </p>
                                    <div className="border-t border-white/20 pt-6">
                                        <h4 className="font-semibold mb-2">Experiência Comprovada</h4>
                                        <p className="text-white/90">
                                            Mais de 10 anos transformando a gestão financeira de clínicas e consultórios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                {/* Purpose Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                Nosso Propósito
                                </h2>
                            <p className="text-xl leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto">
                                Facilitar a vida do profissional da saúde, para que ele possa alcançar mais resultados, mais lucro e mais <span className="font-bold text-white">Qualidade de Vida</span>.
                                </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mt-12">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <div className="text-3xl mb-4">📈</div>
                                    <h3 className="font-semibold text-lg mb-2">Mais Resultados</h3>
                                        <p className="text-white/80 text-sm">
                                        Ferramentas que potencializam o crescimento do seu negócio
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <div className="text-3xl mb-4">💰</div>
                                    <h3 className="font-semibold text-lg mb-2">Mais Lucro</h3>
                                        <p className="text-white/80 text-sm">
                                        Precificação estratégica que maximiza sua rentabilidade
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <div className="text-3xl mb-4">🌟</div>
                                    <h3 className="font-semibold text-lg mb-2">Mais QV</h3>
                                        <p className="text-white/80 text-sm">
                                        Tempo livre para focar no que realmente importa
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Conheça Mais Sobre o Grupo QV
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Descubra todas as soluções que desenvolvemos para facilitar a gestão da sua clínica ou consultório
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link 
                                href="/#precos" 
                                className="inline-flex items-center gap-2 px-8 py-4 text-white bg-primary-800 hover:bg-primary-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Ver Planos QV Precifica
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <a 
                                href="https://instagram.com/qvconsultoriafinanceira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-primary-800 hover:text-primary-800 transition-all duration-300"
                            >
                                @qvconsultoriafinanceira
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-primary-800 hover:text-primary-700 font-medium"
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

