import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BLACK.PRIMARY,
    zIndex: 8,
  },
  logo: {
    width: 102,
    height: 56,
  },
  menuBtn: {
    position: 'absolute',
    top: 33,
    left: 20,
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 9,
    backgroundColor: COLORS.BLACK.PRIMARY,
    color: COLORS.GREY.LIGHT,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  myNodeEnter: {
    opacity: 0,
    transform: 'translateY(-50%)',
  },
  myNodeEnterActive: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 2500ms ease',
  },
  myNodeExit: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  myNodeExitActive: {
    opacity: 0,
    transform: 'translateY(-50%)',
    transition: 'all 2500ms ease',
  },
  hidden: {
    display: 'none',
  },
  menuList: {
    margin: '130px 0',

    gap: 32,
  },
  menuItem: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.GREY.LIGHT,

    '&:not(:last-child)': {
      marginBottom: 32,
    },
  },
  contactBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto, san-serif',
    fontWeight: 700,
    fontSize: 16,
    color: COLORS.WHITE,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 132,
    '& svg': {
      marginLeft: 10,
    }
  },
  btnContainer: {
    display: 'flex',
    
  },
  separator: {
    margin: '0 10px',
    width: 1,
    height: 20,
    backgroundColor: COLORS.WHITE
  },
  langBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: COLORS.GREY.LIGHT,
    fontFamily: 'Roboto, san-serif',
    fontWeight: 400,
    fontSize: 16,
    cursor: 'pointer',

    '&:hover, &:focus': {
      fontWeight: 700,
      color: COLORS.WHITE,
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 24,
    left: 20,
    border: 'none',
    padding: 0,
    backgroundColor: 'transparent'
  },
});

