import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    placeholderImageView: {
        marginTop: 40
    },
    placeholderImage: {
        width: 195,
        height: 195
    },
    title: {
        fontFamily: 'futura',
        fontSize: 24,
        color: '#1f2427'
    },
    subtext: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        marginTop: 8,
        color: '#1f2427'
    },
    buttonExplore: {
        backgroundColor: '#cc8068',
        paddingHorizontal: 60,
        paddingVertical: 15,
        marginTop: 90
    },
    exploreBtnText: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 18,
        color: '#fff'
    }
});

class MyTrips extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholderImageView}>
                    <Image
                        style={styles.placeholderImage}
                        source={require('../../../assets/placeholder_mytrips.png')}
                    />
                </View>
                <Text style={styles.title}>You have no upcoming trips</Text>
                <Text style={styles.subtext}>Discover your next experience</Text>
                <TouchableOpacity style={styles.buttonExplore}>
                    <Text style={styles.exploreBtnText}>Start Exploring</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default MyTrips;
