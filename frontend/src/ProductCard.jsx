import React from 'react';

const ProductCard = ({ product }) => {
  // Function to calculate the discounted percentage
  const calculateDiscount = () => {
    const maxPrice = product.org_variant_max_price;
    const price = product.org_price;

    if (maxPrice && price && price < maxPrice) {
      return Math.round(((maxPrice - price) / maxPrice) * 100);
    }
    return null;
  };

  const discount = calculateDiscount(); // Get the discount value

  // Function to conditionally render prices
  const showPrice = () => {
    const maxPrice = product.org_variant_max_price;
    const price = product.org_price;

    if (maxPrice && price && price < maxPrice) {
      return (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span
            style={{
              textDecoration: 'line-through',
              color: '#888',
              fontSize: '8px',
              fontWeight: '400',
            }}
          >
            ${maxPrice}
          </span>
          <span style={{ fontWeight: '400', fontSize: '8px' }}>${price}</span>
        </div>
      );
    }
    return <span style={{ fontWeight: '400', fontSize: '8px' }}>${price}</span>;
  };

  return (
    <div
      style={{
        position: 'relative', // Enable positioning for the badge
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        width: '300px',
        margin: '0 auto',
      }}
    >
      {/* Product Image with Discount Badge */}
      <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px', width: '100%' }}>
        {discount && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: '#f26522',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px', // Adjust font size
              textAlign: 'center',
              padding: '8px 12px', // Tighter padding
              lineHeight: '1.1',
              width: '40px', // Narrower badge
              height: '80px', // Adjusted height for balance
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Horizontally center text
              justifyContent: 'center', // Vertically center text
              margin: 'auto',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)', // Pentagon shape
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: '600', marginTop: '-25px' ,marginBottom: '2px' }}>
              {discount}%
            </div>
            <div style={{ fontSize: '24px', fontWeight: '600'}}>OFF</div>
          </div>
        )}
        <img
          src={product.org_image_url || 'https://via.placeholder.com/300'}
          alt={product.org_product || 'Product'}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Product Title */}
      <h3
        style={{
          fontSize: '10px',
          fontWeight: '500',
          margin: '0 0 5px 0',
          color: '#000',
        }}
      >
        {product.org_product || 'No Title'}
      </h3>

      {/* Product Price */}
      <div>{showPrice()}</div>
    </div>
  );
};

export default ProductCard;