import {Platform, StyleSheet} from 'react-native';
import {fonts} from '../../../constant/fonts';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontFamily: fonts.MontserratBlack,
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: fonts.MontserratRegular,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAE9FB',
    padding: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#F8F8F9',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    opacity: 0.7,
  },
  registerBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  titleCont: {
    margin: 24,
    gap: 8,
  },

  inputCont: {
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 24,
    paddingVertical: Platform.select({
      android: 12,
      ios: 14,
      default: 12,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    flex: 1,
  },
  letsgoBtn: {
    backgroundColor: '#7A71BA',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  letsgoText: {
    color: 'white',
  },
});
