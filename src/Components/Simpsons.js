import  React  from  'react';


const  Simpsons = ({ simpsons }) => {
    return (
        <div  className="Simpsons">
            <img src={simpsons.image} alt=""  />
            <br></br>
            <ul>
                <li>Character : {simpsons.character} </li>
                <br></br>
                <li> Quote : {simpsons.quote}</li>
            </ul>
        </div>
    );
};



export  default Simpsons;