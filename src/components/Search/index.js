import { useNavigate } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
    const navigate = useNavigate()

    const [keyword, setKeyword] = useState('')

    const handleSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/movie/search/${keyword}`)
            setKeyword('')
        }
    }, [keyword, navigate])

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault()
            if (e.keyCode === 13) {
                handleSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)

        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    }, [handleSearch])

    return (
        <div className={cx('search')}>
            <div className={cx('content')}>
                <input
                    className={cx('search-input')}
                    placeholder="Search"
                    value={keyword}
                    onChange={({ target }) => setKeyword(target.value)}
                />
                <span className={cx('icon')} onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>
        </div>
    )
}

export default Search
