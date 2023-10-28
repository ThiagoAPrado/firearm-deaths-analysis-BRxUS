import { frameGraphs } from "./graphConsts";

export default function genericGraphComponent(graph: frameGraphs){
    return (
        <div>
            <iframe
                src={"baseFrameUrl" + graph}
                width="600"
                height="400"
            />
        </div>
        
    )
}