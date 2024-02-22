import { twMerge } from "tailwind-merge";

export function ContainerGrid({ children, className }) {
    const defaltClass = 'w-full max-w-grid mx-auto px-3 '
    const conbinedClasses = twMerge(defaltClass, className)
    return (
        <div className={conbinedClasses}>
            {children}
        </div>
    )
}