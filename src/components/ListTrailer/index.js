import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import classNames from 'classnames/bind'
import styles from './ListTrailer.module.scss'
import tmdbApi from '../../api/tmdbApi'

const cx = classNames.bind(styles)

function ListTrailer({ cate, id }) {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(cate, id)
            setVideos(res.results.slice(0, 3))
        }
        getVideos()
    }, [cate, id])

    const opts = {
        width: '360',
        height: '300',
        playerVars: {
            autoplay: 0,
            origin: 'http://localhost:3000/',
        },
    }

    return (
        <div className={cx('wrapper')}>
            <h2>Trailers</h2>
            <div className={cx('videos')} id="trailer">
                {videos.map((item, i) => (
                    <YouTube key={i} videoId={item.key} opts={opts} />
                ))}
            </div>
        </div>
    )
}

export default ListTrailer
