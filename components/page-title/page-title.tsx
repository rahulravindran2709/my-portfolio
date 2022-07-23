

interface IProps {
    title: string
    subtitle?: string
    center?: boolean
    icons?: boolean
}

const PageTitle = ({ title, subtitle = '', center = false, icons = true }: IProps): JSX.Element => (
    <div className="mb-5 lg:mb-5 font-light w-full text-black dark:text-white">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${center && 'md:text-center'}`}>
            {title}
        </h1>
        {subtitle && (
            <p className="text-2xl sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5">
                {subtitle}
            </p>
        )}
        
    </div>
)

export default PageTitle