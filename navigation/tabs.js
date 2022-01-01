import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import {LinearGradient} from 'expo-linear-gradient';

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: "center",
                alignContent: "center",
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const Tabs = () => {

    function tabOptions(name, icon) {
        return {
            tabBarIcon: ({ focused }) => (
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image source={icon} resizeMode="contain" style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? COLORS.primary : COLORS.black
                    }} />
                    <Text
                        style={{
                            color: focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                        }}
                    >{name?.toUpperCase()}</Text>
                </View>
            )
        }
    }

    function floatingTab() {
        return {
            tabBarIcon: ({ focused }) => (
                <Image
                    source={icons.transaction}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.white
                    }}
                />
            ),
            tabBarButton: (props) => (
                <TabBarCustomButton 
                    {...props}
                />
            )
        }
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor:COLORS.white,
                    borderTopColor: "transparent",
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={tabOptions('Home', icons.home)}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options={tabOptions('Portfolio', icons.pie_chart)}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={floatingTab()}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options={tabOptions('Prices', icons.line_graph)}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={tabOptions('Settings', icons.settings)}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;