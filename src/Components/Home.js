import React from 'react';

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://th.bing.com/th/id/OIP.rdFTIvn6ryOdbqffg4W4nwHaO0?rs=1&pid=ImgDetMain" alt="I-Phone" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={() => props.addToCartHandler({ price: 1000, name: 'i phone 11' })}>
            Add To Cart
          </button>
          <button
            style={{
              backgroundColor: 'rebeccapurple',
              color: 'white',
              padding: '10px',
              margin: '20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => props.removeFromCartHandler({ price: 1000, name: 'i phone 11' })}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
