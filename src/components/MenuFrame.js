import React, { useState } from 'react';
import '../styles/page.css';

const MenuFrame = () => {
  const products = [
    { brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe1.jpg', left: '23px', top: '198px'},
    { brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: '25,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe2.jpg', left: '233px', top: '198px' },
    { brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe3.jpg', left: '23px', top: '470px' },
    { brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: '35,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe4.jpg', left: '233px', top: '470px' },
    { brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe5.jpg', left: '23px', top: '742px' },
    { brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: '35,000원', imageUrl: process.env.PUBLIC_URL + '/images/shoe6.jpg', left: '233px', top: '742px' },
  ];

  // 각 제품의 버튼 상태를 관리하는 state
  const [clickedButtons, setClickedButtons] = useState(Array(products.length).fill(false));

   // 장바구니에 담긴 상품 개수 계산
   const cartItemCount = clickedButtons.filter(clicked => clicked).length;

  // 버튼 클릭 핸들러 (토글 기능 추가)
  const handleButtonClick = (index) => {
    setClickedButtons((prevState) => {
      const newClickedButtons = [...prevState];
      newClickedButtons[index] = !newClickedButtons[index]; // 상태를 토글
      return newClickedButtons;
    });
  };

  return (
    <div className="menu">
      <div className="menufixed">
        <div className="cart-icon">
          {/* 장바구니 아이콘 이미지로 교체 */}
          <img src="/images/cart.png" alt="Shopping Cart" className="cart-icon" />
          {cartItemCount > 0 && (
            <div className="cart-count">
              {cartItemCount}
            </div>
          )}
        </div>
      </div>
      <div className="text-display">
        <div className="shoe-product-list">신발 상품 목록</div>
        <div className="remaining-product-count">현재 {products.length}개의 상품이 있습니다.</div>
      </div>

      {/* 카드 반복 생성 */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index} style={{ left: product.left, top: product.top }}>
            <div className="card-image" style={{ backgroundImage: `url(${product.imageUrl})` }} />
            <div className="card-text">
              <p className="brand-name">{product.brand}</p>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
              <div
                className="button"
                style={{ backgroundColor: clickedButtons[index] ? '#D8D8D8' : '#000000' }}
                onClick={() => handleButtonClick(index)}
              >
                <span className="button-text">
                  {clickedButtons[index] ? '담김!' : '담기'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFrame;