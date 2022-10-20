import { useStyles } from './Calculator.styles';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import 'utils/i18next';
import { useState } from 'react';
import {useDurationOptions} from './hooks/useDurationOptions';
import { subTypeOfContentConst } from './constants/subTypeOfContent';
import get from 'lodash/get';
import { useEffect } from 'react';
import { useTypeOfContentOptions } from './hooks/useTypeOfContentOptions';
import { useImportantOptions } from './hooks/useImportantOptions';
import { customStyles } from 'styles/customStyles';
import Modal from 'components/Modal/Modal';

 


function Calculator() {
  const s = useStyles();
  const { t } = useTranslation();
  const durationOptions = useDurationOptions();
  const importantOptions = useImportantOptions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {videoSelectOptions, animationSelectOptions} = useTypeOfContentOptions();
  const [typeOfContent, setTypeOfContent] = useState('video');
  const [subTypeOfContent, setSubTypeOfContent] = useState(null);
  const [price, setPrice] = useState({value: 0, label: null});
  const [factors, setFactors] = useState([]);
  const [finalPrice, setFinalprice] = useState(0)
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (subTypeOfContent === subTypeOfContentConst.tiktokVideo) {
      setPrice({value: 1000, label: null})
    }
    setFinalprice(factors.reduce((acc, factor) => {
      acc += (Number(factor.value.slice(0, 3)) * price.value) - price.value
      return acc
    }, price.value))
  }, [subTypeOfContent, price.value, factors])

  const handleContentTypeClick = (e) => {
    setTypeOfContent(e.target.value);
    setSubTypeOfContent(null);
    setFactors([]);
    setIsCalculated(false)
  }

  const handleSubTypeOfContentChange = (e) => {
    setSubTypeOfContent(e.value);
    setFactors([]);
    setIsCalculated(false);
  }

  const handleCalculatedIfValid = () => {
    if (subTypeOfContent === subTypeOfContentConst.tiktokVideo) {
      if (subTypeOfContent && finalPrice !== 0) {
          setIsCalculated(true);
          window.scrollBy({left: 0,  top: 200, behavior: 'smooth'})
      } else {
        alert('заполни поля');//TODO: implement error state of fields
        return
        }
    } else {
      if (subTypeOfContent && price.label && finalPrice !== 0) {
        setIsCalculated(true);
        window.scrollBy({left: 0,  top: 200, behavior: 'smooth'})
      } else {
        alert('заполни поля');//TODO: implement error state of fields
        return
      }
    }
    
  }
  
  return (
    <div className={s.root}>
      <h2 className={s.title}>{t('calculator.title')}</h2>
      <p className={s.description}>{t('calculator.subTitle')}</p>
      <form className={s.calsulatorForm}>
        <div className={s.radioContainer}>
          <label className={s.radioLabel}>
            {t('calculator.video')}
            <input defaultChecked={typeOfContent==='video'} type='radio' name='contentType' value='video' className={s.typeOfContent} onClick={(e) => handleContentTypeClick(e)} />
            <span className={s.checkmark}></span>
            <p className={s.checkmarkInner}></p>
          </label>
          <label className={s.radioLabel}>
            {t('calculator.animation')}
            <input defaultChecked={typeOfContent==='animation'} type='radio' name='contentType' value='animation' className={s.typeOfContent} onClick={(e) => handleContentTypeClick(e)}/>
            <span className={s.checkmark}></span>
            <p className={s.checkmarkInner}></p>
          </label>
        </div>
        <div className={s.formTitle}>{t('calculator.form')}</div>
        {typeOfContent === 'video' &&
          <Select isSearchable={false} styles={customStyles} options={videoSelectOptions} placeholder={t('calculator.formPlaceholderType')} onChange={(e)=> handleSubTypeOfContentChange(e)}/>
        }
        {typeOfContent === 'animation' &&
          <Select isSearchable={false} styles={customStyles} options={animationSelectOptions} placeholder={t('calculator.formPlaceholderType')} onChange={(e)=> handleSubTypeOfContentChange(e)}/>
        }
        {subTypeOfContent !== subTypeOfContentConst.tiktokVideo &&
          Object.values(subTypeOfContentConst).map((type, i) => { 
            return type === subTypeOfContent ? 
              <div key={i}>
                <div className={s.formTitle}>{t('calculator.duration')}</div>
                <Select isSearchable={false} styles={customStyles} options={get(durationOptions, subTypeOfContent )} placeholder={t('calculator.formPlaceholderDuration')} onChange={(e) => setPrice(e)} />
              </div>
              : 
              ''
          })
        }
        {subTypeOfContent &&
          Object.values(subTypeOfContentConst).map((type, i) => { 
            return type === subTypeOfContent ? 
              <div key={i}>
                <div className={s.formTitle}>{t('calculator.options')}</div>
                <Select
                  isSearchable={false}
                  styles={customStyles}
                  options={get(importantOptions, subTypeOfContent)}
                  isMulti
                  closeMenuOnSelect={false}
                  placeholder={t('calculator.formPlaceholderOptions')}
                  value={factors}
                  onChange={(e) => setFactors(e)}
                />
              </div>
              : 
              ''
          })
        }
      </form>
      {price &&
        <button className={s.submitBtn} type='button' onClick={() => handleCalculatedIfValid()}>
          {t('calculator.calculatorBtn')}
        </button>
      }
      {isCalculated && <div className={s.calculatedBlock}>
        <div className={s.finalPrice}>$ {Math.round(finalPrice / 100) * 100}</div>
        <div className={s.disclaimerTitle}>{t('calculator.disclaimerTitle')}</div>
        <div className={s.videoOptionsContainer}>
          <p>
            <span className={s.videoOptionsTitle}>{t('calculator.type')}:</span>
            <span className={s.videoOptionsValue}>{typeOfContent}</span>
          </p>
          <p>
            <span className={s.videoOptionsTitle}>{t('calculator.form')}:</span>
            <span className={s.videoOptionsValue}>{t(`calculator.videoOption.${subTypeOfContent}`)}</span>
          </p>
          <p>
            <span className={s.videoOptionsTitle}>{t('calculator.duration')}:</span>
            <span className={s.videoOptionsValue}>{price.label}</span>
          </p>
          <p>
            <span className={s.videoOptionsTitle}>{t('calculator.options')}:</span>
            <span className={s.optionsValues}>{factors.map((factor, i) => <span key={i}>{factor.label}</span>)}</span>
          </p>
        </div>
        <div className={s.videoDisclaimer}>{t('calculator.disclaimer')}</div>
        <button className={s.modalBtn} onClick={() => setIsModalOpen(true)}>
          {t('title.mainBtn')}
        </button>
      </div>}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Calculator;