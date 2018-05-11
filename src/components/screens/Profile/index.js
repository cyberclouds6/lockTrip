import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee'
    },
    card: {
        backgroundColor: '#d87a61',
        width: null,
        height: 180,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 15,
        elevation: 2
    },
    transparentLogoWrapper: {
        position: 'absolute',
        left: 5,
        bottom: 0,
        height: 105,
        width: 135,
    },
    logoTransparent: {
        height: 130,
        width: 140,
        opacity: 0.15
    },
    cardFAB: {
        position: 'absolute',
        right: 20,
        bottom: 25,
        height: 40,
        width: 40,
        backgroundColor: '#2a2a2a',
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center'
    },
    FAB: {
        fontFamily: 'FuturaStd-Light',
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 36
    },
    cardContentsWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    cardRowOne: {
        flex: 1
    },
    cardRowTwo: {
        flex: 1,
        justifyContent: 'center'
    },
    cardRowThree: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    cardLogo: {
        height: 50,
        width: 54,
    },
    cardNumber: {
        fontFamily: 'FuturaStd-Light',
        color: '#fff',
        fontWeight: '200'
    },
    cardPropertyName: {
        fontFamily: 'futura',
        fontSize: 11,
        color: '#fff',
        marginBottom: 5,
        opacity: 0.9
    },
    cardBalance: {
        fontFamily: 'futura',
        fontSize: 18,
        color: '#fff',
        fontWeight: '400'
    },
    copyAddress: {
        width: null,
        marginHorizontal: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8
    },
    copyAddressText: {
        fontFamily: 'FuturaStd-Light',
        fontWeight: '100',
        color: '#555',
        fontSize: 13
    },
    listItem: {
        flex: 1,
        alignContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    listItemNameWrapper: {
        marginTop: 25,
        marginBottom: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    listItemIconWrapper: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'flex-end',
        flexWrap: 'wrap',
    },
    listItemText: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        fontWeight: '100',
        opacity: 0.8
    },
    listItemIcon: {
        fontSize: 18,
        opacity: 0.8
    },
    usd: {
        fontFamily: 'FuturaStd-Light',
        color: '#d87a61',
        fontSize: 18,
        fontWeight: '100'
    },
    backButton: {
        height: 120,
        padding: 15,
        justifyContent: 'center'
    },
    backButtonIcon: {
        fontSize: 22
    },
    menuIcons:{
        width: '45%',
        height: '45%',
        alignItems: 'center',
        position: 'relative',
        margin: 0,
    },
    currencyText:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        color: '#cc8068',
        paddingTop: 20,
        paddingBottom: 20,
    }
});

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            cardNumber: 'c1aba770da035e4de24b86e6342314f3',
            balance: '0,035,974.23 LOC / $250',
            links: [
                {
                    key: 0,
                    name: 'View Profile',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                },
                {
                    key: 1,
                    name: 'Edit Profile',
                    route: require('../../../assets/icons/edit-profile.png'),
                    icon: 'user'
                },
                {
                    key: 2,
                    name: 'Notifications',
                    route: require('../../../assets/icons/notifications.png'),
                    icon: 'bell'
                },
                {
                    key: 3,
                    name: 'Payment Methods',
                    route: require('../../../assets/icons/payment.png'),
                    icon: 'wallet'
                },
                {
                    key: 4,
                    name: 'Currency',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                },
                {
                    key: 5,
                    name: 'Switch to Hosting',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'refresh'
                },
                {
                    key: 6,
                    name: 'Log Out',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                }
            ]
        }
    }

    componentDidMount() {

    }

    _keyExtractor = (item, index) => item.key;

    getIconJSX = (icon) => {
        if(icon) {
            if(icon === 'usd') {
                console.log('sanan')
                return <Text style={styles.usd}>USD</Text>
            }
            return console.log('sanan')
            // return <Image source={require('../../../../src/assets/icons/notifications.png')} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('EXPLORE')}>
                    {/* <Icon name="arrow-left-circle" style={styles.backButtonIcon}/> */}
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <View style={styles.transparentLogoWrapper}>
                                <Image
                                    style={styles.logoTransparent}
                                    source={require('../../../assets/logo_white.png')}
                                />
                            </View>
                            <View style={styles.cardFAB}>
                                <Text style={styles.FAB}>+</Text>
                            </View>
                            <View style={styles.cardContentsWrapper}>
                                <View style={styles.cardRowOne}>
                                    <Image
                                        style={styles.cardLogo}
                                        source={require('../../../assets/logo_white.png')}
                                    />
                                </View>
                                <View style={styles.cardRowTwo}>
                                    <Text style={styles.cardNumber}>{this.state.cardNumber}</Text>
                                </View>
                                <View style={styles.cardRowThree}>
                                    <Text style={styles.cardPropertyName}>Current Balance</Text>
                                    <Text style={styles.cardBalance}>{this.state.balance}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.copyAddress}>
                            <Text style={styles.copyAddressText}>Copy your wallet address to clipboard</Text>
                        </View>
                    </View>
                    <FlatList
                        data={this.state.links}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.listItem}>
                                    <View style={styles.listItemNameWrapper}>
                                        <Text style={styles.listItemText}>{item.name}</Text>
                                    </View>
                                    <View style={styles.listItemIconWrapper}>
                                    <Image 
                                        style={item.icon !== 'null' && styles.menuIcons}
                            
                                        source={item.icon !== 'null' && item.route}
                                    />
                                    <Text style={styles.currencyText}>{item.icon === 'null' & item.name === 'Currency'? 'USD' : ''}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Profile;
