import Image from "next/image"

const Footer = () => {

    const footerNavs = [
        {
            href: '/terms-of-service',
            name: 'Termos de Uso'
        },
        {
            href: '/privacy-policy',
            name: 'Política de Privacidade'
        },
    ]

    return (
        <footer className="text-gray-600 bg-white px-4 py-12 max-w-screen-xl mx-auto md:px-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Logo e Empresa */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                        <Image
                            src="/logo-qv.png"
                            alt="QV Business Solution"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </div>
                    <p className="text-sm text-gray-500">
                        QV Business Solution LTDA
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                        Legal
                    </h3>
                    <ul className="space-y-3">
                        {
                            footerNavs.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className="text-sm hover:text-primary-800 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                        Conecte-se
                    </h3>
                    <ul className="flex items-center space-x-4">
                        <a href="https://www.instagram.com/qvconsultoriafinanceira" aria-label="Instagram">
                            <li className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-primary-600 hover:bg-primary-50 transition-all duration-200">
                                <svg className="svg-icon w-6 h-6 text-gray-600 hover:text-primary-600" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                                        <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                                    </g>
                                </svg>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} QV Business Solution LTDA. Todos os direitos reservados.
                </p>
            </div>

            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}

export default Footer


