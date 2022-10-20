import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    margin: '0 0 20px 0',
  },
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    margin: '0 0 55px 0',
  },
  radioContainer: {
    display: 'flex',
    padding: '0 1px',
    marginBottom: 55, 
    justifyContent: 'space-between',
  },
  calsulatorForm: {
    marginBottom: 130,
    height: 400,
  },
  typeOfContent: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  },
  radioLabel:{ 
    display: 'block',
    position: 'relative',
    paddingLeft: 35,
    marginBottom: 12,
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    letterSpacing: '0.07em',

    '&:hover input ~ span': {
      border: `1px solid ${COLORS.WHITE}`,
    },

    '& input:checked ~ p': {
      display: 'block',
    },

    '& input:checked ~ span:after': {
      display: 'block',
    },

    '& span:after': {
      left: 9,
      top: 5,
      width: 5,
      height: 10,
      border: `1px solid ${COLORS.WHITE}`,
    }
  },
  formTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '100%',
    marginBottom: 8,
  },
  checkmarkInner: {
    margin: 0,
    width: 12,
    height: 12,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: 6,
    left: 6,
    display: 'none',
    pointerEvents: 'none',
  },
  checkmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.GREY.PRIMARY}`,

    '&:after': {
      content: '"',
      position: 'absolute',
      display: 'none',
    }
  },
  submitBtn: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    color: COLORS.BLACK.PRIMARY,
    backgroundColor: COLORS.WHITE,
    border: 'none',
    padding: '16px 66px',
    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  calculatedBlock: {
    padding: 16,
    border: `1px solid ${COLORS.GREY.PRIMARY}`,
    width: '100%',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  finalPrice: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: '100%',
    letterSpacing: '0.07em',
    marginBottom: 12,
  },
  disclaimerTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',
  },
  videoOptionsContainer: {
    '& p': {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  videoOptionsValue: {
    width: 152,
    display: 'inline-block',
    textTransform: 'capitalize',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  },
  optionsValues: {
    margin: 0,
    width: 152,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  },
  videoOptionsTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',
    width: 72,
  },
  videoDisclaimer: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  },
  modalBtn: {
    height: 50,
    fontFamily: 'Roboto, sans-serif',
    padding: '16px 36px',
    alignSelf: 'center',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '100%',
    border: 'none',
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK.PRIMARY,
    cursor: 'pointer',
    margin: '0 auto',
    animationDelay: '1.5s',
    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
});
