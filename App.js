import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Hình ảnh bên trái */}
        <View style={styles.imageContainer}>
          <Image source={require('./assets/dt2.png')} style={styles.image} />
        </View>
        <Text style={styles.textInput}>Điên thoại Vsmart Joy3 hang chính hãng</Text>
      </View>

      <View style={styles.colorOptions}>
      <Text style={styles.textInput1}>Chọn một mã màu</Text>
        {/* Mã màu 1 */}
        <View style={[styles.colorOption, { backgroundColor: '#FF0000' }]}>
          <Text style={styles.colorText}>Red</Text>
        </View>
        {/* Mã màu 2 */}
        <View style={[styles.colorOption, { backgroundColor: '#00FF00' }]}>
          <Text style={styles.colorText}>Green</Text>
        </View>
        {/* Mã màu 3 */}
        <View style={[styles.colorOption, { backgroundColor: '#0000FF' }]}>
          <Text style={styles.colorText}>Blue</Text>
        </View>
        {/* Mã màu 4 */}
        <View style={[styles.colorOption, { backgroundColor: '#FFFF00' }]}>
          <Text style={styles.colorText}>Yellow</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="XONG" onPress={() => {}} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 190,
    height: 190,
  },
  inputContainer: {
    flex: 2,
    borderWidth: 1,
    padding: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding:7,
  },
  textInput1:{
    flex: 1,
    fontSize: 16,
    padding:7,
  },
  colorOptions: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10,
    backgroundColor:'#C0C0C0',
  },
  colorOption: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    fontSize: 12,
    color: '#fff',
  },
  buttonContainer: {
    borderRadius:5,
    marginBottom: 10,
  },
});