function handleClick(event){
    console.log("Hello!");
    console.log(event);
}
function handleMouseOver(){
    console.log("bye!");
}
function handleDbClick(){
    console.log("you double clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem doloremque saepe, eum ipsum, id et omnis at pariatur dignissimos nemo! Nobis est modi hic ab pariatur, ullam officia exercitationem.</p>
        
        <button onDoubleClick={handleDbClick}>double click me!</button>
        </div>
    )
}