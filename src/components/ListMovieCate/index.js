import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ListMovieCate.module.scss'
import CardFilm from '../CardFilm'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import Button from '../Button'

const cx = classNames.bind(styles)

function ListMovieCate({ cate }) {
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const { keyword } = useParams()

    useEffect(() => {
        const getList = async () => {
            let response = null
            if (keyword === undefined) {
                const params = { page }
                switch (cate) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, params)
                        break
                    case category.tv:
                        response = await tmdbApi.getTvList(tvType.popular, params)
                        break
                    default:
                        console.log('Error')
                }
            } else {
                const params = {
                    query: keyword,
                    page,
                }
                response = await tmdbApi.search(cate, params)
            }
            setMovieList(response.results)
            setTotalPage(response.total_pages)
        }

        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cate, keyword])

    const handleLoadMore = async () => {
        let response = null
        if (keyword === undefined) {
            const params = { page: page + 1 }
            switch (cate) {
                case category.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, params)
                    break
                case category.tv:
                    response = await tmdbApi.getTvList(tvType.popular, params)
                    break
                default:
                    console.log('Error')
            }
        } else {
            const params = {
                query: keyword,
                page: page + 1,
            }
            response = await tmdbApi.search(cate, params)
        }
        setMovieList([...movieList, ...response.results])
        setPage(page + 1)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-item')}>
                {movieList.map((item, i) => (
                    <div key={i}>
                        <CardFilm item={item} cate={cate} />
                    </div>
                ))}
            </div>
            {page < totalPage ? (
                <Button outline small onClick={handleLoadMore}>
                    Load more
                </Button>
            ) : null}
        </div>
    )
}

export default ListMovieCate
