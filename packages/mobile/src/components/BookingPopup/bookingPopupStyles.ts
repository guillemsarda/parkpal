import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    justifyContent: 'center',
  },

  slideContent: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  renterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },

  name: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'InterMedium',
    fontWeight: 'normal',
  },

  number: {
    color: 'black',
  },

  price: {
    color: '#7145D6',
    marginLeft: 'auto',
    fontSize: 30,
    fontFamily: 'InterMedium',
  },

  location: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  addressLine: {
    color: 'black',
    marginBottom: 10,
  },

  icon: {
    marginRight: 5,
  },

  wrapper: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 30,
  },

  calendar: {
    flexDirection: 'row',
  },

  date: {
    width: 110,
  },

  time: {
    width: 80,
  },
});

export default styles;