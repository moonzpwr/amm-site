import { useStyles } from './Footer.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from 'assets/icons/logoIcon.svg';
// import { ReactComponent as BehanceIcon } from 'assets/icons/behanceIcon.svg';
// import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedinIcon.svg';
// import { ReactComponent as YoutubeIcon } from 'assets/icons/youtubeIcon.svg';
// import { ReactComponent as VimeoIcon } from 'assets/icons/vimeoIcon.svg';
// import { ReactComponent as FacebookIcon } from 'assets/icons/facebookIcon.svg';
// import { ReactComponent as InstagramIcon } from 'assets/icons/instagramIcon.svg';
// import { ReactComponent as TiktokIcon } from 'assets/icons/tiktokIcon.svg';
import { tel, email } from 'helpers/constants'

import 'utils/i18next';

 


function Footer() {
  const s = useStyles();
  const { t } = useTranslation();

  return (
    <div className={s.root} id='conacts'>
      <div className={s.separator}></div>
      <a href='#root' className={s.logoIcon} ><Logo /></a>
      <p className={s.contacts}>{email}</p>
      <p className={s.contacts}>{tel}</p>
      <ul className={s.socialmediaList}>
        {/* <li><a href='' target='_blank'><BehanceIcon className={s.icon} /></a></li>
        <li><a href='' target='_blank'><LinkedinIcon className={s.icon} /></a></li>
        <li><a href='https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g' target='_blank' rel="noreferrer"><YoutubeIcon className={s.icon} /></a></li>
        <li><a href='' target='_blank'><VimeoIcon /></a></li>
        <li><a href='' target='_blank'><FacebookIcon className={s.icon} /></a></li>
        <li><a href='' target='_blank'><InstagramIcon className={s.icon} /></a></li>
        <li><a href='' target='_blank'><TiktokIcon className={s.icon} /></a></li> */}
      </ul>
      <p className={s.rights}>{t('footer.rights')}</p>
    </div>
  );
}
 
export default Footer;