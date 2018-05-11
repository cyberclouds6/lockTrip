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
        marginTop: 40,
        marginBottom: 15
    },
    placeholderImage: {
        width: 195,
        height: 195,
    },
    title: {
        color: '#1f2427',
        fontFamily: 'futura',
        fontSize: 24,
        textAlign: 'center',
        width: '90%'
    },
    subtext: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        marginTop: 20,
        width: '80%',
        color: '#8a8a8a',
        textAlign: 'center'
    },
    buttonDiscover: {
        backgroundColor: '#d87a61',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 30
    },
    discoverBtnText: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 18,
        color: '#fff'
    }
});

class Favorites extends Component {
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
                        source={require('../../../assets/placeholder_favorites.png')}
                    />
                </View>
                <Text style={styles.title}>You don't have any added destinations yet.</Text>
                <Text style={styles.subtext}>Explore thousands of locations and add your favorites here.</Text>
                <TouchableOpacity style={styles.buttonDiscover}>
                    <Text style={styles.discoverBtnText}>Discover your next experience</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Favorites;
