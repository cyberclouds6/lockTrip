import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'stretch',
        backgroundColor: '#000',
      },
      chatToolbar: {
        backgroundColor: '#f0f1f3'
      },
      listBg: {
        backgroundColor: '#f0f1f3'
      },
      rowStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 40
      },
      imageStyle: {
        height: 40,
        width: 40,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 40 / 2
      },
      viewStyle: {
        flex: 1,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 3,
        backgroundColor: 'white'
      },
      listChild: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 12,
        padding: 5,
        margin: 10,
        color: '#1f2427'
      },
      rowStyleSender: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
      },
      imageStyleSender: {
        height: 40,
        width: 40,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 40 / 2
      },
      viewStyleSender: {
        flex: 1,
        marginLeft: 40,
        marginRight: 5,
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 15,
        backgroundColor: '#d97b61',
        borderColor: 'white'
      },
      listChildSender: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 12,
        padding: 5,
        margin: 10,
        color: 'white'
      },
      footerView: {
        height: 80,
        backgroundColor: '#f0f1f3',
        flexDirection: 'row',
        borderTopColor: '#cccccc',
        borderTopWidth: 1,
        alignItems: 'center'
      },
      footerInputText: {
        marginLeft: 10,
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#FDD7E4',
        flex: 1,
        borderRadius: 100,
        backgroundColor: 'white'
      },
      btn_camera: {},//To be used in future
      btn_gallery: {},//To be used in future
      btn_cameraImage: {
        height: 50,
        width: 50
      },
      btn_galleryImage: {
        height: 50,
        width: 50,
        marginRight: 10,
      },
      btn_backImage:{
        height: 28,
        width: 28,
        marginTop: 24,
        marginLeft: 16,
      }
});

export default styles;
