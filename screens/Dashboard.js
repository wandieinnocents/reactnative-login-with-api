import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Dashboard() {
    return (
        <View style={styles.container}>

            {/* icon */}
            <Image source={{ uri: 'https://www.obg.eu.com/img/technologies/react.png' }}
                style={{ width: 200, height: 200 }} />

            <Text>
                WELCOME USER
            </Text>
            <Text>
                This is your dashboard ,
            </Text>

            <View style={styles.flexLogoutProfile}>
                {/* logout */}
                <View style={styles.logout}>
                    {/* button */}
                    <TouchableOpacity
                        // onPress={onPress}
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.profile}>
                    {/* profile */}

                    {/* button */}
                    <TouchableOpacity
                        // onPress={onPress}
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnText}>PROFILE</Text>
                    </TouchableOpacity>
                </View>


            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // login button
    btnContainer: {
        elevation: 5,
        backgroundColor: "#4F8EF7",
        // borderRadius: 30,
        paddingVertical: 10,
        width: '90%',
        paddingHorizontal: 12,
        marginTop: 20,
    },
    //login Button text
    btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    //flex
    flexLogoutProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign:'center',
        justifyContent:'center'
    },
    // logout
    logout: {
        flex: 1,
        backgroundColor: 'green',
        alignItems:"center",
        justifyContent:'center',

    },
    profile: {
        flex: 1,
        backgroundColor: 'red'

    },

});
