import React, { PureComponent } from 'react'
import { FlatList, Linking, Image } from 'react-native'
import Button from '../Button'
import Card from '../Card';
import CardSection from '../CardSection';
import ArtistCard from '../ArtistCard';
import styles from './styles'

class AlbumItem extends PureComponent {
    _keyExtractor = (item) => item.title

    openLink = (url) => Linking.openURL(url)

    renderItem = (item) => (
        <Card>
            <ArtistCard
                thumb={item.thumbnail_image}
                title={item.title}
                artist={item.artist}
            />
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.image }}
                />
            </CardSection>
            <Button
                onPress={() => this.openLink(item.url)}
                text="Buy now!"
            />
        </Card>
            
    )

    render = () =>
    <FlatList
        data={this.props.albums}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={this._keyExtractor}
    />
}

export default AlbumItem