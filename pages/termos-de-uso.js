import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Termos de Uso - QV Precifica</title>
                <meta name="description" content="Termos de Uso do QV Precifica" />
            </Head>

            <div className="bg-white">
                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Termos de Uso - QV Precifica
                    </h1>
                    <div className="text-gray-600 mb-8 space-y-1">
                        <p><strong>Data de Vigência:</strong> 10 de outubro de 2025</p>
                        <p><strong>Última Atualização:</strong> 10 de outubro de 2025</p>
                        <p className="mt-4"><strong>Empresa:</strong> QV Business Solution LTDA</p>
                        <p><strong>CNPJ:</strong> 60.835.560/0001-98</p>
                        <p><strong>Endereço:</strong> Santa Catarina, Brasil</p>
                        <p><strong>Site:</strong> <a href="https://precifica-app.qvsolucoes.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://precifica-app.qvsolucoes.com.br/</a></p>
                        <p><strong>Contato:</strong> <a href="mailto:contato@qvsolucoes.com.br" className="text-blue-600 hover:underline">contato@qvsolucoes.com.br</a></p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {/* Sumário */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SUMÁRIO</h2>
                            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                                <li>Aceitação dos Termos</li>
                                <li>Descrição do Serviço</li>
                                <li>Criação e Gerenciamento de Conta</li>
                                <li>Planos e Pagamento</li>
                                <li>Período de Teste e Reembolso</li>
                                <li>Uso Aceitável da Plataforma</li>
                                <li>Conteúdo Proibido</li>
                                <li>Propriedade Intelectual</li>
                                <li>Licença de Uso</li>
                                <li>Limitações de Uso</li>
                                <li>Disponibilidade do Serviço (SLA)</li>
                                <li>Suporte ao Cliente</li>
                                <li>Suspensão e Encerramento de Conta</li>
                                <li>Cancelamento e Renovação</li>
                                <li>Isenção de Responsabilidade</li>
                                <li>Limitação de Responsabilidade</li>
                                <li>Força Maior</li>
                                <li>Alterações no Serviço e nos Termos</li>
                                <li>Links e Serviços de Terceiros</li>
                                <li>Lei Aplicável e Foro</li>
                                <li>Resolução de Disputas</li>
                                <li>Disposições Gerais</li>
                                <li>Contato</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ACEITAÇÃO DOS TERMOS</h2>
                            <p className="text-gray-700 mb-4">
                                Ao acessar, cadastrar-se ou utilizar a plataforma QV Precifica, você concorda integralmente com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize nosso serviço.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Estes Termos constituem um contrato juridicamente vinculante entre você (usuário ou profissional de saúde) e a QV Business Solution LTDA. Ao criar uma conta, você declara ter lido, compreendido e aceito todas as condições aqui estabelecidas.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. DESCRIÇÃO DO SERVIÇO</h2>
                            <p className="text-gray-700 mb-4">
                                O QV Precifica é uma plataforma digital que auxilia profissionais da área de saúde na precificação de seus serviços, procedimentos e tratamentos. A ferramenta permite cadastrar e organizar informações sobre:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Procedimentos médicos e odontológicos</li>
                                <li>Especialidades profissionais</li>
                                <li>Insumos e materiais utilizados</li>
                                <li>Custos operacionais de clínicas e consultórios</li>
                                <li>Cálculos de precificação baseados em metodologias personalizáveis</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                <strong>Importante:</strong> O QV Precifica NÃO processa, armazena ou tem acesso a dados de pacientes, históricos médicos ou informações clínicas sensíveis. A plataforma trabalha exclusivamente com dados administrativos e financeiros relacionados à gestão de preços.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. CRIAÇÃO E GERENCIAMENTO DE CONTA</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Requisitos para Cadastro</h3>
                            <p className="text-gray-700 mb-4">
                                Para criar uma conta no QV Precifica, você deve:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Ter idade mínima de 18 anos</li>
                                <li>Ser profissional da área de saúde ou responsável pela gestão de clínica/consultório</li>
                                <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
                                <li>Possuir um endereço de e-mail válido</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Autenticação</h3>
                            <p className="text-gray-700 mb-4">
                                O acesso à plataforma é realizado através de link único enviado por e-mail (sistema de magic link). Cada vez que você desejar acessar sua conta, um novo link de acesso será enviado para o e-mail cadastrado. Você é responsável por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Manter seu e-mail seguro e confidencial</li>
                                <li>Não compartilhar links de acesso com terceiros</li>
                                <li>Notificar imediatamente caso suspeite de acesso não autorizado</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Responsabilidade pela Conta</h3>
                            <p className="text-gray-700 mb-4">
                                Você é integralmente responsável por todas as atividades realizadas em sua conta. Não compartilhe suas credenciais de acesso. Em caso de uso não autorizado, comunique-nos imediatamente através do e-mail contato@qvsolucoes.com.br.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. PLANOS E PAGAMENTO</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Planos Disponíveis</h3>
                            <p className="text-gray-700 mb-4">
                                O QV Precifica opera exclusivamente com planos anuais pagos. Não oferecemos planos gratuitos ou períodos de teste (trial). Todos os planos têm duração de 12 meses a partir da data de contratação.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Forma de Pagamento</h3>
                            <p className="text-gray-700 mb-4">
                                Os pagamentos são processados exclusivamente através da Stripe, Inc., processadora de pagamentos internacional. Formas de pagamento aceitas:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Cartão de crédito (principais bandeiras)</li>
                                <li>Outras formas disponibilizadas pela Stripe</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Cobrança</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>A cobrança é realizada de forma antecipada, no momento da contratação</li>
                                <li>O valor do plano anual é cobrado em uma única parcela</li>
                                <li>Você receberá uma fatura/recibo por e-mail após cada pagamento</li>
                                <li>Todos os preços estão em Reais (BRL) e incluem impostos aplicáveis</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Renovação</h3>
                            <p className="text-gray-700 mb-4">
                                Ao final do período de 12 meses, sua assinatura NÃO é renovada automaticamente. Você deverá realizar uma nova contratação caso deseje continuar utilizando o serviço. Enviaremos lembretes por e-mail antes do vencimento da sua assinatura.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.5 Alteração de Preços</h3>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de alterar os preços dos planos a qualquer momento. Alterações de preço não afetarão assinaturas já contratadas, apenas novas contratações ou renovações.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. PERÍODO DE TESTE E REEMBOLSO</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Garantia de Satisfação</h3>
                            <p className="text-gray-700 mb-4">
                                Você tem direito a solicitar o reembolso integral do valor pago em até 7 (sete) dias corridos após a data da compra, conforme previsto no Código de Defesa do Consumidor (CDC).
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Como Solicitar Reembolso</h3>
                            <p className="text-gray-700 mb-4">Para solicitar reembolso:</p>
                            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Envie um e-mail para contato@qvsolucoes.com.br</li>
                                <li>Inclua o assunto "Solicitação de Reembolso"</li>
                                <li>Informe o e-mail cadastrado e o motivo da solicitação</li>
                                <li>O reembolso será processado em até 10 dias úteis</li>
                            </ol>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Condições</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>O reembolso é integral, sem deduções</li>
                                <li>Após o prazo de 7 dias, não será possível solicitar reembolso</li>
                                <li>O acesso à plataforma será encerrado após o processamento do reembolso</li>
                                <li>O reembolso será realizado através do mesmo método de pagamento utilizado na compra</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. USO ACEITÁVEL DA PLATAFORMA</h2>
                            <p className="text-gray-700 mb-4">
                                Você concorda em utilizar o QV Precifica apenas para fins legítimos e de acordo com estes Termos. É proibido:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Utilizar a plataforma para atividades ilegais ou fraudulentas</li>
                                <li>Tentar acessar áreas restritas ou contas de outros usuários</li>
                                <li>Realizar engenharia reversa, descompilar ou desmontar o software</li>
                                <li>Utilizar bots, scripts ou ferramentas automatizadas sem autorização</li>
                                <li>Sobrecarregar a infraestrutura com solicitações excessivas</li>
                                <li>Copiar, reproduzir ou redistribuir conteúdo da plataforma</li>
                                <li>Remover avisos de direitos autorais ou marcas registradas</li>
                                <li>Interferir no funcionamento adequado do serviço</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. CONTEÚDO PROIBIDO</h2>
                            <p className="text-gray-700 mb-4">
                                É expressamente proibido inserir, armazenar ou compartilhar através da plataforma:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Dados pessoais de pacientes ou prontuários médicos</li>
                                <li>Informações de saúde sensíveis protegidas por sigilo profissional</li>
                                <li>Conteúdo ilegal, difamatório, obsceno ou discriminatório</li>
                                <li>Vírus, malware ou códigos maliciosos</li>
                                <li>Informações que violem direitos de terceiros</li>
                                <li>Conteúdo que infrinja propriedade intelectual</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                <strong>Lembre-se:</strong> O QV Precifica é uma ferramenta de precificação e gestão administrativa, não devendo ser utilizada para armazenar informações clínicas de pacientes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. PROPRIEDADE INTELECTUAL</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Direitos da QV Business Solution</h3>
                            <p className="text-gray-700 mb-4">
                                Todos os direitos de propriedade intelectual relacionados ao QV Precifica, incluindo mas não se limitando a código-fonte, design, interface, logotipos, textos, gráficos e funcionalidades, pertencem exclusivamente à QV Business Solution LTDA.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Marcas Registradas</h3>
                            <p className="text-gray-700 mb-4">
                                "QV Precifica" e demais marcas exibidas na plataforma são propriedade da QV Business Solution ou de seus licenciadores. Nenhum direito sobre essas marcas é concedido pelo simples uso do serviço.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Seus Dados</h3>
                            <p className="text-gray-700 mb-4">
                                Você mantém a propriedade de todos os dados que insere na plataforma (informações sobre procedimentos, custos, insumos, etc.). Ao utilizar o serviço, você nos concede uma licença limitada para processar esses dados exclusivamente para fornecer o serviço contratado.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. LICENÇA DE USO</h2>
                            <p className="text-gray-700 mb-4">
                                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e utilizar a plataforma QV Precifica, condicionada ao cumprimento destes Termos.
                            </p>
                            <p className="text-gray-700 mb-4">Esta licença permite apenas:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Acesso pessoal e individual à plataforma</li>
                                <li>Uso para fins profissionais relacionados à sua atividade de saúde</li>
                                <li>Cadastro de informações administrativas e financeiras</li>
                            </ul>
                            <p className="text-gray-700 mb-4">Esta licença NÃO permite:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Sublicenciar, vender ou transferir o acesso a terceiros</li>
                                <li>Usar a plataforma para desenvolver produtos concorrentes</li>
                                <li>Extrair dados em massa ou criar bases de dados derivadas</li>
                                <li>Compartilhar sua conta com múltiplos usuários</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. LIMITAÇÕES DE USO</h2>
                            <p className="text-gray-700 mb-4">
                                Para garantir a estabilidade e qualidade do serviço para todos os usuários, aplicamos as seguintes limitações razoáveis:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Número de requisições por minuto: limitado para prevenir abuso</li>
                                <li>Tamanho de arquivos enviados: conforme especificado na plataforma</li>
                                <li>Quantidade de registros: conforme o plano contratado</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Caso você precise de limites superiores, entre em contato conosco para discutir planos personalizados.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. DISPONIBILIDADE DO SERVIÇO (SLA)</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Compromisso de Disponibilidade</h3>
                            <p className="text-gray-700 mb-4">
                                Comprometemo-nos a manter a plataforma QV Precifica disponível com um uptime de 99% (noventa e nove por cento) ao mês, excluindo:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Manutenções programadas (notificadas com antecedência)</li>
                                <li>Casos de força maior</li>
                                <li>Problemas em serviços de terceiros (hospedagem, internet, etc.)</li>
                                <li>Ataques cibernéticos ou eventos fora de nosso controle</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Manutenção Programada</h3>
                            <p className="text-gray-700 mb-4">
                                Manutenções programadas serão notificadas com pelo menos 48 horas de antecedência, preferencialmente realizadas em horários de menor movimento. Sempre que possível, agendaremos manutenções fora do horário comercial.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.3 Sem Garantia Absoluta</h3>
                            <p className="text-gray-700 mb-4">
                                Embora nos esforcemos para manter o serviço sempre disponível, não garantimos que o QV Precifica estará 100% livre de interrupções, erros ou falhas técnicas. O uso da plataforma é "como está" (as is).
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. SUPORTE AO CLIENTE</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Canais de Atendimento</h3>
                            <p className="text-gray-700 mb-4">
                                Oferecemos suporte através dos seguintes canais:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>E-mail:</strong> contato@qvsolucoes.com.br</li>
                                <li><strong>WhatsApp:</strong> [disponível mediante solicitação]</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Horário de Atendimento</h3>
                            <p className="text-gray-700 mb-4">
                                Nosso suporte funciona em dias úteis, nos seguintes horários:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Segunda a sexta-feira: 08:00 às 12:00 e 13:30 às 18:00 (horário de Brasília)</li>
                                <li>Não atendemos aos sábados, domingos e feriados nacionais</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Prazo de Resposta</h3>
                            <p className="text-gray-700 mb-4">
                                Comprometemo-nos a responder todas as solicitações de suporte em até 48 horas úteis. Questões urgentes relacionadas a pagamento ou acesso à conta têm prioridade.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. SUSPENSÃO E ENCERRAMENTO DE CONTA</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Suspensão pela QV Business Solution</h3>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de suspender ou encerrar sua conta imediatamente, sem aviso prévio, nas seguintes situações:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Violação destes Termos de Uso</li>
                                <li>Uso fraudulento ou ilegal da plataforma</li>
                                <li>Tentativa de prejudicar a infraestrutura ou outros usuários</li>
                                <li>Inadimplência após 30 dias do vencimento da assinatura</li>
                                <li>Inserção de conteúdo proibido ou inadequado</li>
                                <li>Comportamento abusivo com nossa equipe de suporte</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Encerramento pelo Usuário</h3>
                            <p className="text-gray-700 mb-4">
                                Você pode encerrar sua conta a qualquer momento através do e-mail contato@qvsolucoes.com.br. Importante:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>O encerramento voluntário não gera direito a reembolso (salvo dentro do prazo de 7 dias)</li>
                                <li>Seus dados serão tratados conforme nossa Política de Privacidade</li>
                                <li>O acesso à plataforma será imediatamente bloqueado</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 Efeitos do Encerramento</h3>
                            <p className="text-gray-700 mb-4">
                                Após o encerramento da conta:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Todo acesso à plataforma será bloqueado</li>
                                <li>Seus dados serão retidos conforme política de retenção</li>
                                <li>Você poderá solicitar exportação de dados antes do encerramento</li>
                                <li>Não haverá reembolso proporcional de valores já pagos</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. CANCELAMENTO E RENOVAÇÃO</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">14.1 Duração da Assinatura</h3>
                            <p className="text-gray-700 mb-4">
                                Todos os planos têm duração fixa de 12 meses. Não há renovação automática. Ao final do período:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Você receberá notificações por e-mail nos últimos 30 dias</li>
                                <li>Poderá optar por renovar manualmente</li>
                                <li>Se não renovar, o acesso será bloqueado após o vencimento</li>
                                <li>Seus dados serão mantidos por 12 meses adicionais para eventual reativação</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">14.2 Cancelamento Antecipado</h3>
                            <p className="text-gray-700 mb-4">
                                Caso deseje cancelar antes do término dos 12 meses:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Não há multa por cancelamento antecipado</li>
                                <li>Não há reembolso proporcional do período não utilizado</li>
                                <li>O acesso permanecerá ativo até o fim do período já pago</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. ISENÇÃO DE RESPONSABILIDADE</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">15.1 Uso por Sua Conta e Risco</h3>
                            <p className="text-gray-700 mb-4">
                                O QV Precifica é fornecido "como está" (as is) e "conforme disponível" (as available). Não garantimos que:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>O serviço atenderá todas as suas necessidades específicas</li>
                                <li>Estará livre de erros, vírus ou outros componentes prejudiciais</li>
                                <li>Os resultados obtidos serão precisos ou confiáveis em 100% dos casos</li>
                                <li>Defeitos serão sempre corrigidos</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">15.2 Decisões Profissionais</h3>
                            <p className="text-gray-700 mb-4">
                                O QV Precifica é uma ferramenta auxiliar de gestão. Todas as decisões sobre precificação de serviços de saúde são de sua exclusiva responsabilidade. Recomendamos:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Consultar profissionais de contabilidade e gestão</li>
                                <li>Verificar tabelas e regulamentações do seu conselho profissional</li>
                                <li>Analisar criticamente os resultados gerados pela plataforma</li>
                                <li>Não basear decisões importantes apenas nos cálculos automatizados</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">15.3 Dados e Backup</h3>
                            <p className="text-gray-700 mb-4">
                                Embora realizemos backups regulares, você é responsável por manter cópias de segurança de suas informações importantes. Não nos responsabilizamos por perda de dados causada por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Falhas técnicas imprevistas</li>
                                <li>Ações do próprio usuário (exclusão acidental)</li>
                                <li>Problemas em serviços de terceiros</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                            <p className="text-gray-700 mb-4">
                                Na máxima extensão permitida pela lei brasileira:
                            </p>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">16.1 Danos Indiretos</h3>
                            <p className="text-gray-700 mb-4">
                                A QV Business Solution não será responsável por danos indiretos, incidentais, especiais, punitivos ou consequenciais, incluindo mas não se limitando a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Perda de lucros ou receitas</li>
                                <li>Perda de dados ou informações</li>
                                <li>Interrupção de negócios</li>
                                <li>Danos à reputação</li>
                                <li>Custos de substituição de serviços</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">16.2 Limite Monetário</h3>
                            <p className="text-gray-700 mb-4">
                                Nossa responsabilidade total, em qualquer caso, será limitada ao valor pago por você nos últimos 12 meses pela utilização do QV Precifica.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">16.3 Exclusões</h3>
                            <p className="text-gray-700 mb-4">
                                As limitações acima não se aplicam a:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Danos causados por dolo ou culpa grave</li>
                                <li>Violação de direitos fundamentais</li>
                                <li>Situações em que a lei não permita limitação de responsabilidade</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. FORÇA MAIOR</h2>
                            <p className="text-gray-700 mb-4">
                                Não seremos responsabilizados por falhas ou atrasos no cumprimento de nossas obrigações devido a eventos fora de nosso controle razoável, incluindo:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Desastres naturais (terremotos, inundações, incêndios)</li>
                                <li>Guerras, atos terroristas, distúrbios civis</li>
                                <li>Pandemias ou emergências de saúde pública</li>
                                <li>Falhas em infraestrutura de internet ou energia</li>
                                <li>Greves ou problemas trabalhistas</li>
                                <li>Ações governamentais ou mudanças regulatórias</li>
                                <li>Ataques cibernéticos em larga escala</li>
                                <li>Falhas em serviços essenciais de terceiros</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. ALTERAÇÕES NO SERVIÇO E NOS TERMOS</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">18.1 Modificações no Serviço</h3>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Adicionar, modificar ou remover funcionalidades</li>
                                <li>Atualizar a interface e design da plataforma</li>
                                <li>Melhorar algoritmos e metodologias de cálculo</li>
                                <li>Descontinuar recursos com baixo uso</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Mudanças significativas serão comunicadas com antecedência razoável.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">18.2 Alterações nos Termos</h3>
                            <p className="text-gray-700 mb-4">
                                Podemos atualizar estes Termos de Uso periodicamente. Quando fizermos alterações materiais:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Notificaremos você por e-mail com pelo menos 15 dias de antecedência</li>
                                <li>A data de "Última Atualização" será modificada</li>
                                <li>O uso continuado após a entrada em vigor constitui aceitação</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Se você não concordar com as alterações, poderá encerrar sua conta antes da entrada em vigor.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">19. LINKS E SERVIÇOS DE TERCEIROS</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">19.1 Conteúdo de Terceiros</h3>
                            <p className="text-gray-700 mb-4">
                                A plataforma pode conter links para sites ou serviços de terceiros. Não temos controle sobre esses sites e não nos responsabilizamos por:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Conteúdo, políticas ou práticas de sites externos</li>
                                <li>Transações realizadas com terceiros</li>
                                <li>Danos resultantes do uso de serviços externos</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">19.2 Integração com a Stripe</h3>
                            <p className="text-gray-700 mb-4">
                                Processamos pagamentos através da Stripe. Ao realizar pagamentos, você também concorda com os termos de serviço da Stripe. Para mais informações: <a href="https://stripe.com/legal/consumer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/legal/consumer</a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">20. LEI APLICÁVEL E FORO</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">20.1 Legislação</h3>
                            <p className="text-gray-700 mb-4">
                                Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</li>
                                <li>Código de Defesa do Consumidor (Lei 8.078/1990)</li>
                                <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                                <li>Código Civil Brasileiro</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">20.2 Jurisdição</h3>
                            <p className="text-gray-700 mb-4">
                                Fica eleito o foro da comarca de domicílio do consumidor para dirimir quaisquer controvérsias decorrentes destes Termos, renunciando a qualquer outro, por mais privilegiado que seja.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">21. RESOLUÇÃO DE DISPUTAS</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">21.1 Tentativa de Resolução Amigável</h3>
                            <p className="text-gray-700 mb-4">
                                Antes de iniciar qualquer procedimento formal, comprometemo-nos a:
                            </p>
                            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Ouvir sua reclamação com atenção</li>
                                <li>Tentar resolver o problema diretamente</li>
                                <li>Buscar uma solução satisfatória para ambas as partes</li>
                            </ol>
                            <p className="text-gray-700 mb-4">
                                Entre em contato através do e-mail contato@qvsolucoes.com.br para iniciar o processo de resolução.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">21.2 Mediação e Arbitragem</h3>
                            <p className="text-gray-700 mb-4">
                                Caso não seja possível resolver amigavelmente, as partes concordam em tentar primeiro a mediação antes de recorrer ao Poder Judiciário. A mediação poderá ser realizada através de:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Câmaras de mediação reconhecidas</li>
                                <li>Plataforma Consumidor.gov.br</li>
                                <li>PROCON local</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">21.3 Direitos do Consumidor</h3>
                            <p className="text-gray-700 mb-4">
                                Nada nestes Termos limita seus direitos como consumidor previstos no CDC, incluindo o direito de buscar reparação judicial.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">22. DISPOSIÇÕES GERAIS</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">22.1 Acordo Integral</h3>
                            <p className="text-gray-700 mb-4">
                                Estes Termos, juntamente com a Política de Privacidade, constituem o acordo integral entre você e a QV Business Solution em relação ao uso do QV Precifica.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">22.2 Independência das Cláusulas</h3>
                            <p className="text-gray-700 mb-4">
                                Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais cláusulas permanecerão em pleno vigor e efeito.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">22.3 Não Renúncia</h3>
                            <p className="text-gray-700 mb-4">
                                A não exigência do cumprimento de qualquer cláusula não constitui renúncia ao direito de exigi-la no futuro.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">22.4 Cessão</h3>
                            <p className="text-gray-700 mb-4">
                                Você não pode ceder ou transferir seus direitos sob estes Termos sem nosso consentimento prévio por escrito. Podemos ceder nossos direitos a qualquer afiliada ou em caso de fusão, aquisição ou venda de ativos.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">22.5 Idioma</h3>
                            <p className="text-gray-700 mb-4">
                                A versão em português destes Termos prevalecerá em caso de conflito com traduções.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">23. CONTATO</h2>
                            <p className="text-gray-700 mb-4">
                                Para questões sobre estes Termos de Uso, entre em contato:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>QV Business Solution LTDA</strong></p>
                                <p className="text-gray-700 mb-2">CNPJ: 60.835.560/0001-98</p>
                                <p className="text-gray-700 mb-2">E-mail: <a href="mailto:contato@qvsolucoes.com.br" className="text-blue-600 hover:underline">contato@qvsolucoes.com.br</a></p>
                                <p className="text-gray-700 mb-4">Site: <a href="https://precifica-app.qvsolucoes.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://precifica-app.qvsolucoes.com.br/</a></p>
                                <p className="text-gray-700"><strong>Horário de atendimento:</strong></p>
                                <p className="text-gray-700">Segunda a sexta-feira: 08:00-12:00 e 13:30-18:00 (horário de Brasília)</p>
                            </div>
                        </section>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-gray-600 text-center">
                                <strong>Última atualização:</strong> 10 de outubro de 2025
                            </p>
                            <p className="text-gray-600 text-center mt-2">
                                Ao utilizar o QV Precifica, você confirma ter lido, compreendido e concordado com estes Termos de Uso.
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

