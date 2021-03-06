import { StyleSheet } from 'react-native'
import VictoryCustomTheme from "./VictoryCustomTheme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },
  });

export { VictoryCustomTheme, styles }