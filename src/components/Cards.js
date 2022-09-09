const Cards = (props) =>{
    return(
        <>
            <div class="card" style="width: 18rem;">
                <img src={props.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Descripción:{props.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio:{props.price}</li>
                    <li class="list-group-item">Talle:{props.size}</li>
                    <li class="list-group-item">Color:{props.color}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </>
    );
}

export default Cards;