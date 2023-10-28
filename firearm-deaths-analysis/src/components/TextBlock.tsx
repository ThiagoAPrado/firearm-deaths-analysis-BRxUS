import { ContextBlockTextInterface } from "../interfaces/interface";

export default function ContextTextBlock({ title, textObj }: ContextBlockTextInterface) {
  return (
    <>
      <h3><a href="external"> {title}: </a> </h3>
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