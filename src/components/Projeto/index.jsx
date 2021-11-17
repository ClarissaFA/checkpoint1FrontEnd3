import './style.scss'
import sleepiest from './sleepiest.jpg'
import weddy from './weddy.jpg'
import vietnamese from './vietnamese.jpg'

const Projeto = () => {
    const listaProjetos = [
    {
        id: 1,
        nome: 'Weddy',
        imagem: weddy,
        descricao: 'UX Case Study de um planejador de casamentos',
        linkBehance: 'https://www.behance.net/gallery/126346031/Weddy-Wedding-Planner-UX-Case-Study?tracking_source=search_projects_recommended%7Cux%20case%20study'
    },

    {
        id: 2,
        nome: 'Sleepiest',
        imagem: sleepiest,
        descricao: 'Aplicativo de sono que te ajuda a dormir rapidamente',
        linkBehance: 'https://www.behance.net/gallery/96757753/Sleepiest?tracking_source=search_projects_recommended%7Cmobile%20app'
    }, 

    {
        id: 3,
        nome: 'VietMyth',
        imagem: vietnamese,
        descricao: 'Site sobre criaturas da mitologia vietnamita',
        linkBehance: 'https://www.behance.net/gallery/129450109/VietMyth-Vietnamese-Mythical-Creatures-website?tracking_source=search_projects_recommended%7Cwebsite'
    }

    ]
    return (
<div className="container">
<div className="card-group">
    {listaProjetos.map(({id, nome, descricao, linkBehance, imagem}) => {
        return (
     <div id={nome} key={id} className="card">
    <img src={imagem} className="card-img-top" alt="..."/>

    <div className="card-body">
      <h5 className="card-title">{nome}</h5>
      <p className="card-text">{descricao}</p>
      <p className="card-text"><small className="text-muted"><a href={linkBehance}> Conheça o projeto</a></small></p>
    </div>
  </div>
            )
        })
    }
  
</div>
</div>
    )

};




export default Projeto;