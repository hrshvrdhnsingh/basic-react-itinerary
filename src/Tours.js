import Card from "./Card";
function Tours({tours, deleteHandler}) {
   
   return (
    <div className="container">
        <div>
            <h1 className="title">Travel Planner</h1>
        </div>
        <div className="cards">
            {
                tours.map( (tour) => {
                    return <Card {...tour} deleteHandler={deleteHandler}>

                    </Card>
                } )
            }
        </div>
    </div>
   );
}

export default Tours;