import green from '../../assets/produtores/green.png';
import grow from '../../assets/produtores/grow.png'
import jennyJack from '../../assets/produtores/jenny-jack.png';
import potager from '../../assets/produtores/potager.png'
import salad from '../../assets/produtores/salad.png'

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max-min+1)+min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            name: "Green",
            image: green,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            name: "Grow",
            image: grow,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            name: "Jenny-Jack",
            image: jennyJack,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            name: "Potager",
            image: potager,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            name: "Salad",
            image: salad,
            distancia: `${gerarNumeroAleatorio(1,500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
    ]
}

export default produtores;