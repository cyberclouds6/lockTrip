import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';

import AppLoading from '../components/app/AppLoading';

import Welcome from '../components/screens/Welcome';
import Login from '../components/screens/Login';
import CreateAccount from '../components/screens/CreateAccount';
import CreatePassword from '../components/screens/CreatePassword';
import Terms from '../components/screens/Terms';
import Inbox from '../components/screens/message/Inbox';
import Chat from '../components/screens/message/Chat';

import Explore from '../components/screens/Explore';
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
        initialRouteName: 'Chat',
        headerMode: 'none'
    }
);

export const MainNavigator = TabNavigator(
    {
        PROFILE: { screen: Explore },
        MESSAGES: { screen: Inbox },
        MY_TRIPS: { screen: Explore },
        FAVORITES: { screen: Explore },
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
        initialRouteName: 'Login'
    }
);
