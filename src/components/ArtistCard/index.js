import React, { PureComponent } from 'react'
import { Image, Text, View } from 'react-native'
import CardSection from '../CardSection'
import styles from './styles'

class ArtistCard extends PureComponent {
  render = () => {
    const {
        thumb,
        title,
        artist,
    } = this.props
    return (
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.image}
          source={{uri: thumb}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    )
  }
}

export default ArtistCard