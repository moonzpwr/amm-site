import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: 320,
    margin: '52px auto 50px auto',
    backgroundColor: COLORS.BLACK.PRIMARY,
    color: COLORS.WHITE,
    
    [BREAKPOINTS.DESKTOP] : {
      maxWidth: 1440,
    }
  },
  separator: {
    position: 'absolute',
    top: -52,
    left: -100,
    zIndex: 10,
    width: '500px',
    borderTop: `1px solid ${COLORS.GREY.PRIMARY}`,
  },
  logoIcon: {
    width: 102,
    display: 'block',
    margin: '0 auto',
    
    '& svg': {
      width: 102,
      height: 56,
    }
  },
  icon: {
    fill: COLORS.WHITE
  },
  socialmediaList: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '40px 0',
  },
  contacts: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    textAlign: 'center',
    margin: '0 0 12px 0',
  },
  rights: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    margin: 0,
    textAlign: 'center',
  }
});

