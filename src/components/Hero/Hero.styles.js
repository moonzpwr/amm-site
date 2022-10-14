import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    marginTop: 108,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 60,
    letterSpacing: '0.07em',
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  titleContainer: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 25,
    width: 320,
    letterSpacing: '0.07em',
  },
  subTitle: {
    margin: '28px 0 110px 0',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '100%',
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '1s',
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
    marginBottom: 150,
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '1.5s',
    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  ribbonContainer: {
    position: 'relative',
  },
  blackRibbon: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: -25,
    bottom: 35,
    width: 628,
    height: 29,
    transform: 'rotate(-8deg)',
    backgroundColor: COLORS.BLACK.PRIMARY,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '130%',
    letterSpacing: '0.07em',
    color: COLORS.WHITE,
    zIndex: 5,
    whiteSpace: 'nowrap',
  },
  whiteRibbon: {
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: -30,
    bottom: 20,
    transform: 'rotate(4deg)',
    width: 628,
    height: 29,
    backgroundColor: COLORS.WHITE,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '130%',
    letterSpacing: '0.07em',
    color: COLORS.BLACK.PRIMARY,
    zIndex: 4,
  },
});

