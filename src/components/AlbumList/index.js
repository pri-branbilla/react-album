import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AlbumItem from '../AlbumItem'
import axios from 'axios'

class AlbumList extends Component {
    state = {
        albums: [],
    }

    componentDidMount () {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({
                    albums: response.data,
                })
            })
    }

    renderAlbums = () => (
        <AlbumItem
            albums={this.state.albums}
        />
    )

    render() {
        console.log(this.state.albums)
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList