import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Icon from  '../icon/Icon'

function Header () {
  return (

  <div className={styles.header}>
    <Title>Jogo da Velha</Title>
    <Subtitle>Criado por Lucas Mizuta</Subtitle>
  <div className={styles.iconContent}>
    <Icon iconName='github' size='30px' link="https://github.com/l-mizuta" />
  </div>
  </div>

  )
}

export default Header