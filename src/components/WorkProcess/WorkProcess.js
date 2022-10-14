import { useStyles } from './WorkProcess.styles';
import { useTranslation } from 'react-i18next';
import imageOne from 'assets/images/01.png'
import imageTwo from 'assets/images/02.png'
import imageThree from 'assets/images/03.png'
import imageFour from 'assets/images/04.png'
import 'utils/i18next';

 


function WorkProcess() {
  const s = useStyles();
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <h2>{t('workProcess.title')}</h2>
      <div className={s.cardsContainer}>
        <div className={s.cardsItem}>
          <img src={imageOne} alt='number one' className={s.cardsNumberImg}/>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.first.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.first.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.first.secondItem')}</p>
          </div>
        </div>
        <div className={s.cardsItem}>
          <img src={imageTwo} alt='number two' className={s.cardsNumberImg}/>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.second.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.second.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.secondItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.thirdItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.fifthItem')}</p>
          </div>
        </div>
        <div className={s.cardsItem}>
          <img src={imageThree} alt='number three' className={s.cardsNumberImg}/>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.first.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.first.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.first.secondItem')}</p>
          </div>
        </div>
        <div className={s.cardsItem}>
          <img src={imageFour} alt='number four' className={s.cardsNumberImg}/>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.first.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.first.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.first.secondItem')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;