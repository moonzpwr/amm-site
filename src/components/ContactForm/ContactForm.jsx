import { useState, useRef } from 'react';
import { useStyles } from './ContactForm.styles';
import { useTranslation } from 'react-i18next';
import fox from 'assets/images/Fox.png';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import {tel} from 'helpers/constants'
import 'utils/i18next';

 


function ContactForm() {
  const s = useStyles();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const myForm = useRef()

  const handleSubmitClick = (e) => {
    e.preventDefault();
    myForm.submit();

    setIsSubmited(true);//TODO: implement validation
    console.log({name, phone, email});//TODO: implement email
  }

  return (
    <div className={s.root}>
      {isSubmited ?
        <div>
          <h2 className={s.successTitle}>{t("contactModal.successTitle")}</h2>
          <p className={s.successDescription}>{t("contactModal.description")}</p>
          <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
          <p className={s.successRequest}>{t("contactModal.request")}</p>
          <img src={fox} alt="fox-logo" className={s.foxLogo}></img>
        </div>
        :
        <>
          <h2>{t('contactForm.title')}</h2>
          <p>{t('contactForm.description')}</p>
          <form className={s.contactForm} name="contactForm" method="POST" data-netlify="true" ref={myForm} onSubmit={(e) => handleSubmitClick(e)}>
            <input type='hidden' name='form-name' value='contactForm'/>
            <label>
              <span>{t("contactModal.name")}</span>
              <input type="text" className={s.contactInput} placeholder={t('contactModal.namePlaceholder')} name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>{t("contactModal.phoneNumber")}</span>
              <input type="number" className={s.contactInput} name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              <span>{t("contactModal.email")}</span>
              <input type="email" className={s.contactInput} placeholder={t('contactModal.emailPlaceholder')} name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button className={s.submitBtn} type='submit'>
              {t("contactModal.btn")}
            </button>
          </form>
        </>
      }
    </div>
  );
}
 
export default ContactForm;