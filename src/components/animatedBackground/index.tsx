// @ts-ignore
import bg from '../../assets/bg.webp'

import './styles.scss'

const AnimatedBackground = () => {
  return <div className='background' style={{ backgroundImage: `url(${bg})` }}></div>
}

export { AnimatedBackground }
