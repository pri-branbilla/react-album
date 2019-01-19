import React, { PureComponent } from 'react'
import { TouchableOpacity, Linking, Text } from 'react-native'
import styles from './styles'

class Button extends PureComponent {
  openURL = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log("NOT SUPPORTED")
      } else {
        return Linking.openURL(url)
      }
    })
    .catch(error => console.error(error))
  }

  render = () => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button