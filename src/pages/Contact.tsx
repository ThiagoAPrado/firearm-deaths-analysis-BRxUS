import { ContentBox } from "../components/ContentBox";
import PageStructure from "../components/GenericPageStructure";
import { ContactForms } from "../components/Contact/ContactForm";

function Contact() {
  return (
    <>
      <PageStructure>
        <ContentBox>
          <ContactForms />
        </ContentBox>
      </PageStructure>
    </>
  );
}

export default Contact;
