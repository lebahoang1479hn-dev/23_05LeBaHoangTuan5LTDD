import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* View 1 */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/dt2.png')} style={styles.image} />
      </View>

      {/* View 2 */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Điện thoại Vsmart Joy3 - Hàng chính hãng</Text>
        {/* Đánh giá 5 sao */}
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Image
                key={star}
                source={require('./assets/star.png')}
                style={styles.star}
              />
            ))}
            <Text style={styles.text}>(Xem 828 đánh giá)</Text>   
          </View>
        </View>
        <View style={styles.starContainer}>
          <Text style={styles.text}>1.799.999đ  </Text>
          <Text style={{ textDecorationLine: 'line-through' }}>1.999.999đ</Text>
        </View>
        <Text style={styles.text1}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>

      {/* View 3 */}
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="4 Màu - Chọn màu"
          placeholderTextColor="#888"
        />
        {/* Icon */}
        <Image source={require('./assets/icon1.png')} style={styles.icon} />
      </View>

      {/* View 4 */}
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Chọn mua</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    //padding: ,
    marginTop:10,
    fontWeight:'bold',
  },
  text: {
    fontSize: 18,
  },
  text1:{
    fontSize : 18,
    color:'#FF0000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  star: {
    width: 25,
    height: 25,
    marginRight: 2,
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 50,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});