import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Política de Privacidade - QV Business Solution</title>
                <meta name="description" content="Política de Privacidade da QV Business Solution" />
            </Head>

            <div className="bg-white">
               

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
                            <p className="text-gray-700 mb-4">
                                A QV Business Solution LTDA ("nós", "nosso" ou "QV") está comprometida em proteger a privacidade dos usuários de nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você nos fornece ao utilizar nossa plataforma de automação de cobrança.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Ao utilizar nossos serviços, você concorda com as práticas descritas nesta Política de Privacidade.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informações Fornecidas por Você</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Dados de Cadastro:</strong> Nome, e-mail, telefone, CNPJ/CPF, endereço e outras informações necessárias para criar e gerenciar sua conta.</li>
                                <li><strong>Dados de Clientes:</strong> Informações sobre seus clientes que você insere na plataforma para gerenciamento de cobranças (nome, e-mail, telefone, endereço, dados de faturamento).</li>
                                <li><strong>Dados de Pagamento:</strong> Informações de pagamento processadas por nossos parceiros de processamento de pagamentos seguros.</li>
                                <li><strong>Comunicações:</strong> Informações que você nos fornece quando entra em contato conosco para suporte ou outras solicitações.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Informações Coletadas Automaticamente</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Dados de Uso:</strong> Informações sobre como você utiliza nossa plataforma, incluindo páginas acessadas, recursos utilizados e tempo de uso.</li>
                                <li><strong>Dados do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, endereço IP, navegador e identificadores únicos.</li>
                                <li><strong>Cookies:</strong> Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência. Consulte nossa Política de Cookies para mais informações.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos Suas Informações</h2>
                            <p className="text-gray-700 mb-4">Utilizamos as informações coletadas para:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Fornecer, operar e manter nossos serviços</li>
                                <li>Processar transações e enviar notificações relacionadas</li>
                                <li>Enviar mensagens de cobrança automatizadas em seu nome</li>
                                <li>Melhorar e personalizar sua experiência</li>
                                <li>Fornecer suporte ao cliente</li>
                                <li>Enviar comunicações administrativas e atualizações</li>
                                <li>Detectar, prevenir e resolver problemas técnicos ou de segurança</li>
                                <li>Cumprir obrigações legais</li>
                                <li>Realizar análises e pesquisas para melhorar nossos serviços</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
                            <p className="text-gray-700 mb-4">Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes situações:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Prestadores de Serviços:</strong> Com terceiros que nos auxiliam a operar nossos serviços (processamento de pagamentos, hospedagem, análise de dados, suporte ao cliente).</li>
                                <li><strong>Exigências Legais:</strong> Quando necessário para cumprir obrigações legais, ordem judicial ou solicitação governamental.</li>
                                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade, segurança ou de nossos usuários.</li>
                                <li><strong>Transferência de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas.</li>
                                <li><strong>Com Seu Consentimento:</strong> Com sua permissão explícita para compartilhar suas informações para finalidades específicas.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança de Dados</h2>
                            <p className="text-gray-700 mb-4">
                                Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Criptografia de dados em trânsito e em repouso</li>
                                <li>Controles de acesso e autenticação</li>
                                <li>Monitoramento regular de segurança</li>
                                <li>Treinamento de funcionários sobre proteção de dados</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Embora nos esforcemos para proteger suas informações, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro. Não podemos garantir segurança absoluta.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h2>
                            <p className="text-gray-700 mb-4">
                                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Acesso:</strong> Solicitar acesso às suas informações pessoais</li>
                                <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                                <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
                                <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados para outro fornecedor</li>
                                <li><strong>Revogação de Consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
                                <li><strong>Informação:</strong> Obter informações sobre entidades públicas e privadas com as quais compartilhamos seus dados</li>
                                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em determinadas situações</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <a href="mailto:privacidade@qvbusiness.com.br" className="text-blue-600 hover:underline">privacidade@qvbusiness.com.br</a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retenção de Dados</h2>
                            <p className="text-gray-700 mb-4">
                                Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando suas informações não forem mais necessárias, nós as excluiremos ou anonimizaremos de forma segura.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies e Tecnologias Semelhantes</h2>
                            <p className="text-gray-700 mb-4">
                                Utilizamos cookies e tecnologias semelhantes para:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Manter você conectado</li>
                                <li>Lembrar suas preferências</li>
                                <li>Analisar o desempenho da plataforma</li>
                                <li>Personalizar conteúdo e anúncios</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de nossos serviços.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Links para Sites de Terceiros</h2>
                            <p className="text-gray-700 mb-4">
                                Nossos serviços podem conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que visitar.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Menores de Idade</h2>
                            <p className="text-gray-700 mb-4">
                                Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se tomarmos conhecimento de que coletamos informações de um menor, tomaremos medidas para excluir essas informações.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Alterações nesta Política</h2>
                            <p className="text-gray-700 mb-4">
                                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas publicando a nova política em nosso site e atualizando a data de "Última atualização". Recomendamos que você revise esta política regularmente.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
                            <p className="text-gray-700 mb-4">
                                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>QV Business Solution LTDA</strong></p>
                                <p className="text-gray-700 mb-2">E-mail: <a href="mailto:privacidade@qvbusiness.com.br" className="text-blue-600 hover:underline">privacidade@qvbusiness.com.br</a></p>
                                <p className="text-gray-700">E-mail de Suporte: <a href="mailto:suporte@qvbusiness.com.br" className="text-blue-600 hover:underline">suporte@qvbusiness.com.br</a></p>
                            </div>
                        </section>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link 
                            href="/" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Voltar para a página inicial
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

