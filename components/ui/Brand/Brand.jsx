import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logo-qv.png"
        alt="QV Precifica"
        {...props}
        width={60}
        height={41}
        priority
    />
)
export default Brand