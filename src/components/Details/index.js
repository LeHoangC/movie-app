import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Details.module.scss'
import { useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'
import CastList from '../CastList'
import ListTrailer from '../ListTrailer'
import ListMovie from '../ListMovie'
import Button from '../Button'

const cx = classNames.bind(styles)

function Details() {
    const { category, id } = useParams()
    const [item, setItem] = useState(null)
    const [genres, setGenres] = useState([])
    useEffect(() => {
        const getDetails = async () => {
            const response = await tmdbApi.details(category, id, { params: {} })
            setItem(response)
            setGenres([...response.genres])
            window.scrollTo(0, 0)
        }
        getDetails()
    }, [category, id])

    return (
        item && (
            <div className={cx('wrapper')}>
                <div
                    className={cx('banner')}
                    style={{
                        backgroundImage: `url(${tmdbApi.originalImage(item.backdrop_path)})`,
                    }}
                >
                    <div className={cx('banner_content')}>
                        <div className={cx('poster')}>
                            <img src={tmdbApi.w500Image(item.poster_path)} alt="" />
                        </div>
                        <div className={cx('info')}>
                            <h2 className={cx('name')}>{item.title || item.name}</h2>
                            <p className={cx('desc')}>{item.overview}</p>
                            <span className={cx('date')}>
                                {item.release_date ? 'Release date' : 'Last air date'}:{' '}
                                {item.release_date || item.last_air_date}
                            </span>
                            <div className={cx('genres')}>
                                {genres.map((item) => (
                                    <span key={item.id} className={cx('genre')}>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                            <div className={cx('btn')}>
                                <Button primary small to={`/${category}/watch/${item.id}`}>
                                    Watch now
                                </Button>
                                <Button outline small href={'#trailer'}>
                                    Watch Trailer
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <CastList id={item.id} />
                    <ListTrailer cate={category} id={item.id} />
                    <ListMovie title="Simular" cate={category} type="simular" id={item.id} />
                </div>
            </div>
        )
    )
}

export default Details
