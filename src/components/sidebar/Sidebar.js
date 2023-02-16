/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';

export default function Sidebar({ active }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(active);

  const handleActiveButton = (name) => {
    setActiveButton(name);
    if (name === 'carts') {
      router.push('/cart')
    } else {
      router.push('/')
    }
  }

  return (
    <Col lg={3} md={12} className='sidebar px-5 pt-lg-5 pt-4 pb-0'>
      <h1 className='fs-2 fw-bold text-white mb-4 mb-lg-5'>MENU</h1>

      <div>
        <ul className='sidebar__list d-flex d-lg-block gap-4'>
          <li>
            <Button 
              variant='' 
              onClick={() => handleActiveButton('products')} 
              className={`${activeButton === 'products' ? 'active' : ''}`}
            >
              <img 
                src={`/assets/${activeButton === 'products' ? 'product-active' : 'product'}.png`} 
                width={26} 
                alt="product"
                loading='eager'
              />
              Product
            </Button>
          </li>
          <li>
            <Button 
              variant='' 
              onClick={() => handleActiveButton('carts')}
              className={`${activeButton.includes('cart') ? 'active' : ''}`}
            >
              <img 
                src={`/assets/${activeButton.includes('cart') ? 'cart-active' : 'cart'}.png`} 
                width={26} 
                alt="cart"
                loading='eager'
              />
              Carts
            </Button>
          </li>
        </ul>
      </div>
    </Col>
  );
}