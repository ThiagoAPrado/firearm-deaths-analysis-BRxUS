import "../index.css"
import PageStructure from "../components/GenericPageStructure";

function Docs() {
  return (
    <>
      <PageStructure>
        <div className="flex items-center justify-center shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vT104hdenfypWv3Zo1oGRinP0K8h-s1ksyQAAhm5i_8Tprv_xUystQXjch63I2HPdIeQF3xmwrcybtu/pub?embedded=true" width={1020} height={1080} />
        </div>
      </PageStructure>
    </>
  );
}

export default Docs;
