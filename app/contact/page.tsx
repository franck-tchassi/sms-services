import { Layout } from "@/components/layout"
import ContactBanner from "./_components/ContactBanner"
import ContactForm from "./_components/ContactForm"
import ContactInfo from "./_components/ContactInfo"


const ContactPage = () => {
  return (
    <div className=" items-center justify-center  flex flex-col p-16 gap-16">
        <ContactBanner />
        <Layout className="flex items-center justify-center gap-16">
            <ContactForm />
            <ContactInfo />
        </Layout>
        
    </div>
  )
}

export default ContactPage