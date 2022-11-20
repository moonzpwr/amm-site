import { useStyles } from './Modal.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import { ReactComponent as PigIcon } from 'assets/icons/pigIcon.svg';
import { ReactComponent as FoxIcon } from 'assets/icons/foxIcon.svg';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import { tel } from 'helpers/constants';

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
    const formData = new FormData(myForm.current);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    setIsSubmited(true);//TODO: implement validation
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmited(false);
  }
 
  return (
    <>
      {isModalOpen &&
        <div className={s.backdrop} onClick={() => handleCloseModal()}></div>
      }
      <CSSTransition
        in={isModalOpen}
        unmountOnExit
        timeout={250}
        classNames='modal'
      >
        <div className={s.contactsModal}>
          {isSubmited ?
            <div className={s.successfullForm}>
              <h2 className={s.successTitle}>{t("contactModal.successTitle")}</h2>
              <p className={s.successDescription}>{t("contactModal.description")}</p>
              <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
              <p className={s.successRequest}>{t("contactModal.request")}</p>
              <FoxIcon className={s.foxLogo}/>
            </div>
            :
            <div className={s.modalContainer}>
              <PigIcon className={s.pigLogo} />
              <h2 className={s.modalTitle}>{t("contactModal.title")}</h2>
              <form className={s.contactForm} name="modalForm" method="POST" ref={myForm}>
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
                <button className={s.submitBtn} type='button' onClick={(e) => handleSubmitClick(e)}>
                  {t("contactModal.btn")}
                </button>
              </form>
            </div>
          }
          <button className={s.modalCloseBtn} onClick={()=> handleCloseModal()}>
            <CloseIcon/>
          </button>
        </div>
      </CSSTransition>
    </>
  );
}

export default Modal;

