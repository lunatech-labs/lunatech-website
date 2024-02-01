import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../../i18n';
import "./Address.scss";

const Address = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="address">
            <div className="address__card">
                <p className="address__title">{t('address.countryNL')}</p>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle1')}</p>
                    <div className="address__join">
                        <a className="address__link" href="mailto:info@@lunatech.nl">info@lunatech.nl</a>
                        <span className="address__separate"></span>
                        <a className="address__link" href="tel:+31107502600">+31 10 750 2600</a>
                    </div>
                </div>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle2')}</p>
                    <a className="address__link" href="mailto:employment@@lunatech.nl">employment@lunatech.nl</a>
                </div>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle3')}</p>
                    <p className="address__text">Hofplein 20</p>
                    <p className="address__text">3032 AC Rotterdam</p>
                </div>
            </div>
            <div className="address__card">
                <p className="address__title">{t('address.countryFR')}</p>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle1')}</p>
                    <div className="address__join">
                        <a className="address__link" href="mailto:info@@lunatech.fr">info@lunatech.fr</a>
                        <span className="address__separate"></span>
                        <a className="address__link" href="tel:+33182885664">+33 1 82 88 56 64</a>
                    </div>
                </div>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle2')}</p>
                    <a className="address__link" href="mailto:employment@@lunatech.nl">employment@lunatech.fr</a>
                </div>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle3')}</p>
                    <p className="address__text">3 rue de la Galmy</p>
                    <p className="address__text">77700 Chessy</p>
                </div>
            </div>
            <div className="address__card">
                <p className="address__title">{t('address.countryEN')}</p>
                <div className="address__part">
                    <p className="address__subtitle">{t('address.subtitle1')}</p>
                    <div className="address__join">
                        <a className="address__link" href="tel:+3228085713">+44 (0) 7875 695 964</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address;