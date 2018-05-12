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
        marginHorizontal: 15,
    },

    InboxView: {
        flex: 1,
        backgroundColor: '#f0f1f3',
    },

    tr:{
        width: '100%',
        height: 'auto',
        paddingTop: 25,
        paddingBottom: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        paddingRight: 10,
    },
    trTopView:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },

    trImgView:{
        width: '18%',
    },
    trAvatar:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    
    messageBox:{
       width: '82%',
    },

    trBottomView:{
    },

    messageView:{
      height: 400,
      marginTop: 50
    },

    messageTitle:{
        fontFamily: 'futura',
        fontSize: 16,
       // color: '#DA7B61',
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },

    messageSubTitle:{
        //fontSize: Sizes.scale(12),
        //color: '#DA7B61',
        fontFamily: 'FuturaStd-Light',
        fontSize: 14,
        fontWeight: '200',
        lineHeight: 15,
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },
    messageValues:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 1,
        backgroundColor: 'transparent'
    },

    review:{
       color: '#a7c8c2'
    },

    discussion:{
        color: '#cc8068',
    },

    heading: {
        fontFamily: 'futura',
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        color:'#222'
    },
    subHeading:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 12,
        color:'#222'
    },
    mainMenu:{
        //alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: 'center',
    },

    message:{
       justifyContent: 'flex-start',
    },

    LogInButton: {
        height: 50,
        width: "50%",
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
    },

    btn_backImage:{
        height: 28,
        width: 28,
        marginTop: 24,
        marginLeft: 16,
        marginBottom: 20,
      },
      userView:{
          marginTop: 5,
          flex: 1,
          flexDirection: 'row',
      },
      leftView:{
        width: '65%',
      },
      rightView:{
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      messageTimeTitle:{
          fontFamily: 'FuturaStd-Light',
          fontSize: 14
      },
      lastView:{
        width: '5%',
        justifyContent: 'center'
      },
      statusView:{
          width: 10,
          height: 10,
          borderRadius: 10 / 2,
          backgroundColor: '#cc8068',
      },
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
            <View style={styles.chatToolbar}>
                
                <TouchableOpacity onPress={this.onBackPress}>
                    <Image style={styles.btn_backImage} source={require('../../../../src/assets/icons/icon-back-black.png')} />
                </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={[styles.mainMenu]}>
                        <Text style={[styles.heading]}>Inbox</Text>
                        <Text style={styles.subHeading}>You have 3 unread messages</Text>
                    </View>
                    <View style={styles.container}>
                        {
                            this.state.dataSource.map((item, index) => {
                                if(item.status !== "Review"){
                                    return (
                                        <TouchableOpacity style={[styles.tr]} key={index} onPress={()=> navigate('Chat')}>
                                            <View style={styles.trTopView}>
                                                <View style={styles.trImgView}>
                                                    <Image source={require('../../../assets/icons/receiverImage.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                                </View>
                                                <View style={[styles.messageBox]}>
                                                    <View style={[styles.userView]}>
                                                        <View style={[styles.leftView]}>
                                                            <Text style={[styles.messageTitle, item.status == "Confirmed" ? styles.discussion : styles.review]}>{item.user} - {item.status}</Text>
                                                        </View>
                                                        <View style={[styles.rightView]}>
                                                            <Text style={[styles.messageTimeTitle]}>10:05 am</Text>
                                                        </View>
                                                        <View style={[styles.lastView]}>
                                                            <View style={[styles.statusView]}></View>
                                                        </View>
                                                    </View>
                                                        
                                                    <Text style={[styles.messageSubTitle,{marginBottom:2, marginTop:5}]}>{item.date}</Text>
                                                    <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.trBottomView}>
                                                <Text style={[styles.messageValues,]}>{item.message}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }else{
                                    return (
                                        <View key={index} style={[styles.tr]}>
                                        <View style={styles.trTopView}>
                                            <View style={styles.trImgView}>
                                                <Image source={require('../../../assets/icons/senderImages.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                            </View>
                                                <View style={[styles.messageBox]}>
                                                    <Text style={[styles.messageTitle, styles.review]}>{item.user} - {item.status}</Text>
                                                    <Text numberOfLines={3} style={[styles.messageSubTitle,{marginBottom:2, marginTop:5}]}>{item.date}</Text>
                                                    <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.trBottomView}>
                                                <Text style={[styles.messageValues]}>{item.message}</Text>
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
    onBackPress = () => {
        this.props.navigation.navigate('PROFILE');
    }
}

export default Inbox;

