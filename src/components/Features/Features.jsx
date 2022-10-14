import { useStyles } from './Features.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TransferIcon } from 'assets/icons/transferIcon.svg';
import { ReactComponent as FundsIcon } from 'assets/icons/fundsIcon.svg';
import { ReactComponent as UsersIcon } from 'assets/icons/usersIcon.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/movieIcon.svg';
import { ReactComponent as MusculeIcon } from 'assets/icons/muscleIcon.svg';
import { ReactComponent as RocketIcon } from 'assets/icons/rocketIcon.svg';
import 'utils/i18next';

function Features() {
  const s = useStyles();
  const { t } = useTranslation();
  
  return (
    <div className={s.root}>
      <h2 className={s.title}>{t('ourFeatures.title')}</h2>
      <div className={s.label}>{t('ourFeatures.label')}</div>
      <p className={s.describe}>{t('ourFeatures.subTitle')}</p>
      <ul className={s.featuresList}>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <TransferIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.firstItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.firstItem.descriptions')}</p>
          </div>
        </li>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <FundsIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.secondItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.secondItem.descriptions')}</p>
          </div>
        </li>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <UsersIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.thirdItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.thirdItem.descriptions')}</p>
          </div>
        </li>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <MovieIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.fourthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.fourthItem.descriptions')}</p>
          </div>
        </li>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <MusculeIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.fifthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.fifthItem.descriptions')}</p>
          </div>
        </li>
        <li className={s.featuresItem}>
          <div className={s.featuresIconContainer}>
            <RocketIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.sixthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.sixthItem.descriptions')}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Features;

