import React from 'react'
import styles from '../assets/styles/services.module.css'
import card1 from '../assets/images/card1-pic.jpg'
import card2 from '../assets/images/card2-pic.jpg'
import card3 from '../assets/images/card3-pic.jpg'
import CustomCard from '../mui-components/card'
import { useState, useEffect } from 'react'
import Buttons from '../mui-components/button'

function Services() {
    const [items, setItems] = useState([
        { id: 1, role: 'Sample Transportation', url: card1, selected: false },
        { id: 2, role: 'Phlebotomy', url: card2, selected: false },
        { id: 3, role: 'Lab Testing', url: card3, selected: false },
      ]);
      const [count, setCount] = useState(0); // Initialize count in the state
    
      useEffect(() => {
        // Update the count whenever items change
        const selectedCount = items.filter((item) => item.selected === true).length;
        setCount(selectedCount);
      }, [items]);
      
      function handleListClick(id) {
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        setItems(updatedItems);

      }
  return (
    <div className={styles.servicesWrapper} id="service">
        <section className={styles.servicesContainer}>
            <div className={styles.ServicesHero}>
                <div className={styles.Servicestext}>
                    <h1>OUR SERVICES</h1>
                    <p>we are the best at what we do</p>
                </div>
            </div>
            <div className={styles.ServicesCards}>
                    {items.map((item)=>(
                      <CustomCard
                        key={item.id}
                        img={item.url}
                        role={item.role}
                        updateitem={()=>handleListClick(item.id)}
                        selected={item.selected}
                      />  
                    ))}
            </div>
            <div className={styles.servicesBtn}>
              <Buttons count={count}/>
            </div>
{count> 0 &&<div className={styles.count}>
                      {count}
            </div>}
        </section>
    </div>
  )
}

export default Services