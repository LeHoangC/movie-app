import classNames from 'classnames/bind'
import { category, movieType, tvType } from '../../api/tmdbApi'
import ListMovie from '../ListMovie'
import styles from './ContainerList.module.scss'

const cx = classNames.bind(styles)

function ContainerList() {
    return (
        <div className={cx('wrapper')}>
            <ListMovie title="Trending movie" cate={category.movie} type={movieType.popular} />
            <ListMovie title="Top Rated movie" cate={category.movie} type={movieType.top_rated} />
            <ListMovie title="Up comming movie" cate={category.movie} type={movieType.upcoming} />
            <ListMovie title="Trending tv" cate={category.tv} type={tvType.popular} />
            <ListMovie title="Top Rated tv" cate={category.tv} type={tvType.top_rated} />
        </div>
    )
}

export default ContainerList
