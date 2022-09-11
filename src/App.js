import { Suspense } from "react";
import Loader from "./helpers/components/Loader/Loader";
import {useTranslation} from 'react-i18next';
import Layout from './helpers/components/Layout/Layout'
import './utils/i18next'

function App() {
  const {t, i18n} = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <Suspense fallback={<Loader/>}>
      <Layout>
        <div>
          {t("title.title")}
          <button onClick={() => handleChangeLanguage('ua')}>ua</button>
          <button onClick={() => handleChangeLanguage('en')}>en</button>
        </div>
      </Layout>
    </Suspense>
  );
}

export default App;
