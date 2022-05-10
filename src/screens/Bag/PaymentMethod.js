import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useForm} from 'react-hook-form';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import chip from '../../assets/images/logo/chip.png';
import mastercard from '../../assets/images/logo/Mastercard-Logo-PNG10.png';
import Visacard from '../../assets/images/logo/Visa.png';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';

const PaymentMethod = () => {
  const fall = new Animated.Value(1);
  const sheetRef = React.useRef(null);
  const {control} = useForm();
  const renderContent = () => (
    <View style={styles.bottomSheetStyle}>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.panelTitle}>Add new card</Text>
        </View>
        <CustomInput
          name="Name on card"
          control={control}
          placeholder="Name on card"
          rules={{
            required: 'Name on card is required',
            minLength: {
              value: 4,
              message: 'Name on card should be at least 4 characters long',
            },
          }}
        />
        <CustomInput
          name="Card number"
          control={control}
          placeholder="Card number"
          rules={{
            required: 'Card number is required',
            minLength: {
              value: 16,
              message: 'Card number should be at least 16 characters long',
            },
          }}
        />
        <CustomInput
          name="Expire Date"
          control={control}
          placeholder="Expire Date"
          rules={{
            required: 'Expire Date is required',
          }}
        />

        <CustomInput
          name="CVV"
          control={control}
          placeholder="CVV"
          rules={{
            required: 'CVV is required',
            minLength: {
              value: 3,
              message: 'CVV should be at least 3 characters long',
            },
          }}
        />
        <CustomCheckBox text="Use as default payment method" />
        <View style={{marginTop: 20}}></View>
        <CustomButton
          text="ADD CARD"
          onPress={() => console.warn('add card pressed')}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.root}>
      <CustomHeader text="Paymen methods" />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[572, 0]}
        initialSnap={1}
        borderRadius={30}
        renderContent={renderContent}
        callbackNode={fall}
      />
      <Animated.View
        style={{
          opacity: Animated.add(0.6, Animated.multiply(fall, 1.0)),
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Your payment cards</Text>
          <View style={styles.paymentCardContainer}>
            <View style={{marginHorizontal: 25, marginVertical: 35}}>
              <Image source={chip} style={styles.chipimage} />
              <Text style={styles.paymentCardNumber}>
                * * * * * * * * * * * * 3947
              </Text>
              <View style={styles.paymentCardInfoContainer}>
                <View style={{width: '60%'}}>
                  <View style={styles.paymentCardTitleContainer}>
                    <Text style={styles.paymentCardTitle}>
                      Card Holder Name
                    </Text>
                    <Text style={styles.paymentCardTitle}>Expiry Date</Text>
                  </View>
                  <View style={styles.paymentCardTextContainer}>
                    <Text style={styles.paymentCardText}>Jennyfer Doe</Text>
                    <Text style={styles.paymentCardText}>05/23</Text>
                  </View>
                </View>
                <Image source={mastercard} style={styles.mastercardstyle} />
              </View>
            </View>
          </View>
          <CustomCheckBox text="Use as default payment method" />
          <View style={styles.visaCardContainer}>
            <View style={{marginHorizontal: 25, marginVertical: 20}}>
              <View style={styles.visaImageContainer}>
                <Image source={Visacard} style={styles.visa} />
              </View>
              <Text style={styles.visaCardNumber}>
                * * * * * * * * * * * * 4546
              </Text>
              <Image source={chip} style={styles.chipimage} />
              <View style={styles.visaCardInfoContainer}>
                <View style={styles.visaCardTitleContainer}>
                  <Text style={styles.visaCardTitle}>Card Holder Name</Text>
                  <Text style={styles.visaCardText}>Jennyfer Doe</Text>
                </View>
                <View style={styles.visaCardTextContainer}>
                  <Text style={styles.visaCardTitle}>Expiry Date</Text>
                  <Text style={styles.visaCardText}>11/22</Text>
                </View>
              </View>
            </View>
          </View>
          <CustomCheckBox text="Use as default payment method" />
          <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
            <View style={styles.addButtonContainer}>
              <View style={styles.addButton}>
                <Text style={styles.plus}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  container: {
    marginHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paymentCardContainer: {
    width: '100%',
    height: 216,
    backgroundColor: '#2A2C36',
    borderRadius: 8,
    marginTop: 30,
  },
  chipimage: {
    width: 32,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  paymentCardNumber: {
    fontSize: 24,
    fontFamily: 'Metropolis-regular',
    color: 'white',
    marginBottom: 40,
  },
  paymentCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentCardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentCardTitle: {
    fontSize: 10,
    fontFamily: 'Metropolis-regular',
    color: 'white',
  },
  paymentCardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentCardText: {
    fontSize: 14,
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  mastercardstyle: {
    width: 37,
    height: 30,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: 'white',
    marginLeft: 15,
  },
  addButtonContainer: {
    alignItems: 'flex-end',
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 30,
    lineHeight: 0,
    letterSpacing: 0,
    bottom: 2,
  },
  visaCardContainer: {
    width: '100%',
    height: 216,
    backgroundColor: '#EF3651',
    borderRadius: 8,
    marginTop: 30,
  },

  visaCardNumber: {
    fontSize: 24,
    fontFamily: 'Metropolis-regular',
    color: 'white',
    marginBottom: 10,
  },
  visaCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  visaCardTitleContainer: {
    justifyContent: 'space-between',
  },
  visaCardTitle: {
    fontSize: 10,
    fontFamily: 'Metropolis-regular',
    color: 'white',
    marginBottom: 10,
  },
  visaCardTextContainer: {
    justifyContent: 'space-between',
  },
  visaCardText: {
    fontSize: 14,
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  visaImageContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  visa: {
    width: 50,
    height: 16,
    resizeMode: 'contain',
  },
  bottomSheetStyle: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#ABB4BD',
    marginBottom: 10,
    marginTop: 15,
  },
  panelTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Metropolis-Bold',
    marginTop: 5,
    marginBottom: 10,
  },
  panelSizeBox: {
    height: 40,
    width: 100,
    borderColor: '#ABB4BD',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 9,
  },
  panelSizeBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  SizeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    height: 48,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: '#ABB4BD',
  },
  header: {
    marginHorizontal: 15,
  },
});

export default PaymentMethod;
