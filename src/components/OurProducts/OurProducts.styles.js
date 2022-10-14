import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
  },
  cardsContainer: {
    marginTop: 40,
    minWidth: '100%',
    display: 'flex',
    gap: 16,
    overflowX: 'scroll',
    paddingBottom: 20,
  },
  card: {
    minWidth: 280,
    width: 280,
    padding: 16,
    backgroundColor: COLORS.BLACK.LIGHT,
  },
  cardTitle: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    marginBottom: 16,
  },
  line: {
    color: COLORS.RED.PRIMARY,
    marginRight: 5,
  },
  carlList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  listItem: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    display: 'flex',
    gap: 16,
    alignItems: 'center',

    '& svg': {
      width: 16,
      flexShrink: 0,
    }
  },
  studioFoto: {
    width: 320,
    height: 320, 
    display: 'block',
    margin: '80px auto 0 auto'
  }
});

