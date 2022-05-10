import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../components/Button/CustomButton';
const SettingsScreen = () => {
  const fall = new Animated.Value(1);
  const sheetRef = React.useRef(null);
  const {control} = useForm();
  const [isSalesEnabled, setIsSalesEnabled] = useState(false);
  const SalesSwitch = () => setIsSalesEnabled(previousState => !previousState);
  const [isNewArrivals, setIsNewArrivals] = useState(false);
  const ArrivalsSwitch = () =>
    setIsNewArrivals(previousState => !previousState);
  const [isDeliveryStatus, setIsDeliveryStatus] = useState(false);
  const DeliveryStatusSwitch = () =>
    setIsDeliveryStatus(previousState => !previousState);
  const renderContent = () => (
    <View style={styles.bottomSheetStyle}>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.panelTitle}>Password Change</Text>
        </View>
        <CustomInput
          name="Old Password"
          control={control}
          placeholder="Old Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <CustomInput
          name="New Password"
          control={control}
          placeholder="New Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <View style={{marginVertical: 15}}>
          <CustomInput
            name="Repeat New Password"
            control={control}
            placeholder="Repeat New Password"
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
            }}
          />
        </View>
        <CustomButton text="SAVE PASSWORD" />
      </View>
    </View>
  );
  return (
    <View style={styles.root}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[472, 0]}
        initialSnap={1}
        borderRadius={30}
        renderContent={renderContent}
        callbackNode={fall}
      />
      <CustomHeader name="search" />
      <Animated.View
        style={{
          opacity: Animated.add(0.6, Animated.multiply(fall, 1.0)),
        }}>
        <View style={styles.contianer}>
          <Text style={styles.HeaderTitle}>Settings</Text>

          <Text style={styles.subTitle}>Personal Information</Text>
          <CustomInput
            name="Full name"
            control={control}
            placeholder="Full name"
            rules={{
              required: 'Full name is required',
              minLength: {
                value: 8,
                message: 'Full name should be at least 3 characters long',
              },
            }}
          />
          <View style={{marginTop: 15}}>
            <CustomInput
              name="Date of Birth"
              control={control}
              placeholder="Date of Birth"
              rules={{
                required: 'Date of Birthis required',
                minLength: {
                  value: 8,
                  message: 'Full name should be at least 3 characters long',
                },
              }}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.subTitle}>Password</Text>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
              <Text style={styles.text}>Change</Text>
            </TouchableOpacity>
          </View>
          <CustomInput
            name="Password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
            }}
          />
          <Text style={styles.subTitle}>Notifications</Text>
          <View style={styles.notificationsContainer}>
            <Text style={styles.notifText}>Sales</Text>
            <Switch
              trackColor={{false: '##ABB4BD', true: '#3e3e3e'}}
              thumbColor={isSalesEnabled ? '#55D85A' : '#ABB4BD'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={SalesSwitch}
              value={isSalesEnabled}
            />
          </View>
          <View style={styles.notificationsContainer}>
            <Text style={styles.notifText}>New arrivals</Text>
            <Switch
              trackColor={{false: '##ABB4BD', true: '#3e3e3e'}}
              thumbColor={isNewArrivals ? '#55D85A' : '#ABB4BD'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={ArrivalsSwitch}
              value={isNewArrivals}
            />
          </View>
          <View style={styles.notificationsContainer}>
            <Text style={styles.notifText}>Delivery status changes</Text>
            <Switch
              trackColor={{false: '##ABB4BD', true: '#3e3e3e'}}
              thumbColor={isDeliveryStatus ? '#55D85A' : '#ABB4BD'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={DeliveryStatusSwitch}
              value={isDeliveryStatus}
            />
          </View>
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
  contianer: {marginHorizontal: 15},
  HeaderTitle: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    marginBottom: 5,
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
    marginVertical: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  notificationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  notifText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  bottomSheetStyle: {
    backgroundColor: '#1E1F28',
    height: 450,
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
  SizeText: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    marginLeft: 15,
  },
  SizeIcon: {
    marginRight: 15,
  },
  forgotPasswordText: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    marginVertical: 10,
  },
});

export default SettingsScreen;
