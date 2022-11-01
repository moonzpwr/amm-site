import { makeStyles } from '@mui/styles';
// import { BREAKPOINTS } from 'helpers/breakpoints';
// import { COLORS } from 'helpers/colors';

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
    marginBottom: 40,
  },
  clientsCardList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
  },
  clutch: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    width: 210,
    margin: '40px auto 20px auto',
  },
  clutchLink: {
    margin:'20px auto 0 auto', 
    width: 168,
    display: 'block',
  }
});

