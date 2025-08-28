import Cupcake from "./Cupcake";
import "./App.css"


const App = () => {
  return (
    <div className="container">
      <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
      <Cupcake color="marron" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>
     
    </div>
  );
};

export default App;
