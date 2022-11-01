import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    marginTop: 28,
    width: '100%',
    

    '& label': {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '100%',
      color: COLORS.WHITE,
    },
  },
  contactInput: {
    border: 'none',
    padding: 15,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    color: COLORS.WHITE,

    borderBottom: `1px solid ${COLORS.GREY.PRIMARY}`,
    backgroundColor: COLORS.BLACK.PRIMARY,

    '&:hover, &:focus': {
      borderBottom: `1px solid ${COLORS.WHITE}`,
    }
  },
  submitBtn: {
    height: 50,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '100%',
    border: 'none',
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK.PRIMARY,
    cursor: 'pointer',

    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  successTitle: {
    textAlign: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    marginTop: 40,
  },
  successDescription: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '28px 0',
  },
  phoneContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    margin: '30px 0'
  },
  phoneIcon: {
    width: 32,
    fill: COLORS.WHITE,
    marginRight: 12,
  },
  successRequest: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '0 0 55px 0'
  },
  foxLogo: {
    width: 160,
    margin: '0 auto'
  }
});

