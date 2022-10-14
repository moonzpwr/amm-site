import { useStyles } from './Hero.styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import Modal from 'components/Modal/Modal';

function Hero() {
  const s = useStyles();
  const {t} = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.titleContainer}>
        <div className={s.name}>{t('title.name')}</div>
        <div className={s.title}>{t('title.title')}</div>
      </div>
      <div className={s.subTitle}>{t('title.subTitle')}</div>
      <button className={s.modalBtn} onClick={() => setIsModalOpen(true)}>
        {t('title.mainBtn')}
      </button>
      <div className={s.ribbonContainer}>
        <div className={s.blackRibbon}>{t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}</div>
        <div className={s.whiteRibbon}>{t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}</div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Hero;
