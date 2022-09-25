
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop: {
        alignItems: 'flex-start',
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    },
    credentials: {
        height: 40,
        width: 335,
        margin: 12,
        padding: 10,
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        borderRadius: 5,
        color: 'black'
    },
    CredentialsInput: {        
        backgroundColor: 'lightgray',        
        borderWidth: 1,
        fontWeight: 'normal'
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    button: {
        height: 50,
        padding: 5,
        backgroundColor: 'blue',
        justifyContent: "center",
    },
    buttonCamera: {
        height: 50,
        padding: 5,
        backgroundColor: 'blue',
        justifyContent: "center",        
    },
    image:{
        width: '95%',
        height: undefined,
        aspectRatio: 1,
    },
    item:{
        backgroundColor: 'lightgray',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemImage:{
        width: '60',
        height: undefined,
        aspectRatio: 1,
    },
    title:{
        fontSize: 13,
        color: "black",
        fontWeight: 'bold'
    },
    memoryTitle:{
        height: 'auto',
        margin: 4,
        padding: 3,
        fontSize: 15,
        color: "black",
        fontWeight: 'bold'
    },
    memoryDesc:{
        margin: 4,
        padding: 3,
        height: 60,
        fontSize: 11,
        color: "black",
        fontWeight: 'normal'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*(4/5),
    },
});

export default styles