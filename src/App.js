import {useState} from 'react'
import {FormattedMessage, IntlProvider, FormattedDate} from 'react-intl'
import './App.css'


const message = {
  en:{
    source: 'Source: -> Format.js, React-Intl',
    heading: 'Welcome to our React Internationalized App',
    subheading: 'Implementing Internationalization easily',
    title: 'lets learn a simple way adding internationalization in web app "{brandName}"',
    link: 'https://formatjs.io/docs/react-intl/api'
  },
  es: {
    source: 'Fuente: -> Format.js, React-Intl',
    heading: 'Bienvenido a nuestra aplicación de internacionalización React',
    subheading: 'Implementar la internacionalización fácilmente',
    title: 'aprendamos de una manera simple agregando la internacionalización en la aplicación web "{brandName}"',
    link: 'https://formatjs.io/docs/react-intl/api'
  },
  lang: localStorage.getItem("lang") || "en"
}

function App(props) {

  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value)
    localStorage.setItem("lang", locale)
  }

  return (
    <div className="App">
      <select onChange={handleChange} defaultValue={locale}>
        {['en', 'es'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <IntlProvider locale={locale} messages={message[locale]}>
        <h3 className='my-3 fw-bold'>
          <code><FormattedMessage id="source"></FormattedMessage></code>
        </h3>
        <p>
          <FormattedMessage id="heading" defaultMessage="Some Default Text" value={{locale}}>
            Default Text
          </FormattedMessage>
        </p>
        <br />
        <FormattedMessage id="subheading" defaultMessage="Default Text">
        </FormattedMessage>
        <br />
        <FormattedMessage id="title" defaultMessage="lets learn a simple way adding internationalization in web app {brandName}" values={{brandName: "i18n"}}>
        </FormattedMessage> <br />
        <a href="https://formatjs.io/docs/react-intl/api"><FormattedMessage id="link"></FormattedMessage></a>
        <br />
        <p className='my-3'>
          <span><strong>Date: </strong></span>   
          <FormattedDate value={props.data} year="numeric" month="long" day="numeric" weekday='long'> </FormattedDate>
        </p>
      </IntlProvider>
    </div>
  );
}

export default App;
