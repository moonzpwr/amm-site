import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
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
  // qwert: {
  //   width: 1440,
  //   height: 728,
  //   position: 'relative'
  // },
  // elipse: {
  //   zIndex: 3,
  //   position: 'absolute',
  //   backgroundColor: '#DC1515',
  //   width: 200,
  //   height:337,
  //   borderRadius: '50%',
  //   filter: 'blur(100px)',
  //   left: '37.5%',
  //   right: '48.61%',
  //   top: '35.71%',
  //   bottom: '17.99%',
  //   animation: '$Ellipse1 13000ms 0ms linear infinite',
  // },
  // '@keyframes Ellipse1': {
  //   '0%': {left: 540},
  //   '10%': { left: 608 },
  //   '20%': {left: 689},
  //   '30%': {left: 560},
  //   '40%': {left: 510},
  //   '50%': {left: 540},
  //   '55%': {top: 260},
  //   '60%': {top: 204},
  //   '70%': {top: 220},
  //   '80%': {top: 210},
  //   '90%': {top: 220},
  //   '100%': {top: 260},
  // },
  // eclipseTwo: {
  //   zIndex:2,
  //   position: 'absolute',
  //   backgroundColor: '#C99C9C;',
  //   width: 151,
  //   height: 186,
  //   borderRadius: '50%',
  //   left: '47.15%',
  //   right: '42.36%',
  //   top: '59.34%',
  //   bottom: '15.11%',
  //   filter: 'blur(60px)',
  //   animation: '$Ellipse2 13000ms 0ms linear infinite'
  // },
  // '@keyframes Ellipse2': {
  //   '0%': {left: 679},
  //   '10%': { left: 600 },
  //   '20%': {left: 610},
  //   '30%': {left: 624},
  //   '40%': {left: 646},
  //   '50%': {left: 679},
  //   '55%': {top: 432},
  //   '60%': {top: 332},
  //   '70%': {top: 256},
  //   '80%': {top: 320},
  //   '90%': {top: 309},
  //   '100%': {top: 432},
  // },
  
  elipse: {
    display: 'none'
  },
  eclipseTwo: {
    display: 'none'
  },
});

