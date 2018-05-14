import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';

import AppLoading from '../components/app/AppLoading';

import Welcome from '../components/screens/welcome';
import Login from '../components/screens/login';
import CreateAccount from '../components/screens/createAccount';
import CreatePassword from '../components/screens/createPassword';
import Terms from '../components/screens/terms';
import Inbox from '../components/screens/message/Inbox';
import Chat from '../components/screens/message/Chat';

import Profile from '../components/screens/profile/index';
import Favourites from '../components/screens/favorites/index';
import MyTrips from '../components/screens/myTrips/index';

import Explore from '../components/screens/explore';
import NavTabBar from '../components/organisms/NavTabBar';


export const LoginNavigator = StackNavigator(
    {
        Welcome: { screen: Welcome },
        Login: { screen: Login },
        CreateAccount: { screen: CreateAccount },
        CreatePassword: { screen: CreatePassword },
        Terms: { screen: Terms },
        Chat: { screen: Chat },
        Inbox: { screen: Inbox },
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none'
    }
);

export const MainNavigator = TabNavigator(
    {
        PROFILE: { screen: Profile },
        MESSAGES: { screen: Inbox },
        MY_TRIPS: { screen: MyTrips },
        FAVORITES: { screen: Favourites },
        EXPLORE: { screen: Explore }
    },
    {
        initialRouteName: 'EXPLORE',
        tabBarComponent: NavTabBar,
        tabBarPosition: 'bottom'
    }
);

export const AppNavigator = SwitchNavigator(
    {
        AppLoading,
        Login: LoginNavigator,
        App: MainNavigator
    },
    {
        initialRouteName: 'App'
    }
);
