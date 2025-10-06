const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper