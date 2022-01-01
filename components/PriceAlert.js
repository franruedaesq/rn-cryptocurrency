import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { styles } from '../styles'

const PriceAlert = ({ customContainerStyle }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.padding * 4.5,
                marginHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                ...customContainerStyle,
                ...styles.shadow

            }}
        >
            <Image
                source={icons.notification_color}
                style={{
                    height: 30,
                    width: 30
                }}
            />

            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                }}
            >
                <Text style={{ ...FONTS.H3 }}>Set Price Alert</Text>
                <Text style={{ ...FONTS.body4 }}>Get notifed when your coins are moving</Text>
            </View>
            <Image 
                source={icons.right_arrow}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray
                }}
            />
        </TouchableOpacity>
    )
}

export { PriceAlert }
