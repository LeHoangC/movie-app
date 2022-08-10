import classNames from 'classnames/bind'
import tmdbApi from '../../api/tmdbApi'
import Button from '../Button'
import styles from './CardFilm.module.scss'

const cx = classNames.bind(styles)

function CardFilm({ item, cate }) {
    return (
        <Button to={`/${cate}/${item.id}`}>
            <div className={cx('wrapper')}>
                <div className={cx('image')}>
                    {item.poster_path && (
                        <img src={tmdbApi.w500Image(item.poster_path)} alt={item.name} />
                    )}
                </div>

                <h4>{item.title || item.name}</h4>
                <span className={cx('vote')}>{item.vote_average}</span>
            </div>
        </Button>
    )
}

export default CardFilm
