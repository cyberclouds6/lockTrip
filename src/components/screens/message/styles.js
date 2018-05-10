import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'stretch',
        backgroundColor: '#000',
      },
      chatToolbar: {
        height: 60,
        flexDirection: 'column',
        backgroundColor: '#f0f1f3'
      },
      listBg: {
        backgroundColor: '#f0f1f3'
      },
      rowStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
      },
      imageStyle: {
        height: 50,
        width: 50,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 50 / 2
      },
      viewStyle: {
        marginTop: 10,
        flex: 1,
        marginLeft: 5,
        marginRight: 40,
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 3,
        backgroundColor: 'white'
      },
      listChild: {
        padding: 5,
        margin: 10,
        color: '#5e6163'
      },
      rowStyleSender: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
      },
      imageStyleSender: {
        height: 50,
        width: 50,
      },
      viewStyleSender: {
        flex: 1,
        marginLeft: 40,
        marginRight: 5,
        borderWidth: 1,
        marginBottom: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 20,
        backgroundColor: '#d97b61',
        borderColor: 'white'
      },
      listChildSender: {
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
});

export default styles;
