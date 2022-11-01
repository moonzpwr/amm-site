import { useState, useEffect } from 'react';
import { useStyles } from './Case.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PlayIcon } from 'assets/icons/playIcon.svg';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'utils/i18next';

 


function Case() {
  const s = useStyles();
  const { t } = useTranslation();
  const [isVideoClicked, setIsVideoClicked] = useState(false)
  const [isSecondVideoClicked, setIsSecondVideoClicked] = useState(false)
  const [isThirdVideoClicked, setIsThirdVideoClicked] = useState(false)
  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isDescriptionVisible) {
      setIsDescriptionShown(true)
    }
    if (isTitleVisible) {
      setIsTitleShown(true)
    }
    
  }, [isDescriptionVisible, isTitleVisible])

  return (
    <div className={s.root} id='caseStudies'>
      <h2 className={classNames(s.title, {[s.titleAnimation]: isTitlelShown})} ref={titleRef}>{t('caseStudies.title')}</h2>
      <div className={classNames({[s.descriptionAnimation]: isDescriptionShown})} ref={descriptionRef}>
      <p className={s.description}>{t('caseStudies.description')}</p>
      <a href='https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g' target="_blanc" className={s.link}>{t('caseStudies.link')}</a>
      </div>
      <div className={s.card}>
        <div className={s.video} onClick={() => setIsVideoClicked(true)}>
          {isVideoClicked ?
            <iframe src='http://www.youtube.com/embed/i45glLZVEUs' className={s.preview} width={320} height={190} title='video'></iframe>
            :
            <a href='https://www.youtube.com/watch?v=i45glLZVEUs&ab_channel=AMMproduction%2F%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3' target='_blank' rel="noreferrer">
              <img className={s.preview} src='https://i.ytimg.com/vi/i45glLZVEUs/hqdefault.jpg' alt='video_preview'/>
            </a>
          }
          {!isVideoClicked && <button type='button' className={s.videoBtn}><PlayIcon/></button>}
        </div>
        <h3 className={s.cardsTitle}>{t('caseStudies.firstCard.title')}</h3>
        <div className={s.subTitle}>{t('caseStudies.need')}</div>
        <div className={s.text}>{t('caseStudies.firstCard.need')}</div>
        <div className={s.subTitle}>{t('caseStudies.result')}</div>
        <div className={s.text}>{t('caseStudies.firstCard.result')}</div>
      </div>
      <div className={s.card}>
        <div className={s.video} onClick={() => setIsSecondVideoClicked(true)}>
          {isSecondVideoClicked ?
            <iframe src='http://www.youtube.com/embed/7i5gG8rnpcA' className={s.preview} width={320} height={190} title='video'></iframe>
            :
            <a href='https://www.youtube.com/watch?v=7i5gG8rnpcA&ab_channel=AMMproduction%2F%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3' target='_blank' rel="noreferrer">
              <img className={s.preview} src='https://i.ytimg.com/vi/7i5gG8rnpcA/hqdefault.jpg' alt='video_preview'/>
            </a>
          }
          {!isSecondVideoClicked && <button type='button' className={s.videoBtn}><PlayIcon/></button>}
        </div>
        <h3 className={s.cardsTitle}>{t('caseStudies.secondCard.title')}</h3>
        <div className={s.subTitle}>{t('caseStudies.need')}</div>
        <div className={s.text}>{t('caseStudies.secondCard.need')}</div>
        <div className={s.subTitle}>{t('caseStudies.result')}</div>
        <div className={s.text}>{t('caseStudies.secondCard.result')}</div>
      </div>
      <div className={s.card}>
        <div className={s.video} onClick={() => setIsThirdVideoClicked(true)}>
          {isThirdVideoClicked ?
            <iframe src='http://www.youtube.com/embed/IrVYH1WYgMk' className={s.preview} width={320} height={190} title='video'></iframe>
            :
            <a href='https://www.youtube.com/watch?v=IrVYH1WYgMk&ab_channel=AMMproduction%2F%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3' target='_blank' rel="noreferrer">
              <img className={s.preview} src='https://i.ytimg.com/vi/IrVYH1WYgMk/hqdefault.jpg' alt='video_preview'/>
            </a>
          }
          {!isThirdVideoClicked && <button type='button' className={s.videoBtn}><PlayIcon/></button>}
        </div>
        <h3 className={s.cardsTitle}>{t('caseStudies.thirdCard.title')}</h3>
        <div className={s.subTitle}>{t('caseStudies.need')}</div>
        <div className={s.text}>{t('caseStudies.thirdCard.need')}</div>
        <div className={s.subTitle}>{t('caseStudies.result')}</div>
        <div className={s.text}>{t('caseStudies.thirdCard.result')}</div>
      </div>
    </div>
  );
}
 
export default Case;