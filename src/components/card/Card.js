import React, { Component } from 'react';
import axios from 'axios';

import './Card.css';

class Card extends Component {

    state={
        livros:[]
    }

    componentDidUpdate() {

        axios.get(`https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos/${this.props.pagina}`)
        .then(res => {
            const livros = res.data.data;
            this.setState({livros});
            console.log(this.props.pagina);
        })

    }
    componentDidMount(){        
        axios.get(`https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos/1`)
        .then(res => {
            const livros = res.data.data;
            this.setState({livros});
        })
    }

  render(){
  return (
      <div>
        {/* Inicio */}
        {
            this.state.livros.map(livro =>
            <div  key={livro.CodLivro} className="card container">
            <img className="tamanho" src={`https://bookplay.com.br/images/livros/${livro.CodLivro.toString().length <5? '0'+livro.CodLivro.toString():livro.CodLivro.toString()}/Imagem.jpg`} alt="Avatar"></img>
            <div>
            <h4><b>CodLivro: {livro.CodLivro}</b></h4>
            <p>{livro.Nome}</p>
            </div>      
        </div> )
        }
        {/* Fim */}
        
      </div>
  );
}
}

export default Card;
