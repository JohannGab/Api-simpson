import  React  from  'react';


const  GenerateSimpsons = ({ selectSimpsons }) => {
    return (
        <div  className="GenerateSimpsons">
        <button  onClick={selectSimpsons}>Get Simpsons</button>
        </div>
    );
};

export  default  GenerateSimpsons;