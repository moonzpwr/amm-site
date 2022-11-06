import { useStyles } from './Modal.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import pig from 'assets/images/Pig.png';
import fox from 'assets/images/Fox.png';
import {tel} from 'helpers/constants'

function Modal({isModalOpen, setIsModalOpen}) {
  const s = useStyles();
  const {t} = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const myForm = useRef()

  const handleSubmitClick = (e) => {
    e.preventDefault();
    myForm.current.submit()

    setIsSubmited(true);//TODO: implement validation
    console.log({name, phone, email});//TODO: implement email
  }
 
  return (
    <CSSTransition
      in={isModalOpen}
      unmountOnExit
      timeout={250 }
      classNames='modal'
    >
      <div className={s.contactsModal}>
        <div className={s.modalContainer}>
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
              <img src={pig} alt="pig-logo" className={s.pigLogo} />
              <h2 className={s.modalTitle}>{t("contactModal.title")}</h2>
              {/* <form className={s.contactForm} name="modalForm" action='/modalForm' method="POST" ref={myForm} onSubmit={(e) => handleSubmitClick(e)}> */}
              <form className={s.contactForm} name="modalForm" action='/modalForm' method="POST">
                <input type='hidden' name='form-name' value='modalForm'/>
                <label>
                  <span>{ t("contactModal.name") }</span>
                  <input required type="text" className={s.contactInput} placeholder={t('contactModal.namePlaceholder')} name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                  <span>{ t("contactModal.phoneNumber") }</span>
                  <input required type="number" className={s.contactInput} name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </label>
                <label>
                  <span>{ t("contactModal.email") }</span>
                  <input required type="email" className={s.contactInput} placeholder={t('contactModal.emailPlaceholder')} name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <button className={s.submitBtn} type='submit'>
                  {t("contactModal.btn")}
                </button>
              </form>
            </>
          }
        </div>
        <button className={s.modalCloseBtn}>
          <CloseIcon/>
        </button>
      </div>
    </CSSTransition>
  );
}

export default Modal;

