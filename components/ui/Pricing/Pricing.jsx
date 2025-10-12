import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";
import { useState } from "react";

const Pricing = () => {
    const [billingType, setBillingType] = useState("yearly"); // "yearly" or "yearly-installments"

    const plans = [
        {
            name: "Prata",
            yearly: {
                price: "R$ 797",
                installments: null,
                savingsText: "Economize R$ 151",
                paymentLink: "https://www.asaas.com/c/ku6kensfu7mwbvet"
            },
            yearlyInstallments: {
                price: "R$ 948",
                installments: "12x de R$ 79",
                savingsText: null,
                paymentLink: "https://www.asaas.com/c/yf5r2cmpzmp7b5lg"
            },
            features: [
                "Cadastro de Custos Fixos e Variáveis",
                "Cálculo Automático de Hora Clínica",
                "Configuração de Margens de Lucro",
                "Simulador Atual vs Ideal",
                "Procedimentos Ilimitados",
                "Suporte via WhatsApp",
            ],
        },
        {
            name: "Ouro",
            yearly: {
                price: "R$ 997",
                installments: null,
                savingsText: "Economize R$ 167",
                paymentLink: "https://www.asaas.com/c/nxvhhzbd991fo22r"
            },
            yearlyInstallments: {
                price: "R$ 1.164",
                installments: "12x de R$ 97",
                savingsText: null,
                paymentLink: "https://www.asaas.com/c/kggo6g1shvgxyi6y"
            },
            features: [
                "Todas as funcionalidades do Prata",
                "Onboarding Personalizado 1:1",
                "Sessão de Configuração Guiada",
                "Suporte Prioritário",
            ],
        },
        {
            name: "Diamante",
            yearly: {
                price: "Sob consulta",
                installments: null,
                savingsText: null,
                paymentLink: null
            },
            yearlyInstallments: {
                price: "Sob consulta",
                installments: null,
                savingsText: null,
                paymentLink: null
            },
            features: [
                "Tudo do Plano Ouro",
                "Para Redes de Clínicas (Multi-unidades)",
                "Diagnóstico Personalizado de Saúde Financeira",
                "Consultoria Estratégica Mensal",
            ],
        },
    ];

    return (
        <section id="precos" className='py-16 bg-white'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-3xl mx-auto sm:text-center mb-12'>
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
                        Planos e Preços
                    </div>
                    <h3 className='text-gray-900 text-4xl font-bold sm:text-5xl'>
                        Escolha o plano ideal para você
                    </h3>
                    <div className='mt-5 max-w-2xl mx-auto'>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Todas as funcionalidades de precificação estratégica. Escolha o nível de suporte que precisa.
                        </p>
                    </div>
                </div>
                
                {/* Billing Type Selector */}
                <div className="mt-8 flex justify-center">
                    <div className="bg-gray-100 p-1 rounded-lg flex">
                        <button
                            onClick={() => setBillingType("yearly")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                                billingType === "yearly"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Anual
                        </button>
                        <button
                            onClick={() => setBillingType("yearly-installments")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                billingType === "yearly-installments"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Anual Parcelado
                        </button>
                    </div>
                </div>

                <div className='mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => {
                            const isMiddlePlan = idx === 1; // Ouro plan
                            const isDiamondPlan = idx === 2; // Diamante plan
                            
                            // Seleciona os dados baseado na modalidade de pagamento
                            const planData = billingType === "yearly" ? item.yearly : item.yearlyInstallments;
                            const { price, installments, savingsText, paymentLink } = planData;
                            const isYearlyInstallments = billingType === "yearly-installments";
                            
                            return (
                                <div key={idx} className={`relative flex-1 flex items-stretch flex-col p-8 rounded-3xl border-2 transition-all duration-300 ${
                                    isMiddlePlan 
                                        ? 'border-primary-400 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 shadow-2xl scale-105 ring-4 ring-primary-200/50' 
                                        : 'border-gray-200 hover:border-primary-300 hover:shadow-xl bg-white'
                                }`}>
                                    {isMiddlePlan && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                            <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                                                ⭐ Mais Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="mt-4">
                                        <span className={`text-2xl font-bold ${isMiddlePlan ? 'text-primary-800' : 'text-gray-900'}`}>
                                            {item.name}
                                        </span>
                                        <div className='mt-6'>
                                            {isYearlyInstallments && installments ? (
                                                // Layout para Anual Parcelado
                                                <>
                                                    <div className="text-gray-900 text-4xl font-bold">
                                                        {installments}
                                                    </div>
                                                    <div className="mt-1 text-lg text-gray-600">
                                                        Total: {price}
                                                    </div>
                                                </>
                                            ) : (
                                                // Layout para Anual ou Sob Consulta
                                                <>
                                                    <div className="text-gray-900 text-4xl font-bold">
                                                        {price}
                                                    </div>
                                                </>
                                            )}
                                            {savingsText && (
                                                <div className="text-sm text-green-600 font-semibold mt-2 flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                    </svg>
                                                    {savingsText}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-primary-800'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clipRule='evenodd'></path>
                                                </svg>
                                                <span className="text-gray-700">{featureItem}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end mt-4">
                                    {paymentLink ? (
                                        <a 
                                            href={paymentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-6 py-4 rounded-xl w-full font-bold text-base duration-300 transform hover:-translate-y-0.5 text-center ${
                                                isMiddlePlan 
                                                    ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl' 
                                                    : 'text-white bg-primary-800 hover:bg-primary-700 shadow-md hover:shadow-lg'
                                            }`}
                                        >
                                            Começar Agora
                                        </a>
                                    ) : (
                                        <a 
                                            href="https://wa.me/55484042838?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20QV%20Precifica"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-6 py-4 rounded-xl w-full font-bold text-base duration-300 transform hover:-translate-y-0.5 text-center ${
                                            isMiddlePlan 
                                                ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl' 
                                                : 'text-white bg-primary-800 hover:bg-primary-700 shadow-md hover:shadow-lg'
                                        }`}>
                                            Solicitar Proposta
                                        </a>
                                    )}
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );

};

export default Pricing