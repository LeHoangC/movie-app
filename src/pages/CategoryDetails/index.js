import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './CategoryDetails.module.scss'
import ListMovieCate from '../../components/ListMovieCate'

const cx = classNames.bind(styles)

function CategoryDetails() {
    const { category } = useParams()

    return (
        <div className={cx('wrapper')}>
            <h2>{category === 'movie' ? 'Movies' : 'Tv Series'}</h2>
            <ListMovieCate cate={category} />
        </div>
    )
}

export default CategoryDetails
