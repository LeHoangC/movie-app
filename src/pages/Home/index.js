import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import HeroSlide from '../../components/HeroSlide'
import ContainerList from '../../components/ContainerList'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <HeroSlide />
            <ContainerList />
        </div>
    )
}

export default Home
