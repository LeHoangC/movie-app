import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary, outline, children, small, onClick = () => {} }) {
    let Comp = 'button'
    const props = { onClick }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', { primary, outline, small })

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    )
}

export default Button
