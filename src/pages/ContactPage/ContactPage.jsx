import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const ContactPage = () => {
    return (
        <div className="w-[1120px] mx-auto">
            <div className="mb-[80px]">
                <h1 className="text-center text-[58px] font-bold pt-[100px]">Contact Us</h1>
            <p className="text-center text-[16px] text-[#777E90]">We are at your disposal 7 days a week!</p>
            </div>
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default ContactPage