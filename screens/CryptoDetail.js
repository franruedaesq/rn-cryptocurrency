import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from '../styles';

const CryptoDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CryptoDetail</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
            >
                <Text>Navigate to Transaction</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CryptoDetail;