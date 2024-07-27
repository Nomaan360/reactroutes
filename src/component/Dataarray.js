
import React from "react";


let Dataarray=({dataitem})=> {
    return(
        <>
            <div className='container row mx-auto'>
            <h3 className='text-center'>Todos List</h3>
            {dataitem.map((item)=>{
                 return (
                <div key={item.iname}  className="card col-lg-4" >
                                        <img src={item.img} className="card-img-top" alt="..."/>

                    <div className="card-body">
                    <h5 className="card-title">{item.iname}</h5>
                    <p className="card-text">{item.desc}</p>
                   
                    </div>
                </div>
                 )
            })}
            </div>
        </>
    )
}

export default Dataarray
