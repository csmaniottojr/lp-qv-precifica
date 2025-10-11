import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Política de Privacidade - QV Precifica</title>
                <meta name="description" content="Política de Privacidade do QV Precifica" />
            </Head>

            <div className="bg-white">
                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Política de Privacidade - QV Precifica
                    </h1>
                    <div className="text-gray-600 mb-8 space-y-1">
                        <p><strong>Data de Vigência:</strong> 10 de outubro de 2025</p>
                        <p><strong>Última Atualização:</strong> 10 de outubro de 2025</p>
                        <p className="mt-4"><strong>Controlador de Dados:</strong></p>
                        <p>QV Business Solution LTDA</p>
                        <p>CNPJ: 60.835.560/0001-98</p>
                        <p>Endereço: Santa Catarina, Brasil</p>
                        <p>Site: <a href="https://precifica-app.qvsolucoes.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://precifica-app.qvsolucoes.com.br/</a></p>
                        <p className="mt-2"><strong>Encarregado de Dados (DPO):</strong></p>
                        <p>E-mail: <a href="mailto:contato@qvsolucoes.com.br" className="text-blue-600 hover:underline">contato@qvsolucoes.com.br</a></p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {/* Sumário */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SUMÁRIO</h2>
                            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                                <li>Introdução e Compromisso com a Privacidade</li>
                                <li>Definições Importantes</li>
                                <li>Dados Coletados e Tratados</li>
                                <li>Finalidade do Tratamento de Dados</li>
                                <li>Base Legal para o Tratamento</li>
                                <li>Compartilhamento de Dados</li>
                                <li>Serviços de Terceiros (Operadores)</li>
                                <li>Cookies e Tecnologias de Rastreamento</li>
                                <li>Segurança dos Dados</li>
                                <li>Retenção de Dados</li>
                                <li>Transferência Internacional de Dados</li>
                                <li>Direitos dos Titulares de Dados</li>
                                <li>Dados de Menores de Idade</li>
                                <li>Alterações nesta Política</li>
                                <li>Contato e Canais de Comunicação</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. INTRODUÇÃO E COMPROMISSO COM A PRIVACIDADE</h2>
                            <p className="text-gray-700 mb-4">
                                A QV Business Solution está comprometida com a proteção da privacidade e dos dados pessoais de todos os usuários do QV Precifica. Esta Política de Privacidade explica de forma clara e transparente como coletamos, usamos, armazenamos, compartilhamos e protegemos seus dados pessoais.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Operamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e outras legislações aplicáveis de proteção de dados no Brasil.
                            </p>
                            <p className="text-gray-700 mb-4"><strong>Princípios que nos guiam:</strong></p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Transparência: você sempre saberá quais dados coletamos e por quê</li>
                                <li>Minimização: coletamos apenas dados necessários para o serviço</li>
                                <li>Segurança: implementamos medidas robustas de proteção</li>
                                <li>Finalidade: usamos dados apenas para os propósitos informados</li>
                                <li>Respeito aos seus direitos: facilitamos o exercício dos seus direitos</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. DEFINIÇÕES IMPORTANTES</h2>
                            <p className="text-gray-700 mb-4">Para facilitar o entendimento desta política:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural identificada ou identificável</li>
                                <li><strong>Titular:</strong> você, pessoa natural a quem os dados pessoais se referem</li>
                                <li><strong>Controlador:</strong> QV Business Solution, que toma decisões sobre o tratamento de dados</li>
                                <li><strong>Operador:</strong> empresas terceiras que tratam dados em nosso nome (ex: Google, Meta)</li>
                                <li><strong>Tratamento:</strong> toda operação com dados (coleta, armazenamento, uso, compartilhamento, exclusão)</li>
                                <li><strong>Consentimento:</strong> autorização expressa e específica do titular para tratamento de dados</li>
                                <li><strong>LGPD:</strong> Lei Geral de Proteção de Dados (Lei 13.709/2018)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. DADOS COLETADOS E TRATADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Coletamos e tratamos as seguintes categorias de dados pessoais:
                            </p>

                            <div className="overflow-x-auto mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">TABELA DE DADOS COLETADOS</h3>
                                <div className="text-sm text-gray-700 space-y-4 border border-gray-200 p-4 rounded">
                                    <div className="border-b pb-3">
                                        <p className="font-semibold">Identificação</p>
                                        <p><strong>Dados:</strong> Nome completo, e-mail, CPF/CNPJ, telefone (opcional)</p>
                                        <p><strong>Finalidade:</strong> Criar e gerenciar conta, autenticação, comunicação, emissão de notas fiscais</p>
                                        <p><strong>Base Legal:</strong> Execução de contrato</p>
                                        <p><strong>Retenção:</strong> Até 12 meses após cancelamento</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-semibold">Dados Profissionais</p>
                                        <p><strong>Dados:</strong> Especialidade médica, CRM/CRO, tipo de estabelecimento</p>
                                        <p><strong>Finalidade:</strong> Personalizar experiência, gerar relatórios relevantes</p>
                                        <p><strong>Base Legal:</strong> Execução de contrato</p>
                                        <p><strong>Retenção:</strong> Até 12 meses após cancelamento</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-semibold">Dados de Pagamento</p>
                                        <p><strong>Dados:</strong> Número do cartão (últimos 4 dígitos), histórico de transações</p>
                                        <p><strong>Finalidade:</strong> Processar pagamentos, prevenir fraudes, emitir notas fiscais</p>
                                        <p><strong>Base Legal:</strong> Execução de contrato e obrigação legal</p>
                                        <p><strong>Retenção:</strong> Faturas: 5 anos; Dados de cartão: armazenados pelo Asaas</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-semibold">Dados de Uso da Plataforma</p>
                                        <p><strong>Dados:</strong> IP, navegador, páginas visitadas, horários, logs de sistema</p>
                                        <p><strong>Finalidade:</strong> Melhorar funcionalidades, detectar problemas, prevenir fraudes</p>
                                        <p><strong>Base Legal:</strong> Interesse legítimo</p>
                                        <p><strong>Retenção:</strong> 90 dias (logs técnicos); 7 dias (logs de acesso)</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-semibold">Dados de Precificação</p>
                                        <p><strong>Dados:</strong> Procedimentos, custos, insumos, despesas, margens</p>
                                        <p><strong>Finalidade:</strong> Calcular precificações, gerar relatórios, fornecer serviço</p>
                                        <p><strong>Base Legal:</strong> Execução de contrato</p>
                                        <p><strong>Retenção:</strong> Até 12 meses após cancelamento</p>
                                        <p><strong>Importante:</strong> Dados 100% isolados por conta</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. FINALIDADE DO TRATAMENTO DE DADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Tratamos seus dados pessoais para as seguintes finalidades específicas:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Prestação do Serviço</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Criar e gerenciar sua conta de usuário</li>
                                <li>Autenticar seu acesso através de links únicos por e-mail</li>
                                <li>Processar cálculos de precificação</li>
                                <li>Armazenar informações sobre procedimentos, custos e insumos</li>
                                <li>Gerar relatórios e análises personalizadas</li>
                                <li>Fornecer suporte técnico e atendimento</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Cobrança e Faturamento</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Processar pagamentos através do Asaas</li>
                                <li>Emitir notas fiscais e recibos</li>
                                <li>Gerenciar assinaturas e renovações</li>
                                <li>Cumprir obrigações fiscais e contábeis</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Segurança e Prevenção de Fraudes</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Monitorar atividades suspeitas</li>
                                <li>Prevenir acessos não autorizados</li>
                                <li>Detectar e bloquear tentativas de fraude</li>
                                <li>Manter logs de auditoria para segurança</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Marketing e Publicidade (com consentimento)</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Medir eficácia de campanhas publicitárias</li>
                                <li>Entender como usuários encontram nossa plataforma</li>
                                <li>Otimizar investimentos em marketing digital</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. BASE LEGAL PARA O TRATAMENTO</h2>
                            <p className="text-gray-700 mb-4">
                                Tratamos seus dados pessoais com base nas seguintes hipóteses legais previstas na LGPD:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Execução de Contrato (Art. 7º, V da LGPD)</h3>
                            <p className="text-gray-700 mb-4">
                                Utilizamos para dados necessários à prestação do serviço: criar conta, processar pagamentos, armazenar dados de precificação, enviar links de autenticação.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Interesse Legítimo (Art. 7º, IX da LGPD)</h3>
                            <p className="text-gray-700 mb-4">
                                Utilizamos para: coletar logs de acesso para segurança, analisar uso para melhorias, prevenir fraudes, manter backups, cookies técnicos essenciais.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Consentimento (Art. 7º, I da LGPD)</h3>
                            <p className="text-gray-700 mb-4">
                                Solicitamos consentimento para: cookies de marketing e análise (Google Ads, Meta Ads, Analytics), rastreamento de campanhas publicitárias.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Você pode revogar seu consentimento a qualquer momento através de: contato@qvsolucoes.com.br
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Obrigação Legal (Art. 7º, II da LGPD)</h3>
                            <p className="text-gray-700 mb-4">
                                Tratamos dados quando exigido por lei: manter registros fiscais por 5 anos, fornecer dados à Receita Federal, atender ordens judiciais.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. COMPARTILHAMENTO DE DADOS</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Isolamento de Dados entre Usuários</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Importante:</strong> Os dados que você insere no QV Precifica (procedimentos, custos, insumos, margens) são 100% isolados. Nenhum outro usuário da plataforma tem acesso às suas informações.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Compartilhamento com Terceiros (Operadores)</h3>
                            <div className="bg-gray-50 p-4 rounded mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Asaas Gestão Financeira</p>
                                <p className="text-gray-700 text-sm">Processamento de pagamentos</p>
                                <p className="text-gray-700 text-sm">Dados: nome, e-mail, CPF/CNPJ, dados de cartão</p>
                                <p className="text-gray-700 text-sm">Localização: Brasil</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Google LLC</p>
                                <p className="text-gray-700 text-sm">Analytics e Publicidade</p>
                                <p className="text-gray-700 text-sm">Dados: IP (anonimizado), comportamento de navegação</p>
                                <p className="text-gray-700 text-sm">Localização: EUA</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Meta Platforms Inc.</p>
                                <p className="text-gray-700 text-sm">Publicidade Facebook/Instagram</p>
                                <p className="text-gray-700 text-sm">Dados: pixels de rastreamento, eventos de conversão</p>
                                <p className="text-gray-700 text-sm">Localização: EUA</p>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Não Vendemos Dados</h3>
                            <p className="text-gray-700 mb-4">
                                Nunca vendemos, alugamos ou comercializamos seus dados pessoais para terceiros.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. COOKIES E TECNOLOGIAS DE RASTREAMENTO</h2>
                            <p className="text-gray-700 mb-4">
                                Utilizamos cookies e tecnologias similares para melhorar sua experiência.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tipos de Cookies</h3>
                            <div className="space-y-3">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-semibold text-gray-800">Cookies Essenciais</p>
                                    <p className="text-gray-700 text-sm">Necessários para funcionamento da plataforma (autenticação, preferências)</p>
                                    <p className="text-gray-700 text-sm">Duração: 30 dias | Não podem ser rejeitados</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <p className="font-semibold text-gray-800">Cookies Analíticos</p>
                                    <p className="text-gray-700 text-sm">Google Analytics - medir uso do site</p>
                                    <p className="text-gray-700 text-sm">Duração: 26 meses | Podem ser rejeitados</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <p className="font-semibold text-gray-800">Cookies de Marketing</p>
                                    <p className="text-gray-700 text-sm">Meta/Facebook, Google Ads - rastrear conversões</p>
                                    <p className="text-gray-700 text-sm">Duração: 90 dias | Podem ser rejeitados</p>
                                </div>
                            </div>

                            <p className="text-gray-700 mt-4">
                                Você pode gerenciar cookies através do banner exibido no primeiro acesso ou nas configurações do seu navegador.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. SEGURANÇA DOS DADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Implementamos medidas técnicas e organizacionais robustas:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Medidas Técnicas</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Criptografia TLS 1.3 para dados em trânsito (HTTPS)</li>
                                <li>Criptografia AES-256 para dados em repouso</li>
                                <li>Autenticação via magic link (sem senhas fracas)</li>
                                <li>Firewalls e proteção contra DDoS</li>
                                <li>Isolamento de dados entre contas</li>
                                <li>Monitoramento 24/7 de atividades suspeitas</li>
                                <li>Backups automáticos diários</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Medidas Organizacionais</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Política de Segurança da Informação documentada</li>
                                <li>Treinamento sobre LGPD para toda equipe</li>
                                <li>Acordos de confidencialidade com funcionários</li>
                                <li>Acesso restrito apenas quando necessário</li>
                                <li>Resposta a incidentes em até 48 horas</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. RETENÇÃO DE DADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Mantemos seus dados apenas pelo tempo necessário:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Dados de cadastro:</strong> até 12 meses após cancelamento</li>
                                <li><strong>Dados de pagamento:</strong> 5 anos (obrigação fiscal)</li>
                                <li><strong>Dados de precificação:</strong> até 12 meses após cancelamento</li>
                                <li><strong>Logs de acesso:</strong> 7 dias</li>
                                <li><strong>Logs técnicos:</strong> 90 dias</li>
                                <li><strong>Mensagens de suporte:</strong> 24 meses após resolução</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Alguns operadores estão localizados fora do Brasil (Google, Meta, Microsoft - EUA). Utilizamos Cláusulas Contratuais Padrão (SCC) aprovadas para garantir proteção adequada.
                            </p>
                            <p className="text-gray-700 mb-4">
                                O Asaas (processamento de pagamentos) mantém todos os dados no Brasil.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. DIREITOS DOS TITULARES DE DADOS</h2>
                            <p className="text-gray-700 mb-4">
                                Conforme a LGPD, você possui os seguintes direitos:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Confirmação e Acesso</p>
                                    <p className="text-gray-700 text-sm">Confirmar se tratamos seus dados e solicitar acesso a eles</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: contato@qvsolucoes.com.br</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Correção</p>
                                    <p className="text-gray-700 text-sm">Corrigir dados incompletos, inexatos ou desatualizados</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: Diretamente no perfil ou via e-mail</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Eliminação</p>
                                    <p className="text-gray-700 text-sm">Solicitar eliminação de dados desnecessários ou excessivos</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: contato@qvsolucoes.com.br</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Portabilidade</p>
                                    <p className="text-gray-700 text-sm">Solicitar seus dados em formato estruturado (CSV, JSON)</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: contato@qvsolucoes.com.br</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Revogação de Consentimento</p>
                                    <p className="text-gray-700 text-sm">Revogar consentimento para cookies e marketing</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: Banner de cookies ou e-mail</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-gray-800">Oposição</p>
                                    <p className="text-gray-700 text-sm">Opor-se ao tratamento baseado em interesse legítimo</p>
                                    <p className="text-gray-700 text-sm mt-1">Como exercer: contato@qvsolucoes.com.br</p>
                                </div>
                            </div>

                            <p className="text-gray-700 mt-4">
                                <strong>Prazo de resposta:</strong> até 15 dias corridos (prorrogável por mais 15 dias)
                            </p>
                            <p className="text-gray-700 mt-2">
                                <strong>Gratuidade:</strong> O exercício de todos os direitos é gratuito
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. DADOS DE MENORES DE IDADE</h2>
                            <p className="text-gray-700 mb-4">
                                O QV Precifica é destinado exclusivamente a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de menores.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Se tomarmos conhecimento de coleta de dados de menores, excluiremos imediatamente todos os dados e bloquearemos a conta.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. ALTERAÇÕES NESTA POLÍTICA</h2>
                            <p className="text-gray-700 mb-4">
                                Podemos atualizar esta Política periodicamente. Quando realizarmos alterações materiais:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Notificaremos você por e-mail com pelo menos 30 dias de antecedência</li>
                                <li>Atualizaremos a data de "Última Atualização"</li>
                                <li>Solicitaremos novo consentimento quando necessário</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                O uso continuado após as alterações constitui aceitação. Se não concordar, pode encerrar sua conta.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. CONTATO E CANAIS DE COMUNICAÇÃO</h2>
                            <p className="text-gray-700 mb-4">
                                Para questões relacionadas à privacidade e proteção de dados:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>QV Business Solution LTDA</strong></p>
                                <p className="text-gray-700 mb-2">CNPJ: 60.835.560/0001-98</p>
                                <p className="text-gray-700 mb-2"><strong>Encarregado de Dados (DPO):</strong></p>
                                <p className="text-gray-700 mb-2">E-mail: <a href="mailto:contato@qvsolucoes.com.br" className="text-blue-600 hover:underline">contato@qvsolucoes.com.br</a></p>
                                <p className="text-gray-700 mb-4">Site: <a href="https://precifica-app.qvsolucoes.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://precifica-app.qvsolucoes.com.br/</a></p>
                                <p className="text-gray-700"><strong>Horário de atendimento:</strong></p>
                                <p className="text-gray-700">Segunda a sexta-feira: 08:00-12:00 e 13:30-18:00 (horário de Brasília)</p>
                            </div>
                            <p className="text-gray-700 mt-4">
                                <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong><br />
                                Para reclamações: <a href="https://www.gov.br/anpd/pt-br" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.gov.br/anpd/pt-br</a>
                            </p>
                        </section>

                        <div className="mt-8 pt-6 border-t border-gray-200 bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">DECLARAÇÃO FINAL</h3>
                            <p className="text-gray-700 mb-4">
                                Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), o Marco Civil da Internet (Lei 12.965/2014) e demais legislações aplicáveis.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Ao utilizar o QV Precifica, você confirma ter lido, compreendido e concordado com todos os termos desta Política de Privacidade.
                            </p>
                            <p className="text-gray-700">
                                <strong>Comprometimento da QV Business Solution:</strong> Comprometemo-nos a tratar seus dados pessoais com o máximo cuidado, transparência e respeito. A proteção da sua privacidade é fundamental para nossa operação e para a relação de confiança que buscamos construir com cada usuário.
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-gray-600 text-center">
                                <strong>Data de Vigência:</strong> 10 de outubro de 2025
                            </p>
                            <p className="text-gray-600 text-center mt-2">
                                <strong>Última Atualização:</strong> 10 de outubro de 2025
                            </p>
                            <p className="text-gray-600 text-center mt-4">
                                <strong>QV Business Solution LTDA</strong><br />
                                CNPJ: 60.835.560/0001-98<br />
                                E-mail: <a href="mailto:contato@qvsolucoes.com.br" className="text-blue-600 hover:underline">contato@qvsolucoes.com.br</a>
                            </p>
                        </div>
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
