import "../index.css"
import PageStructure from "../components/GenericPageStructure"
import ReferenceBlock from "../components/ReferenceBlock"
import { referencesList } from "../typings/referencesTypings"

function References() {

  return (
    <>
      <PageStructure >
        <div className="shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
          <ReferenceBlock references={referencesList} />
        </div>
      </PageStructure>
    </>
  )
}

export default References
