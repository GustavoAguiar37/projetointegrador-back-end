import Categoria from "../models/categoria"



const repositoryCategorias = {

    lerTodas: () => {

        const categorias: Categoria [] = [

            {
                id:1,
                nome:'Bares',
            },

            {
                id:2,
                nome:'Restaurantes',
            },

        ]

        return categorias

    },



    ler: (id: number) => {

        const categoria: Categoria = {

            id:1,
            nome:'Bares',
        }
        return categoria

    }

}



export default repositoryCategorias