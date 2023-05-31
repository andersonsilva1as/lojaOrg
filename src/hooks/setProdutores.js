import { useState, useEffect } from "react";

import { requestProdutores } from '../services/request'

export default function setProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
    useEffect( () => {
        const retorno = requestProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);
    return [titulo, lista];
}