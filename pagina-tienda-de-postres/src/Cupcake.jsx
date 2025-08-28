import { Component } from "react";

class Cupcake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendido: false,
    };
    this.vender =this.vender.bind(this)
  }
  vender(){
    this.setState({
        vendido:true
    })
  }

  render() {
    return (
      <div className="cupcake">
        <img src={this.props.foto} alt={this.props.sabor} />
        <h2>{this.props.color}</h2>
        <p>{`sabor:${this.props.sabor}`}</p>
        <p>
          <b>Estado:</b>
          {this.state.vendido ? "vendido" : "a la venta"}
        </p>
        {
            !this.state.vendido && <button onClick={this.vender}>Vender</button>
        }
      </div>
    );
  }
}

// function Cupcake({foto,sabor,color}) {
//     return(
//         <div className="cupcake">
//             <img src={foto} alt={sabor} />
//             <h2>{color}</h2>
//             <p>{`sabor:${sabor}`}</p>
//         </div>
//     )
// }

export default Cupcake;
