import { createStackNavigator, createTabNavigator, createDrawerNavigator } from "react-navigation"
import { App, App1, App2 } from "./App"

export const stack = createStackNavigator({
    screen1: App,
    screen2: App1,
})

export const tab = createTabNavigator({
    tab1: stack,
    tab2: App2
})

export default createDrawerNavigator({
    drawer1: App,
    drawer2: App1,
}, {
        drawerPosition: "right"
    })