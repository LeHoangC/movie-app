import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './WatchMovie.module.scss'
import { useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'

const cx = classNames.bind(styles)

function WatchMovie() {
    const { category, id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        const getDetails = async () => {
            const response = await tmdbApi.details(category, id, { params: {} })
            setItem(response)
            window.scrollTo(0, 0)
        }
        getDetails()
    }, [category, id])

    return (
        <div className={cx('wrapper')}>
            {item && (
                <>
                    <div className={cx('video')}>
                        <iframe
                            src={
                                `https://www.2embed.to/embed/imdb/movie?id=${item.imdb_id}` ||
                                `https://www.2embed.to/embed/tmdb/movie?id=${item.id}`
                            }
                            title={`movie: ${id}`}
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div className={cx('content')}>
                        <h2 className={cx('name')}>{item.title}</h2>
                    </div>
                </>
            )}
        </div>
    )
}

export default WatchMovie
