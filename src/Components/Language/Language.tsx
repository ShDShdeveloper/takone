import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {Dropdown} from "react-bootstrap";
import '../Main/main.css'

const Language = () => {
	const { i18n, t } = useTranslation();
	const [lang, setLang] = useState("");

	useEffect(() => {
		const curLang = localStorage.getItem("i18nextLng");
		switch (curLang) {
			case "ru":
				setLang(t("Russian"));
				break;
			case "en":
				setLang(t("English"));
				break;
			case "uz":
				setLang(t("Uzbek"));
				break;
			default:
				setLang(t("Uzbek"));
		}
	});

	const changeLang = (e: string) => {
		i18n.changeLanguage(e);
	};
	return (
		<Dropdown>
			<Dropdown.Toggle className={"selectStyle"} variant="outline-light" id="dropdown-basic" size={"lg"}>
				{lang}
			</Dropdown.Toggle>

			<Dropdown.Menu className={"bgViolet"}>
				<Dropdown.Item className={"textColor"} href="#" key="uz" onClick={() => changeLang("uz")}>{t("Uzbek")}</Dropdown.Item>
				<Dropdown.Item className={"textColor"} href="#" key="ru" onClick={() => changeLang("ru")}>{t("Russian")}</Dropdown.Item>
				<Dropdown.Item className={"textColor"} href="#" key="en" onClick={() => changeLang("en")}>{t("English")}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Language;
