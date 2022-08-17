import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import tmdbApi, { movieType } from '../../api/tmdbApi'
import 'swiper/css'
import classNames from 'classnames/bind'
import styles from './HeroSlide.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function HeroSlide() {
    const [list, setList] = useState([])
    useEffect(() => {
        const params = {}
        const fetch = async () => {
            try {
                const res = await tmdbApi.getMovieList(movieType.upcoming, params)
                setList(res.results.slice(0, 20))
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
            >
                {list.map((item) => (
                    <SwiperSlide key={item.id}>
                        {() => (
                            <div
                                className={cx('slide')}
                                style={{
                                    backgroundImage: `url(${tmdbApi.originalImage(
                                        item.backdrop_path
                                    )})`,
                                }}
                            >
                                <div className={cx('slide-detail')}>
                                    <div className={cx('content')}>
                                        <div className={cx('slide-detail-content')}>
                                            <h2>{item.title}</h2>
                                            {item.overview.length > 200 ? (
                                                <p>{item.overview.slice(0, 200) + '...'}</p>
                                            ) : (
                                                <p>{item.overview}</p>
                                            )}
                                        </div>
                                        <div className={cx('slide-detail-btn')}>
                                            <Button primary to={`/movie/${item.id}`}>
                                                Watch now
                                            </Button>
                                            <Button outline>Watch trailer</Button>
                                        </div>
                                    </div>
                                    <div className={cx('poster')}>
                                        <img src={tmdbApi.w500Image(item.poster_path)} alt="" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlide
