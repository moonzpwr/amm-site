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
  label: {
    display: 'block',
    width: 100,
    margin: '7px auto 23px auto',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    color: COLORS.BLACK.PRIMARY,
    backgroundColor: COLORS.WHITE,
    padding: '4px 12px',
    transform: 'rotate(-2deg)',
  },
  describe: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  featuresItem: {
    display: 'flex',
    gap: 20,
    padding: 18,
  },
  featuresIconContainer: {
    width: 40,

    '& svg': {
      width: 40,
      fill: COLORS.WHITE,
    }
  },
  featureTitle: {
    marginBottom: 8,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',
  },
  featureDescription: {
    margin: 0, 
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '150%',
  }
});

