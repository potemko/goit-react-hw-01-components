import PropTypes from "prop-types"
import css from "../Statictics/Statistics.module.css"

const StatsLiest = ({title, items}) =>{
    return <section className={css.statistics}>
<h2 className={css.title}>{title}</h2>
<ul className={css.list}>
    {items.map(item => <Stat stat={item} key={item.id}/>)}
</ul>

    </section>
}

const Stat = ({stat}) => {
    const {label, percentage} = stat
    return <li className={css.btn}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
}

Stat.propTypes = {
    title: PropTypes.string,
    stat: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
}

export default StatsLiest