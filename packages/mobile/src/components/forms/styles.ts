import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  welcomeButton: {
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'normal',
    width: width * 0.65,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  bookingButton: {
    width: 150,
    padding: 0,
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },

  input: {
    width: width * 0.65,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});

export default styles;
