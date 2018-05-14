import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';

import AppLoading from '../components/app/AppLoading';

import Welcome from '../components/screens/Welcome';
import Login from '../components/screens/Login';
import CreateAccount from '../components/screens/CreateAccount';
import CreatePassword from '../components/screens/CreatePassword';
import Terms from '../components/screens/Terms';
import Inbox from '../components/screens/Chat/Inbox';
import Chat from '../components/screens/Chat/Chat';

import Profile from '../components/screens/Profile/index';
import Favourites from '../components/screens/Favorites/index';
import MyTrips from '../components/screens/MyTrips/index';

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
