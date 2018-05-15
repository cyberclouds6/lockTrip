import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { getTopHomes } from '../../../utils/requester';
import DateAndGuestPicker from '../../organisms/DateAndGuestPicker';
import SearchBar from '../../molecules/SearchBar';
import SmallPropertyTile from '../../molecules/SmallPropertyTile';
import SplashScreen from 'react-native-smart-splash-screen';


// TODO: move styles in separate file
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#f0f1f3'
    },
    searchAreaView: {
        width: '100%',
        height: 105,
        backgroundColor: '#f0f1f3',
        paddingTop: 40,
        paddingLeft: 17,
        paddingRight: 17,
    },
    sectionView: {
        width: '100%',
        paddingLeft: 17,
        paddingRight: 17
    },
    subtitleView: {
        width: '100%',
        paddingTop: 18,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: '#cc8068'
    },
    subtitleText: {
        fontSize: 16,
        fontFamily: 'FuturaStd-Light'
    },
    tilesView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    text: {
        color: '#000'
    },
    section1 : {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 18,
        marginRight: 18,
        },
    dateView:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    btnCheckInDate:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    btnCheckOutDate:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    btnGuests:{
        flex: 0.3,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    btn_text:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        color: '#1f2427',
        paddingTop: 10,
    },
    betweenButtons:{
        marginTop:8,
        marginBottom:8,
        width:1,
        backgroundColor: '#ccc'
    },
    btn_subtext:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 12,
        color: '#d97b61',
        paddingBottom: 10,
    },
    btnSettings:{
        flex: 0.25,
        marginLeft: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    btn_SettingImages:{
        height: 28,
        width: 28,
        marginTop: 12,
    },
    btnSearch:{
        margin: 10,
        marginLeft: 18,
        marginRight: 18,
        padding: 14,
        alignItems: 'center',
        backgroundColor: '#cc8068'
    },
    searchText:{

        fontFamily: 'FuturaStd-Light',
        fontSize: 20,
        color: '#fff',
    }
});


class Explore extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        })
    }

    static defaultProps = {
        navigation: {
            navigate: () => {}
        }
    }
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            search: '',
            checkInDate: 'Thu, 25 Jan',
            checkOutDate: 'Sat, 27 Jan',
            guests: 0,
            topHomes: null
        };
    }

    componentWillMount(){
        //Remove Splash
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 0,
            delay: 0,
        })
    }

    componentDidMount() {
        getTopHomes().then((topHomes) => {
            const truncated = topHomes.content.slice(0, 4);
            this.setState({ topHomes: truncated });
        });
    }

    onChangeHandler(property) {
        return (value) => {
            this.setState({ [property]: value });
        };
    }

    renderHomes() {
        return (
            <View style={styles.sectionView}>
                <View style={styles.subtitleView}>
                    <Text style={styles.subtitleText}>Popular Homes</Text>
                </View>

                <View style={styles.tilesView}>
                    { this.state.topHomes.map(listing => <SmallPropertyTile listingsType="homes" listing={listing} key={listing.id} />) }
                </View>
            </View>
        );
    }

    // TODO: a renderHotels method does not exist yet because backend does not yet have an endpoint to request popular hotels

    render() {
        const {
            search, checkInDate, checkOutDate, guests, topHomes
        } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.searchAreaView}>
                    <SearchBar
                        autoCorrect={false}
                        value={search}
                        onChangeText={this.onChangeHandler('search')}
                        placeholder="Discover your next experience"
                        placeholderTextColor="#767678"
                        leftIcon="search"
                    />
                </View>

                <View style={styles.section1}>
                    <View style={styles.dateView}>
                    <TouchableOpacity style={styles.btnCheckInDate}><Text style={styles.btn_text}>Check In</Text><Text style={styles.btn_subtext}>SelectDate</Text></TouchableOpacity>
                    <View style={styles.betweenButtons}></View>
                    <TouchableOpacity style={styles.btnCheckOutDate}><Text style={styles.btn_text}>Check Out</Text><Text style={styles.btn_subtext}>-----</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnGuests}><Text style={styles.btn_text}>Guests</Text><Text style={styles.btn_subtext}>------</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnSettings}><Image style={styles.btn_SettingImages} source={require('../../../../src/assets/icons/settings.png')} /></TouchableOpacity>
                </View>

                    <TouchableOpacity style={styles.btnSearch}><Text style={styles.searchText}>Search</Text></TouchableOpacity>
                {/* <ScrollView showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
                    <DateAndGuestPicker checkInDate={checkInDate} checkOutDate={checkOutDate} guests={guests} />
                    { topHomes ? this.renderHomes() : null }
                </ScrollView> */}

                {/* <TouchableOpacity onPress={() => {
                    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
                    this.props.navigation.navigate('Login');
                }}
                >
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

export default Explore;
