import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi'
import styles from './Castlist.module.scss'

const cx = classNames.bind(styles)

function CastList({ id }) {
    const { category } = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, id)
            setCasts(res.cast.slice(0, 12))
        }
        getCredits()
    }, [category, id])

    return (
        <div className={cx('wrapper')}>
            <h2>Casts</h2>
            <div className={cx('list-cast')}>
                {casts.map((item) => (
                    <div key={item.cast_id} className={cx('cast')}>
                        <img src={tmdbApi.w500Image(item.profile_path)} alt="" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CastList
