/* eslint-disable @typescript-eslint/no-explicit-any */
export const ContentBox = ({children} : {children: any}) => {
    return (
        <div className="shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
            {children}
        </div>
    )
}