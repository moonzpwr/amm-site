import { useStyles } from './Clients.styles';
import { useTranslation } from 'react-i18next';
import client1 from 'assets/images/client1.jpg'
import client2 from 'assets/images/client2.jpg'
import client3 from 'assets/images/client3.jpg'
import client4 from 'assets/images/client4.jpg'
import client5 from 'assets/images/client5.jpg'
import client6 from 'assets/images/client6.jpg'
import client7 from 'assets/images/client7.jpg'
import client8 from 'assets/images/client8.jpg'
import clutch from 'assets/images/clutch.png'
import 'utils/i18next';

 


function Clients() {
  const s = useStyles();
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <h2 className={s.title}>{t('clients.title')}</h2>
      <ul className={s.clientsCardList}>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client1} alt="client_image-1"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client2} alt="client_image-2"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client3} alt="client_image-3"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client4} alt="client_image-4"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client5} alt="client_image-5"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client6} alt="client_image-6"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client7} alt="client_image-7"></img></li>
        <li className={s.clientsCardItem}><img className={s.clientsImg} src={client8} alt="client_image-8"></img></li>
      </ul>
      <p className={s.clutch}>{t('clients.clutch')}</p>
      <a href='https://clutch.co/' target='_blank' rel="noreferrer" className={s.clutchLink}>
        <img src={clutch} alt="clutch_link"></img>
      </a>
    </div>
  );
}
 
export default Clients;