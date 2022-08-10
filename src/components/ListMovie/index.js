import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import classNames from 'classnames/bind'
import styles from './ListMovie.module.scss'
import tmdbApi from '../../api/tmdbApi'
import Button from '../Button'
import CardFilm from '../CardFilm'

const cx = classNames.bind(styles)

function ListMovie({ title, cate, type, id = null }) {
    const [listMovie, setListMovie] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
            const param = {}

            if (type !== 'simular') {
                switch (cate) {
                    case 'movie':
                        response = await tmdbApi.getMovieList(type, param)
                        break
                    case 'tv':
                        response = await tmdbApi.getTvList(type, param)
                        break
                    default:
                        console.log('Error')
                }
            } else {
                response = await tmdbApi.similar(cate, id)
            }
            setListMovie(response.results)
        }

        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>{title}</h2>
                <Button to={`/${cate}`} outline small>
                    View more
                </Button>
            </div>
            <Swiper grabCursor="true" spaceBetween={10} slidesPerView="auto">
                {listMovie.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardFilm item={item} cate={cate} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ListMovie
