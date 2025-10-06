import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '../NavHeader'
import NavLink from '../NavLink'

const Navbar = () => {

    const [state, setState] = useState(false)
    const menuBtnEl = useRef()

    const navigation = [
        { name: "Recursos", href: "/#recursos" },
        { name: "Preços", href: "/#precos" },
        { name: "Depoimentos", href: "/#depoimentos" },
        { name: "Dúvidas", href: "/#duvidas" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className='relative bg-white border-b border-gray-200'>
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={`pb-3 md:text-sm md:static md:block ${state ? "bg-white absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl border-b border-gray-200" : "hidden"}`}>
                <div className="custom-screen items-center md:flex">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`flex-1 items-center mt-6 text-gray-700 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="hover:text-[#9d670c]">
                                            <Link href={item.href} className="block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="gap-x-6 items-center justify-end mt-4 space-y-6 md:flex md:space-y-0 md:mt-0">
                            <Link href="/login" className="block hover:text-[#9d670c] font-medium">
                                Entrar
                            </Link>
                            <NavLink href="/#precos" className="flex items-center justify-center gap-x-1 text-sm text-white font-medium px-6 py-3 rounded-lg md:inline-flex shadow-md hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#9d670c'}}>
                                Começar agora
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar