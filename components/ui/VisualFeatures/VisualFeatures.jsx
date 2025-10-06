import SectionWrapper from "@/components/SectionWrapper"
import Feature1 from "@/public/images/Feature-1.svg"
import Feature2 from "@/public/images/Feature-2.svg"
import Image from "next/image"

const VisualFeatures = () => {

    const features = [
        {
            title: "Send thousands of emails",
            desc: "Send thousands of emails quickly and easily. You can customize the content of each email",
            img: Feature1
        },
        {
            title: "Write your email content using AI",
            desc: "AI-powered email content writing is the perfect solution for busy professionals who need to quickly create engaging emails.",
            img: Feature2
        },
    ]
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-600 bg-white">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
                        Take your email marketing to the next level with Mailgo
                    </h2>
                    <p className="mt-3 text-gray-600">
                        With Mailgo's powerful features, you can easily create and send beautiful emails that will engage your customers and drive more sales.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300" key={idx}>
                                    <div className="p-8">
                                        <h3 className="text-gray-900 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 sm:text-sm md:text-base text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pl-8">
                                        <Image
                                            src={item.img}
                                            className="w-full ml-auto"
                                            alt={item.title}
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures