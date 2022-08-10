import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Logo from '../../images/logo.png'
import MenuItem from '../MenuItem'
import Search from '../Search'

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={Logo} alt="logo" />
            </div>
            <nav className={cx('header-nav')}>
                <MenuItem to="/" title="Home" />
                <MenuItem to="/movie" title="Movie" />
                <MenuItem to="/tv" title="Tv show" />
            </nav>
            <Search />
        </div>
    )
}

export default Header
