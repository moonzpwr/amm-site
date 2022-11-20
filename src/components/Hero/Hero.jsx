import { useStyles } from './Hero.styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import Modal from 'components/Modal/Modal';
import Marquee from "react-fast-marquee";

function Hero() {
  const s = useStyles();
  const {t} = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.eclipseTwo}></div>
      <div className={s.elipse}></div>
      <div className={s.mobileTitleContainer}>
        <div className={s.name}>{t('title.name')}</div>
        <div className={s.title}>{t('title.title')}</div>
      </div>
      <div className={s.desctopTitle}>
        {t('title.name')} {t('title.title')}
      </div>
      <div className={s.subTitle}>{t('title.subTitle')}</div>
      <button className={s.modalBtn} onClick={() => setIsModalOpen(true)}>
        {t('title.mainBtn')}
      </button>
      <div className={s.ribbonContainer}>
        <Marquee className={s.blackRibbon} gradient={false}>
          {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}&nbsp;
        </Marquee>
        <Marquee className={s.whiteRibbon} direction='right' gradient={false}>
          {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}&nbsp;
        </Marquee> 
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Hero;
