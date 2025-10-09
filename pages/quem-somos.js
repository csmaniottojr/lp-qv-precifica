import Head from "next/head";
import Image from "next/image";

export default function About() {
    const stats = [
        { label: "Empresas atendidas", value: "500+" },
        { label: "Mensagens enviadas", value: "1M+" },
        { label: "Taxa de recuperação", value: "85%" },
        { label: "Satisfação", value: "98%" }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Transparência",
            description: "Acreditamos em uma comunicação clara e honesta com nossos clientes e seus devedores."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Eficiência",
            description: "Automatizamos processos para que você economize tempo e aumente sua taxa de recuperação."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Respeito",
            description: "Tratamos todos com dignidade, mantendo práticas éticas em todas as cobranças."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Inovação",
            description: "Estamos sempre buscando novas tecnologias para melhorar nossos serviços."
        }
    ];

    const team = [
        {
            name: "Equipe de Desenvolvimento",
            role: "Tecnologia & Inovação",
            description: "Nossa equipe técnica trabalha incansavelmente para criar soluções robustas e escaláveis."
        },
        {
            name: "Equipe de Suporte",
            role: "Atendimento ao Cliente",
            description: "Dedicados a garantir que você tenha a melhor experiência com nossa plataforma."
        },
        {
            name: "Equipe de Produto",
            role: "Estratégia & Design",
            description: "Focados em entender suas necessidades e criar funcionalidades que fazem a diferença."
        }
    ];

    return (
        <>
            <Head>
                <title>Quem Somos - QV Business Solution</title>
                <meta name="description" content="Conheça a QV Business Solution e nossa missão de transformar a gestão de cobranças" />
            </Head>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Quem Somos
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Somos a QV Business Solution, uma empresa dedicada a transformar a forma como empresas gerenciam suas cobranças através da tecnologia e automação.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Nossa Missão
                                </h2>
                                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                                    Nossa missão é simplificar e humanizar o processo de cobrança, proporcionando às empresas ferramentas eficientes que automatizam tarefas repetitivas enquanto mantêm um relacionamento respeitoso com os clientes.
                                </p>
                                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                                    Acreditamos que a tecnologia pode e deve ser usada para criar processos mais justos, transparentes e eficazes, beneficiando tanto empresas quanto consumidores.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Através da nossa plataforma, buscamos reduzir a inadimplência, melhorar o fluxo de caixa das empresas e promover uma cultura de pagamento mais saudável no Brasil.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-[#9d670c] to-[#7a5009] rounded-2xl p-8 text-white shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Nossa Visão</h3>
                                    <p className="text-lg leading-relaxed mb-6">
                                        Ser a plataforma líder em automação de cobranças no Brasil, reconhecida pela excelência, inovação e ética em nossos serviços.
                                    </p>
                                    <div className="border-t border-white/20 pt-6">
                                        <h4 className="font-semibold mb-2">Fundada em 2023</h4>
                                        <p className="text-white/90">
                                            Nascemos com o propósito de revolucionar o mercado de gestão de cobranças.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Nossos Números
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Resultados que demonstram nosso compromisso com a excelência
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-[#9d670c] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Nossos Valores
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Princípios que guiam todas as nossas decisões e ações
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-[#9d670c] mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Nossa Equipe
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Profissionais dedicados a fazer a diferença no seu negócio
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#9d670c] to-[#7a5009] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#9d670c] font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="bg-gradient-to-br from-[#9d670c] to-[#7a5009] rounded-2xl p-8 md:p-12 text-white">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Tecnologia de Ponta
                                </h2>
                                <p className="text-xl leading-relaxed mb-8 text-white/90">
                                    Utilizamos as mais recentes tecnologias em automação, inteligência artificial e integração de sistemas para oferecer uma plataforma robusta, segura e em constante evolução.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                        <h3 className="font-semibold text-lg mb-2">Integração Fácil</h3>
                                        <p className="text-white/80 text-sm">
                                            Conecte-se aos principais ERPs e sistemas de gestão do mercado
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                        <h3 className="font-semibold text-lg mb-2">Segurança Total</h3>
                                        <p className="text-white/80 text-sm">
                                            Criptografia de dados e conformidade com LGPD
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                        <h3 className="font-semibold text-lg mb-2">Disponibilidade 24/7</h3>
                                        <p className="text-white/80 text-sm">
                                            Infraestrutura cloud com alta disponibilidade
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Pronto para Começar?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Junte-se a centenas de empresas que já transformaram sua gestão de cobranças com a QV Business Solution
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="/#precos" 
                                className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                style={{backgroundColor: '#9d670c'}}
                            >
                                Ver Planos e Preços
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a 
                                href="/#duvidas" 
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-[#9d670c] hover:text-[#9d670c] transition-all duration-300"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
                    <a 
                        href="/" 
                        className="inline-flex items-center text-[#9d670c] hover:text-[#7a5009] font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para a página inicial
                    </a>
                </div>
            </div>
        </>
    );
}

