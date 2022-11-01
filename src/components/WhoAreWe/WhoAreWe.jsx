import { useState, useEffect } from 'react';
import { useStyles } from './WhoAreWe.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/playIcon.svg';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'utils/i18next';

function WhoAreWe() {
  const s = useStyles();
  const { t } = useTranslation();
  const [isVideoClicked, setIsVideoClicked] = useState(false)
  const { ref: labelRef, inView: isLabelVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isLabelVisible) {
      setIsLabelShown(true)
    }
    if (isTitleVisible) {
      setIsTitleShown(true)
    }
    
  }, [isLabelVisible, isTitleVisible])
  
  return (
    <div className={s.root} id='aboutUs'>
      <div className={s.labelContainer}>
        <div className={classNames(s.label, { [s.labelAnimation]: isLabelShown })} ref={labelRef}>{t('whoWeAre.label')}</div>
      </div>
      <h2 className={classNames(s.title, {[s.titleAnimation]: isTitlelShown})} ref={titleRef}>{t('whoWeAre.title')}</h2>
      <ul className={s.reasonList}>
        <li className={s.reasonItem}><StarIcon className={s.starIcon}/>{t('whoWeAre.reasonList.firstItem')}</li>
        <li className={s.reasonItem}><StarIcon className={s.starIcon}/>{t('whoWeAre.reasonList.secondItem')}</li>
        <li className={s.reasonItem}><StarIcon className={s.starIcon}/>{t('whoWeAre.reasonList.thirdItem')}</li>
        <li className={s.reasonItem}><StarIcon className={s.starIcon}/>{t('whoWeAre.reasonList.fourthItem')}</li>
        <li className={s.reasonItem}><StarIcon className={s.starIcon}/>{t('whoWeAre.reasonList.fifthItem')}</li>
      </ul>
      <div className={s.video} onClick={() => setIsVideoClicked(true)}>
        {isVideoClicked ?
          <iframe src='http://www.youtube.com/embed/7gRb2xhB4Ik' className={s.preview} width={320} height={190} title='video'></iframe>
          :
          <a href='https://www.youtube.com/watch?v=4JS70KB9GS0&ab_channel=%D0%92%D0%B0%D0%B4%D0%B8%D0%BC%D0%9C%D0%B0%D0%BA%D0%B5%D0%B5%D0%B2' target='_blank' rel="noreferrer">
            <img className={s.preview} src='https://i.ytimg.com/vi/7gRb2xhB4Ik/maxresdefault.jpg' alt='video_preview'/>
          </a>
        }
        {!isVideoClicked && <button type='button' className={s.videoBtn}><PlayIcon/></button>}
      </div>
    </div>
  );
}

export default WhoAreWe;

