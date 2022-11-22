import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
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
  mobileTitleContainer: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',

    [BREAKPOINTS.DESKTOP]: {
      display: 'none'
    }
  },
  desctopTitle: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 1000,
      margin: '140px auto 0 auto',
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '3s',
      fontFamily: 'Furore, sans-serif',
      fontWeight: 400,
      fontSize: 60,
      letterSpacing: '0.07em',
      lineHeight: '130%',
      textAlign: 'center',
    }
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

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
      lineHeight: '150%',
      textAlign: 'center',
      margin: '20px 0 40px 0',
      animationDelay: '3.5s',
    }
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
    },

    [BREAKPOINTS.DESKTOP]: {
      marginBottom: 220,
      animationDelay: '4s',
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

    [BREAKPOINTS.DESKTOP]: {
      width: 1895,
      height: 31,
      
      fontSize: 24,
      transform: 'rotate(-4deg)',
      bottom: 90,
      animation: '$blackRibbonTextFadeIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    }
  },
  blackRibbonText: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$blackRibbonFadeIn 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    }
  },
  '@keyframes blackRibbonFadeIn': {
    '0%': { transform: 'translate(1000px)', opacity: 0},
    '50%': { transform: 'translate(1000px)', opacity: 0},
    '100%': {transform: 'translate(0)', opacity: 1}
  },
  '@keyframes blackRibbonTextFadeIn': {
    from: { transform: 'translate(1000px)'},
    to: { transform: 'translate(-25px) rotate(-4deg)'},
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

    [BREAKPOINTS.DESKTOP]: {
      width: 1895,
      height: 31,
      fontSize: 24,
      transform: 'rotate(4deg)',
      bottom: 30,
      animation: '$whiteRibbonTextFadeIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    }
  },
  '@keyframes whiteRibbonTextFadeIn': {
    from: { transform: 'translate(-1000px)'},
    to: { transform: 'translate(30px) rotate(4deg)'},
  },
  whiteRibbonText: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$whiteRibbonFadeIn 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    }
  },
  '@keyframes whiteRibbonFadeIn': {
    '0%': { transform: 'translate(-1000px)', opacity: 0},
    '50%': { transform: 'translate(-1000px)', opacity: 0},
    '100%': {transform: 'translate(0)', opacity: 1}
  },
  elipse: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#DC1515',
      width: 200,
      height:337,
      borderRadius: '50%',
      filter: 'blur(100px)',
      left: '37.5%',
      right: '48.61%',
      top: '35.71%',
      bottom: '17.99%',
      animation: '$Ellipse1 13000ms 0ms linear infinite',
    }
  },
  '@keyframes Ellipse1': {
    '0%': {
      left: '37.5%',
      right: '48.61%',
      top: '35.71%',
      bottom: '17.99%',
    },
    '20%': {
      left: '47.22%',
      right: '38.89%',
      top: '32.97%',
      bottom: '17.86%',
    },
    '40%': { 
      left: '47.85%',
      right: '36.81%',
      top: '30.22%',
      bottom: '20.6%',
    },
    '60%': {
      left: '38.89%',
      right: '45.76%',
      top: '28.85%',
      bottom: '24.86%',
    },
    '80%': {
      left: '35.42%',
      right: '51.11%',
      top: '30.22%',
      bottom: '21.98%',
    },
    '100%': {
      left: '37.5%',
      right: '48.61%',
      top: '35.71%',
      bottom: '17.99%',
    },
  },
  eclipseTwo: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#C99C9C;',
      width: 151,
      height: 186,
      borderRadius: '50%',
      left: '47.15%',
      right: '42.36%',
      top: '59.34%',
      bottom: '15.11%',
      filter: 'blur(60px)',
      animation: '$Ellipse2 13000ms 0ms linear infinite'
    }
  },
  '@keyframes Ellipse2': {
    '0%': {
      left: '47.15%',
      right: '42.36%',
      top: '59.34%',
      bottom: '15.11%',
    },
    '20%': {
      left: '41.67%',
      right: '47.64%',
      top: '45.6%',
      bottom: '25.55%',
    },
    '40%': {
      left: '42.36%',
      right: '46.11%',
      top: '35.16%',
      bottom: '35.58%',
    },
    '60%': {
      left: '43.33%',
      right: '45.14%',
      top: '43.96%',
      bottom: '23.35%',
    },
    '80%': {
      left: '44.86%',
      right: '45.14%',
      top: '42.45%',
      bottom: '29.12%',
    },
    '100%': {
      left: '47.15%',
      right: '42.36%',
      top: '59.34%',
      bottom: '15.11%',
    },
  },
});

