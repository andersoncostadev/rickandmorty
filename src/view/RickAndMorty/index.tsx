import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import api from '../../service/api';

import './style.scss';


interface IResults {
    id: number; 
    image: 'string';
    name: 'string';
    url: 'string';
}

interface ICount {
    count: number;
    pages: number;
}

interface IReponseData {
    info: ICount;
    results: IResults[];
}

const RickAndMorty: React.FC = () => {
const [data, setData] = useState<IResults[]>([]);
const [page, setPages] = useState<number>(1);
const [info, setInfo] = useState<ICount>({} as ICount);
const [isLoad, setIsLoad] = useState(false);


useEffect(() => {
    setIsLoad(true)
    api.get<IReponseData>(`?page=${page}`).then(
        reponse => {
            setInfo(reponse.data.info)
            setData(reponse.data.results)
        }
    )
    .catch(event => console.log(event))
    .finally ( () => {
        setIsLoad(false)
    });
},[page]);

if(isLoad) {
    return (
        <div className="loading">
           <img src="https://tenor.com/view/load-loading-waiting-gif-5662595"/>
        </div>
    )
}

    return (
        <div> 
            <h1>
                Rick And Morty
            </h1>
                <Link
                 to='/'
                 className='linkHome'
                 >
                     Voltar para Home
                </Link>
           
          <div className="container">
            {data.map(item => (
                <div key={item.id} className="card">
                    <img src={item.image} alt={item.name}/>
                    <p>{item.name}</p>
                    <a href={item.url}>Clique aqui para ver mais</a>
                </div>
            ))}
                <button
                    onClick={()=> setPages(page - 1)}
                    disabled={ page <= 1}
                >
                    Anterior
                </button>

                <button
                onClick={() => setPages(page + 1)}
                disabled={ page >= info.pages}
                >
                    Próximo
                </button>
            </div>
        </div>

    )
}

export default RickAndMorty ; 