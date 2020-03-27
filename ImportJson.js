import React, { Component } from 'react';
import logo from "./images/logo.jpeg";

class ImportJson extends Component {
  constructor(props) { // el constructor es una funcion que crea un objeto.
    super(props);
    this.state = { // guarda la infor aca
      data: null, //se inicializa en nulo
    };
    this.componentDidMount() //carga los datos, de forma asincronica
  }

  render() { //posteriormente se llama al metodo render del componente
    if(this.state.data != null){ //si el data no es null entonces se arma una tabla
//        const numRows = this.state.data.Brastlewark.length // es para decir la cantidad de gente que hay 
        return (
          <div>
            <div className="App">
              <img className="Logo" src={logo} alt="LogoGnomes" />
                </div>
            <div className="form-group">
                

            </div>
                {
                this.state.data.Brastlewark.map((item, i) => { //hace un for para todos los items.
						        return (
                      <div class="gallery">
                        <div>           
                          <ul className="CharacterCard" key={i}>
                            <li className="img-json">
                            <img  src={item.thumbnail} alt={item.name} />
                            </li>
                            <li> Nombre: {item.name}</li>
                            <li> Edad: {item.age}</li>
                            <li> Peso: {item.weight}</li>
                            <li> Altura: {item.height}</li>
                            <li> Color de Pelo: {item.hair_color}</li>
                            <p> Amigos: {
                                item.friends.map((amigo,j) => {
                                return (<div key={j}> {amigo}</div>)
                                }   
                                )
                                }
                            </p>
                            <p> Profesiones :{
                                item.professions.map((professions,k) => {
                                return (<div key={k}> {professions}</div>)
                                })
                                }
                            </p>
						            	</ul>
                        </div>
                      </div>
						        );
                  })
                }
            </div>
         )  
        } else {
            return (<h1>Cargando...</h1>)
        }
      }
      componentDidMount() {
      fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(response => response.json())
        .then(data => { 
        this.setState({ data })
        console.log(data); 
          })
    }
  }
export default ImportJson;
         
               
          

	


  