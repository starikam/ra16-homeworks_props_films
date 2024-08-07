import Star from "./Star";

interface Props {
    count : number;     
}


const Stars = (counter : Props): React.ReactNode  => {

    const {count} = counter;

    if (!Number.isInteger(count) || count < 1 || count > 5) return null;
    
    return (
        <ul className="star__list">
        {Array.from({ length: count }, (_, index) => ( 
            <Star key={index}/>
              )
            )}
        </ul>
        )}


export default Stars