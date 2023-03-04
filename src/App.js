import Potato from "./Potato";
import PropTypes from "prop-types";

function Food({name,picture,rating}){
  return (
    <div>
      <h3> I love {name}</h3>
      <img src={picture}/>
      <h4>{rating}/5.0</h4>
    </div>
  )
}


const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating:4.3
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating:4.2
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating:3.5
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating:4.0

  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:5.0
  }
];

Food.propTypes={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.string.isRequired,
}


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Potato />
      {/* <Food fav="kimchi"/>
      <Food fav="lamen" /> */}
      {/* <Food fav="lamen" papa={["hello",true,1]}/> */}
      {foodILike.map((item)=>
        <Food key={item.id} name={item.name} picture={item.image} rating={item.rating}/>
        )}
      {/* {foodILike.map(renderFood)} */}


    </div>
  );
}

export default App;
