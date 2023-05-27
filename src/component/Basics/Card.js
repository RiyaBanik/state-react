import React from 'react'
// import image from './maggie.jpg';

const MenuCards = ( {menuData} ) => {
  // console.log(menuData);
  return (

      <>
      <section className="main-card--container">
      {
        menuData.map(( curElement) => {
          const {id, name, category, image, description } = curElement;
          return(
            <>
            <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">
                    {id}
                </span>
                <span className="card-author subtle" style={{color: "red "}}>
                    {category}
                </span>
                <h2 className="card-title">{name}</h2>
                <span className="card-desciption subtle">
                   {description}
                </span>
                <div className='card-read'>Read</div>
                <img src={image} alt="images" className="card-media"   />
                
                <span className="card-tag subtle">Order Now</span>            </div>
        </div>
      </div>
      </>
      
          )
        })
      }
      </section>
    </>
  
  )
}

export default MenuCards;