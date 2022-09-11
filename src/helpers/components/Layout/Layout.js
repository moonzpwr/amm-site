import {useStyles} from './Layout.styles'
import {ReactComponent as Logo} from '../../../assets/logoIcon.svg'

function  Layout({children}) {
  const s = useStyles()
 
  return (
    <div className={s.root}>
    {children}
    <Logo/>
    </div>
  );
}

export default Layout;
