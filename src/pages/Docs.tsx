import "../index.css"
import PageStructure from "../components/GenericPageStructure";

function Docs() {
  return (
    <>
      <PageStructure>
        <div className="flex items-center justify-center shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
          <iframe src="https://docs.google.com/document/d/1X_C7VX1mFgObcu2J3Wx9jRafnyP5DGi9ezUYzEOsWwc/edit" width={1020} height={1080} />
        </div>
      </PageStructure>
    </>
  );
}

export default Docs;
