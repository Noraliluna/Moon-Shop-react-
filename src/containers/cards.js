import Card from "../components/Card"

const Cards = () => {
    const handleDelete = (id) => {
        console.log(`Deleting card ${id}`);
    }

    return(
        <div className="cards-container">
            <Card 
            id={1}
            title="Pollera Mantel"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/c4/33/0c/c4330caf67c714d6d52c83302ff4f7c2.jpg"
            description="cvfvfjdkf"
            handleDelete={handleDelete} />
            <Card 
            id={2}
            title="Campera adidas"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe5310d80d6447faa4e0a92e00d74387_9366/Polera_con_Capucha_Essentials_3_Tiras_Negro_DP2419_01_laydown.jpg"
            description="cvfvfjdkf"
            handleDelete={handleDelete} />
            <Card 
            id={3}
            title="Remera Adidas"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c304ae0460e4b189f76ad9e011c149a_9366/Polo_de_algodon_Essentials_Print_Logo_Rosado_HA1224_21_model.jpg"
            description="cvfvfjdkf"
            handleDelete={handleDelete} />
            <Card 
            id={4}
            title="Vestido corset"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/5d/72/e6/5d72e6ebb85bfdd074af576c33228a57.jpg"
            description="cvfvfjdkf"/>
            <Card 
            id={5}
            title="Blusa azul"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/4c/6a/79/4c6a7947261cf9211920fcf4315a05bd.jpg"
            description="cvfvfjdkf"/>
            <Card
            id={6}
            title="Top Deportivo negro"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/43/c7/68/43c768c5c6fc4a6d618311e5933aa41d.jpg"
            description="cvfvfjdkf"/>
            <Card 
            id={7}
            title="Top Blanco"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/8f/3a/85/8f3a85df34034425a513b29eca34d1ed.jpg"
            description="cvfvfjdkf"/>
            <Card 
            id={8}
            title="Shorts Deportivo"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/4b/b2/fd/4bb2fd77dfab201b8254305d63bfbc26.jpg"
            description="cvfvfjdkf"/>
            <Card
            id={9}
            title="Top Blanco Deportivo"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/a6/03/1d/a6031dcda91ced4a8856cd8cd2c3540b.jpg"
            description="cvfvfjdkf"/>
            <Card 
            id={10}
            title="Top Deportivo con cierres"
            colors="csdcsdc"
            size="fdfdfd"
            price={1500}
            thumbnail="https://i.pinimg.com/564x/e4/6b/ad/e46bad6e0b93a34a8451d5e22be71741.jpg"
            description="cvfvfjdkf"/>
        </div>
    )
}

export default Cards;