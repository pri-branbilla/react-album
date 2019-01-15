import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Header = (props) => (
    <View
        style={styles.container}
    >
        <Text
            style={styles.text}
        >
            {props.text}
        </Text>
    </View>
)

export default Header