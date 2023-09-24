import React from 'react'
import styles from '../assets/styles/services.module.css'
import card1 from '../assets/images/card1-pic.jpg'
import card2 from '../assets/images/card2-pic.jpg'
import card3 from '../assets/images/card3-pic.jpg'
import CustomCard from '../mui-components/card'
import { useState, useEffect } from 'react'
import Buttons from '../mui-components/button'
import { useFormContext } from '../contexts/FormContext'
import { Link } from 'react-router-dom'

function Services() {
    const [items, setItems] = useState([
        { id: 1, role: 'Sample Transportation', url: card1, selected: false },
        { id: 2, role: 'Phlebotomy', url: card2, selected: false },
        { id: 3, role: 'Laboratory Testing', url: card3, selected: false },
      ]);
      const [count, setCount] = useState(0); // Initialize count in the state
      const {formData, setFormData} = useFormContext();

      useEffect(() => {
        const selectedCount = items.filter((item) => item.selected === true).length;
        setCount(selectedCount);
    
        // Update formData.services_needed based on selected items
        const selectedRoles = items
          .filter((item) => item.selected === true)
          .map((item) => item.role);
    
        setFormData((prevData) => ({
          ...prevData,
          services_needed: selectedRoles,
        }));
      }, [items, setFormData]);
      
      function handleListClick(id) {
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        setItems(updatedItems);
        console.log(formData)
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
            <Link className="link" to="booking/*">
              <div className={styles.servicesBtn}>
                <Buttons count={count} text="proceed"/>
              </div>
            </Link>   
            {count> 0 &&<div className={styles.count}>
                      {count}
            </div>}
        </section>
    </div>
  )
}

export default Services