import { ContextBlockTextInterface } from "../interfaces/interface";


export default function ContextTextBlock({title, textObj}: ContextBlockTextInterface) {
    return(
        <>
            <h2> 
                <a href="external"> {title}: </a>
            </h2>
            <ul>
                {textObj.map((obj) => {
                    return (<>
                        <li><strong>{obj.topic}:</strong> {obj.brief}</li>
                    </>)
                })}
			</ul>
        </>
    )
}