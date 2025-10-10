import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Termos de Uso - QV Business Solution</title>
                <meta name="description" content="Termos de Uso da QV Business Solution" />
            </Head>

            <div className="bg-white">
                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Termos de Uso
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
                            <p className="text-gray-700 mb-4">
                                Bem-vindo à QV Business Solution LTDA ("QV", "nós", "nosso"). Ao acessar ou usar nossa plataforma de automação de cobrança e serviços relacionados (coletivamente, os "Serviços"), você concorda em cumprir e estar vinculado a estes Termos de Uso ("Termos").
                            </p>
                            <p className="text-gray-700 mb-4">
                                Se você não concordar com estes Termos, não utilize nossos Serviços. Ao criar uma conta ou usar nossos Serviços, você declara que leu, entendeu e concorda com estes Termos.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
                            <p className="text-gray-700 mb-4">
                                A QV oferece uma plataforma SaaS (Software as a Service) que permite aos usuários:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Automatizar o processo de cobrança de clientes</li>
                                <li>Enviar mensagens de cobrança via WhatsApp e e-mail</li>
                                <li>Gerenciar cadastros de clientes e pendências financeiras</li>
                                <li>Acompanhar pagamentos e gerar relatórios</li>
                                <li>Integrar com sistemas de gestão e pagamento</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte dos Serviços a qualquer momento, com ou sem aviso prévio.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cadastro e Conta</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Elegibilidade</h3>
                            <p className="text-gray-700 mb-4">
                                Para usar nossos Serviços, você deve ter pelo menos 18 anos e capacidade legal para celebrar contratos vinculativos. Ao criar uma conta, você declara que todas as informações fornecidas são verdadeiras, precisas e completas.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Segurança da Conta</h3>
                            <p className="text-gray-700 mb-4">
                                Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorram em sua conta. Você concorda em:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                                <li>Não compartilhar suas credenciais com terceiros</li>
                                <li>Usar senhas fortes e seguras</li>
                                <li>Fazer logout de sua conta ao final de cada sessão</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Uso Empresarial</h3>
                            <p className="text-gray-700 mb-4">
                                Nossos Serviços são destinados exclusivamente para uso empresarial e profissional. Você declara que está usando os Serviços em nome de uma empresa ou organização.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceitável</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Permissões</h3>
                            <p className="text-gray-700 mb-4">
                                Você concorda em usar os Serviços apenas para finalidades legítimas de cobrança e em conformidade com todas as leis aplicáveis, incluindo, mas não se limitando a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Código de Defesa do Consumidor (CDC)</li>
                                <li>Lei Geral de Proteção de Dados (LGPD)</li>
                                <li>Regulamentações do Banco Central do Brasil</li>
                                <li>Legislação sobre práticas de cobrança</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Proibições</h3>
                            <p className="text-gray-700 mb-4">
                                Você concorda em NÃO usar nossos Serviços para:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Enviar spam, mensagens não solicitadas ou conteúdo abusivo</li>
                                <li>Assediar, ameaçar ou intimidar pessoas</li>
                                <li>Violar direitos de propriedade intelectual</li>
                                <li>Transmitir vírus, malware ou código malicioso</li>
                                <li>Realizar engenharia reversa ou tentar acessar o código-fonte</li>
                                <li>Coletar informações de outros usuários sem consentimento</li>
                                <li>Usar os Serviços para atividades ilegais ou fraudulentas</li>
                                <li>Revender ou redistribuir os Serviços sem autorização expressa</li>
                                <li>Sobrecarregar ou interferir com a infraestrutura dos Serviços</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Conformidade com Boas Práticas de Cobrança</h3>
                            <p className="text-gray-700 mb-4">
                                Você concorda em usar os Serviços de maneira ética e respeitosa, seguindo as melhores práticas de cobrança, incluindo:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Enviar mensagens apenas para dívidas legítimas e comprovadas</li>
                                <li>Respeitar horários apropriados para contato</li>
                                <li>Fornecer opções claras de negociação e pagamento</li>
                                <li>Cessar contato quando solicitado pelo devedor</li>
                                <li>Manter comunicação profissional e respeitosa</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagamentos e Assinaturas</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Planos e Preços</h3>
                            <p className="text-gray-700 mb-4">
                                Nossos Serviços são oferecidos através de diferentes planos de assinatura, conforme descrito em nosso site. Os preços estão sujeitos a alterações mediante aviso prévio de 30 dias.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Faturamento</h3>
                            <p className="text-gray-700 mb-4">
                                As assinaturas são cobradas de forma recorrente (mensal ou anual) até que sejam canceladas. Você autoriza a QV a cobrar sua forma de pagamento registrada nas datas de renovação.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Política de Reembolso</h3>
                            <p className="text-gray-700 mb-4">
                                Oferecemos uma garantia de satisfação de 7 dias para novas assinaturas. Após este período, os pagamentos não são reembolsáveis, exceto quando exigido por lei.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Atraso no Pagamento</h3>
                            <p className="text-gray-700 mb-4">
                                O não pagamento pode resultar na suspensão ou cancelamento de sua conta. Reservamo-nos o direito de cobrar juros e taxas de mora conforme permitido por lei.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Propriedade Intelectual</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Propriedade da QV</h3>
                            <p className="text-gray-700 mb-4">
                                Todos os direitos, títulos e interesses nos Serviços, incluindo software, design, marca, conteúdo e tecnologia, são de propriedade exclusiva da QV e estão protegidos por leis de propriedade intelectual.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Licença Limitada</h3>
                            <p className="text-gray-700 mb-4">
                                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar os Serviços de acordo com estes Termos.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Seus Dados</h3>
                            <p className="text-gray-700 mb-4">
                                Você mantém todos os direitos sobre os dados que carrega em nossa plataforma. Ao usar nossos Serviços, você nos concede uma licença para processar, armazenar e transmitir esses dados conforme necessário para fornecer os Serviços.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacidade e Proteção de Dados</h2>
                            <p className="text-gray-700 mb-4">
                                Sua privacidade é importante para nós. Nossa coleta e uso de informações pessoais são regidos por nossa <Link href="/privacy-policy" className="text-blue-600 hover:underline">Política de Privacidade</Link>, que faz parte integrante destes Termos.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Você é responsável por garantir que tem permissão legal para coletar e processar os dados de seus clientes que você insere em nossa plataforma, em conformidade com a LGPD e outras leis aplicáveis.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Isenção de Garantias</h3>
                            <p className="text-gray-700 mb-4">
                                OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. NÃO GARANTIMOS QUE OS SERVIÇOS SERÃO ININTERRUPTOS, LIVRES DE ERROS OU COMPLETAMENTE SEGUROS.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Limitação de Danos</h3>
                            <p className="text-gray-700 mb-4">
                                NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A QV NÃO SERÁ RESPONSÁVEL POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO A, PERDA DE LUCROS, DADOS, USO, GOODWILL OU OUTRAS PERDAS INTANGÍVEIS.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Valor Máximo</h3>
                            <p className="text-gray-700 mb-4">
                                Nossa responsabilidade total por quaisquer reivindicações relacionadas aos Serviços não excederá o valor pago por você nos 12 meses anteriores à reivindicação.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indenização</h2>
                            <p className="text-gray-700 mb-4">
                                Você concorda em indenizar, defender e isentar a QV, seus diretores, funcionários e parceiros de qualquer reivindicação, dano, perda, responsabilidade e despesa (incluindo honorários advocatícios) decorrentes de:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Seu uso dos Serviços</li>
                                <li>Violação destes Termos</li>
                                <li>Violação de direitos de terceiros</li>
                                <li>Violação de leis ou regulamentos</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cancelamento e Rescisão</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Cancelamento Voluntário</h3>
                            <p className="text-gray-700 mb-4">
                                Você pode cancelar sua assinatura a qualquer momento através das configurações de sua conta. O cancelamento terá efeito no final do período de faturamento atual.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Rescisão pela QV</h3>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de suspender ou encerrar sua conta imediatamente, sem aviso prévio, se:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Você violar estes Termos</li>
                                <li>Seu uso dos Serviços causar danos ou riscos a nós ou a terceiros</li>
                                <li>Deixar de pagar taxas devidas</li>
                                <li>Houver suspeita de fraude ou uso ilegal</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Efeitos da Rescisão</h3>
                            <p className="text-gray-700 mb-4">
                                Após o encerramento da conta, você perderá o acesso aos Serviços e seus dados. Recomendamos que você exporte seus dados antes do cancelamento. Podemos reter certos dados conforme exigido por lei.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificações dos Termos</h2>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre alterações significativas por e-mail ou através de aviso em nossos Serviços. O uso continuado dos Serviços após as alterações constitui sua aceitação dos novos Termos.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Lei Aplicável e Jurisdição</h2>
                            <p className="text-gray-700 mb-4">
                                Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes Termos será resolvida exclusivamente nos tribunais brasileiros competentes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Disposições Gerais</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Acordo Integral</h3>
                            <p className="text-gray-700 mb-4">
                                Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo integral entre você e a QV.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Divisibilidade</h3>
                            <p className="text-gray-700 mb-4">
                                Se qualquer disposição destes Termos for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 Renúncia</h3>
                            <p className="text-gray-700 mb-4">
                                Nossa falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.4 Cessão</h3>
                            <p className="text-gray-700 mb-4">
                                Você não pode ceder ou transferir estes Termos sem nosso consentimento prévio por escrito. Podemos ceder nossos direitos e obrigações sem restrições.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contato</h2>
                            <p className="text-gray-700 mb-4">
                                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>QV Business Solution LTDA</strong></p>
                                <p className="text-gray-700 mb-2">E-mail: <a href="mailto:legal@qvbusiness.com.br" className="text-blue-600 hover:underline">legal@qvbusiness.com.br</a></p>
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

