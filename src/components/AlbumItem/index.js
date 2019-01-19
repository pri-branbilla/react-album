import React, { PureComponent } from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'

class AlbumItem extends PureComponent {
    _keyExtractor = (item) => item.title

    renderItem = (item) => (
        <View
            style={styles.container}
        >
            <Text>{item.title}</Text>
            <Text>{item.artist}</Text>
            <Text>{item.image}</Text>
            <Text>{item.thumbnail_image}</Text>
            <Text>{item.url}</Text>
        </View>
    )

    render = () =>
    <FlatList
        data={this.props.albums}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={this._keyExtractor}
    />
}

export default AlbumItem