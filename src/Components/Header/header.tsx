import react from 'react'
import Language from "../Language/Language";
import {useTranslation} from "react-i18next";
import './Header.css'

function Header(){
    const {t} = useTranslation()
    return <header>
    <div className="row">
        <div className="col-6 col-sm-6 col-md-2 my-auto">
            <h2 className={"text-center my-auto"}><i>HAMMOL SHOP</i></h2>
        </div>
        <div className="col-md-7 d-none d-md-block my-auto text-center">
            <h2><i>{t("Welcome to the Hammol online shop")}</i></h2>
        </div>
        <div className="col-6 col-sm-6 col-md-3 text-end my-auto">
            <Language/>
        </div>
        <div className="col-12 col-sm-12 d-block d-md-none text-center my-3">
            <h2><i>{t("Welcome to the Hammol online shop")}</i></h2>
        </div>
    </div>
        <h3 className={"text-center fst-italic my-3 py-4 my-lg-5 px-lg-5 px-3 mx-2 mx-lg-0"}>{t("From Hammol online store you can buy accessories, smartphones, laptops, cosmetics, perfumery and many other items that you need for your needs quickly and at a convenient price.")}</h3>
    </header>
}
export default Header