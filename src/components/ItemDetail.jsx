/*import Loader from "../utilities/Loader";

const ItemDetail = ({id, title, description, thumbnail, price}) => {


    const onAdd = (qty) => {
        alert("You have selected" + qty + "iems.");
    }

    return(
        <div className="cards-container">
            <img src={thumbnail} alt="" />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <Loader />
        </div>
    )
}

export default ItemDetail; */




import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, SubTitle } from './styledComponents';
import Loader from './Loader';


const ItemDetail = ({ item }) => {



    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[item.id]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <SubTitle>Menú:{item.day}</SubTitle>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.price}</Price>
                        <Desc>{item.day} unidades en stock</Desc>
                    </InfoContainer>
                </WrapperDetail>
            </DetailContainer>
            : <Loader/>
        }
        </>
    );
}

export default ItemDetail;