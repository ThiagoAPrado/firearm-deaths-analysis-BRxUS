import { Button, Input } from "@mui/material";
import { ContentBox } from "../components/ContentBox";
import PageStructure from "../components/GenericPageStructure";

function Contact() {
  return (
    <>
      <PageStructure>
        <ContentBox>
          <form>
            <div className="flex flex-col justify-items-start ">
              <Input placeholder="Nome"/>
              <Input placeholder="Email"/>
              <Input placeholder="Mensagem"/>
              <Button> ENVIAR </Button>
            </div>
          </form>
        </ContentBox>
      </PageStructure>
    </>
  );
}

export default Contact;
