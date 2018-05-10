import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView  } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
//import Image from 'react-native-remote-svg';
//import GoBack from '../common/GoBack';
import { ListView  } from 'react-native';
//import { GiftedChat } from 'react-native-gifted-chat';

// TODO: Component styling to be kept as a separate file
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50
        //backgroundColor: '#DA7B61'
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

    ApproveButton: {
        height: 50,
        width: 180,
        backgroundColor: '#DA7B61',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    DeclineButton: {
        height: 50,
        width: 180,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ApproveText: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'FuturaStd-Light'
    },

    DeclineText: {
        color: '#000',
        fontSize: 17,
        fontFamily: 'FuturaStd-Light'
    },

    buttonView: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        //paddingTop: '20'
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
            messages: []
        };
    }

    componentDidMount() {
        this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
    }
    render() {
       // const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View style={[styles.mainMenu]}>
            <View style={[styles.messageBox]}>
            <Text style={styles.DeclineText}>Conversation with Jesse</Text>
            <Text style={styles.DeclineText}>Garden Laft Apartment</Text>
            <Text style={styles.DeclineText}>Thu 25 Jan - Sat 27 Jan. 2 guest. $615</Text>
                <View style={[styles.buttonView]}>
                <TouchableOpacity onPress={() =>console.log('here')}>
                    <View style={styles.ApproveButton}>
                        <Text style={styles.ApproveText}>
                            Approve
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>console.log('here')}>
                    <View style={styles.DeclineButton}>
                        <Text style={styles.DeclineText}>
                            Decline
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.container}>
            </View>
            </View>
            </ScrollView>
        );
    }
}

export default Inbox;

