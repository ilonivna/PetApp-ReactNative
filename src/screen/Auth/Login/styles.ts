import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 18,
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
    borderRadius: 20,
    marginVertical: 4,
    paddingHorizontal: 24,

    paddingVertical: Platform.select({
      ios: 14,
      android: 12,
      default: 12,
    }),
  },
  input: {
    padding: 0,
  },
  letsgoBtn: {
    backgroundColor: '#7A71BA',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  letsgoText: {
    color: 'white',
  },
});
