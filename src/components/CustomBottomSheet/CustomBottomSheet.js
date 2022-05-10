import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const CustomBottomSheet = ({sheetRef, fall, renderContent}) => {
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[380, 0]}
      initialSnap={1}
      borderRadius={30}
      renderContent={renderContent}
      callbackNode={fall}
      enabledInnerScrolling={false}
    />
  );
};
const styles = StyleSheet.create({
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
  text: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
  },
});
export default CustomBottomSheet;
