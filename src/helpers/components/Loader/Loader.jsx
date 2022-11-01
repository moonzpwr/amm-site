import { useStyles } from './Loader.styles';
import { useTranslation } from 'react-i18next';


function Loader() {
  const s = useStyles();
    const {t} = useTranslation();

  return (
    <div className={s.root}>
      {t('loader')}
      <div className={s.spinner}></div>
    </div>
  );
}

export default Loader;
