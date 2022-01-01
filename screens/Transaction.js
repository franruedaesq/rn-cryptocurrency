import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { CurrencyLabel, HeaderBar, TextButton, TransactionHistory } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';
import { styles } from '../styles';

const Transaction = ({ route }) => {
    const [selectedCurrency, setSelectedCurrency] = React.useState(null);

    React.useEffect(() => {
        const { currency } = route.params;
        setSelectedCurrency(currency);
    }, [])

    function renderTrade() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <CurrencyLabel 
                    icon={selectedCurrency?.image}
                    currency={selectedCurrency?.currency}
                    code={selectedCurrency?.code}
                />
                <View
                    style={{
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding * 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h2 }}>{selectedCurrency?.wallet.crypto}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{selectedCurrency?.wallet.value}</Text>
                </View>

                <TextButton
                    label="Trade"
                    onPress={() => console.log('Trade')}
                />
            </View>
        )
    }

    function renderTransactionHistory() {
        return (
            <TransactionHistory 
                customContainerStyle={{
                    ...styles.shadow
                }}
                history={selectedCurrency?.transactionHistory}
            />
        )
    }

    return (
       <SafeAreaView
        style={{
            flex: 1,
            paddingTop: 40,
        }}
       >
           <HeaderBar right={false}/>
           <ScrollView>
               <View
                style={{
                    flex: 1,
                    paddingBottom: SIZES.padding
                }}
               >
                   {renderTrade()}
                   {renderTransactionHistory()}
               </View>
           </ScrollView>
       </SafeAreaView>
    )
}

export default Transaction;