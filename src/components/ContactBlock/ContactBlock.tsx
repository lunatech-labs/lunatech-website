import { Trans } from "react-i18next";
import Category from "../Category/Category";
import Title from "../Title/Title";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { contactBlock, contactBtn } from "@/constants";
import { messageIcon } from "@/assets";

const ContactBlock= () => {
    return (
        <div className="contact">
            <div className="mgb32-sp">
                <Category content={<Trans i18nKey="contact.subtitle" />} />
                <Title level={2}><Trans i18nKey={contactBlock[0].title} /><span><Trans i18nKey={contactBlock[0].titleImp} /></span></Title>
            </div>
            <ButtonPrimary iconUrl={messageIcon} size='large' to='/contact'>
                <span>
                    <Trans i18nKey={contactBtn[0].title} />
                </span>
            </ButtonPrimary>
        </div>
    )
}

export default ContactBlock;