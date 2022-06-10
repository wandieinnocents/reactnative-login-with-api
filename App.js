import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TextInput
        style={{
          height: 40, width: '90%',
          marginTop: 20,
          backgroundColor: '#4F8EF7',
          color: '#ffffff',
          textAlign: 'center', alignItems: 'center'

        }}
        placeholder="email"
      />

      <TextInput
        style={{
          height: 40, width: '90%',
          marginTop: 20,
          backgroundColor: '#4F8EF7',
          color: '#ffffff',
          textAlign: 'center', alignItems: 'center'

        }}
        placeholder="password"
      />

      {/* button */}
      <TouchableOpacity
        // onPress={onPress}
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>REGISTER</Text>
      </TouchableOpacity>


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
    borderRadius: 30,
    paddingVertical: 10,
    width: '60%',
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

});
