import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {backgroundColor: '#1E1F28', height: '100%'},

  root: {
    marginLeft: 15,
  },
  bgImage: {
    width: '100%',
    height: 240,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Metropolis-Regular',
    fontWeight: '800',
    position: 'absolute',
    color: 'white',
    top: 200,
    left: 15,
  },
  subtitleContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  subtitle: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
  },
  subtitleText: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
  },
  textContainer: {
    marginTop: 5,
    marginBottom: 20,
  },
  text: {
    color: '#ABB4BD',
    fontFamily: 'Metropolis-Regular',
  },
  productContainer: {
    marginRight: 15,
  },
  productImage: {},
  image: {
    borderRadius: 10,
    width: 148,
    height: 184,
    overflow: 'hidden',
  },
  saleContainer: {
    position: 'absolute',
    width: 40,
    height: 24,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
  },
  saleText: {
    color: 'white',
    fontSize: 11,
  },
  favIconContainer: {
    position: 'absolute',
    top: 163,
    left: 113,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginVertical: 8,
    marginRight: 4,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldprice: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  price: {
    color: 'red',
    fontSize: 14,
  },
  newContainer: {
    position: 'absolute',
    width: 40,
    height: 24,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#1E1F28',
  },
});

export default styles;
