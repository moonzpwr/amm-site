import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
// import { COLORS } from 'helpers/colors';

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
    letterSpacing: '0.07em',
    marginBottom: 48,
  },
  cardsItem: {
    display: 'flex',
    gap: 33,

    '&:not(:last-child)': {
      marginBottom: 48,
    }
  },
  cardsList: {
    width: 195,
  },
  cardsNumberImg: {
    width: 105,
    height: 69,
    marginLeft: 10,
  },
  cardsItemTitle: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    marginBottom: 12,
  },
  cardsListItem: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    margin: 0,
  }
});

