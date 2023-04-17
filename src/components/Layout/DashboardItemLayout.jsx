import style from '../../styling/DashboardStyling/DashboardItemLayout.module.css'

const DashboardItemLayout = ({children}) => {
    return (
        <section className={style.sectionWrapper}>
            <div className={style.sectionInner}>
                {children}
            </div>
        </section>
    )
}

export default DashboardItemLayout