import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView  } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
//import Image from 'react-native-remote-svg';
//import GoBack from '../common/GoBack';
import { ListView  } from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';
import { getMyConversations, approveMessage, declineMessage } from '../../../utils/requester';

// TODO: Component styling to be kept as a separate file
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50
        //backgroundColor: '#DA7B61'
    },

    InboxView: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },

    tr:{
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },

    messageBox:{
       width: '80%'
    },

    messageView:{
      height: 400,
      marginTop: 50
    },

    messageTitle:{
        fontSize: 21,
        fontWeight: 500,
       // color: '#DA7B61',
        fontWeight: 'bold',
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },

    messageSubTitle:{
        //fontSize: Sizes.scale(12),
        //color: '#DA7B61',
        fontSize: 18,
        fontWeight: '200',
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },

    trImgView:{
        width: 90,
        marginBottom: '20%'
    },

    trAvatar:{
        height: 50,
        width: 50,
        left: 20,
        borderRadius: 25,
    },

    review:{
       color: '#aeebf2'
    },

    discussion:{
        color: '#DA7B61',
    },

    heading: {
        fontSize: 30,
        fontWeight: '400',
       // color: '#DA7B61',
        fontWeight: 'normal',
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },

    mainMenu:{
        //alignItems: 'center',
        marginTop: 80,
        justifyContent: 'center',
    },

    message:{
       justifyContent: 'flex-start',
    },

    LogInButton: {
        height: 50,
        width: 180,
        backgroundColor: '#DA7B61',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'FuturaStd-Light'
    }
});

const inbox = [
    {user: "Jesse", status: "Confirmed", time: "10:05 am", date: "Thu 25 Jan - Sat 27 Jan", venue: "Garden Laft Apartment", message: "Hi Jaime! I am going to be arriving in Florence on Thursday arround noon. Looking forward to meeting you! Jesse"},
    {user: "Taylor", status: "Discussion", time: "8:15 am", date: "Sat 3 Feb - Web 7 Feb", venue: "Crazy Bright Studio Apartment", message: "Hi Jaime! I am going to be arriving in Florence on Thursday arround noon. Looking forward to meeting you! Jesse"},
    {user: "Jeniffer", status: "Review", time: "Yesterday", date: "13 days left to review", venue: "Lovely City Center Apartment"}

    ]

class Inbox extends Component {
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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: inbox,
        };
    }

    getMyConversations = () => {
        getMyConversations()
            .then(res => {
                if(res) {
                    this.setState({
                        dataSource: res
                    });
                }
            })
            .catch(e => console.log(e));
    }

    approveMessage = (id) => {
        approveMessage(id)
            .then(res => {
                //Show success message
            })
            .catch(e => console.log(e));
    }

    declineMessage = (id) => {
        declineMessage(id)
            .then(res => {
                if(res) {
                    //Show success message
                }
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        // this.getMyConversations();

        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.InboxView}>
                <ScrollView>
                    <View style={[styles.mainMenu]}>
                        <Text style={[styles.heading]}>Inbox</Text>
                        <Text>You have 3 unread messages</Text>
                    </View>
                    <View style={styles.container}>
                        {
                            this.state.dataSource.map((item, index) => {
                                if(item.status !== "Review"){
                                    return (
                                        <TouchableOpacity style={[styles.tr]} key={index} onPress={()=> navigate('Chat')}>
                                            <View style={styles.trImgView}>
                                                <Image source={require('../../../assets/splash.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                            </View>
                                            <View style={[styles.messageBox]}>
                                                <Text style={[styles.messageTitle, item.status == "Confirmed" ? styles.discussion : styles.review]}>{item.user} - {item.status}</Text>
                                                <Text style={[styles.messageSubTitle]}>{item.date}</Text>
                                                <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                <Text style={[styles.messageSubTitle]}>{item.message}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }else{
                                    return (
                                        <View key={index} style={[styles.tr]}>
                                            <View style={styles.trImgView}>
                                                <Image source={require('../../../assets/splash.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                            </View>
                                            <View style={[styles.messageBox]}>
                                                <Text style={[styles.messageTitle, styles.review]}>{item.user} - {item.status}</Text>
                                                <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                <Text numberOfLines={3} style={[styles.messageSubTitle]}>{item.date}</Text>
                                                <TouchableOpacity onPress={() =>console.log('here')}>
                                                    <View style={styles.LogInButton}>
                                                        <Text style={styles.buttonText}>
                                                            Write Review
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Inbox;

