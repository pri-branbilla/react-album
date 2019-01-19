import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styles from './styles'

class CardSection extends PureComponent {
  render = () => (
    <View
      style={styles.container}
    >
      {this.props.children}
    </View>
  )
}

export default CardSection