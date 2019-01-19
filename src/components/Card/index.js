import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

class Card extends PureComponent {
  render = () => (
    <View
      style={styles.container}
    >
      {this.props.children}
    </View>
  )
}

export default Card