import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-container contact-container">
        {/* Image with animation */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/images/qcdescrip.jpg" alt="Quezon City Hall" />
        </motion.div>

        {/* Description with animation */}
        <motion.div
          className="contact-description"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Quezon City Hall</h2>
          <p>
            Quezon City Hall serves as the center of government in Quezon City, 
            providing services and assistance to residents. It stands as a symbol 
            of governance and community support for the people of the city.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> Quzoncity@gmail.com</p>
            <p><strong>Phone:</strong> 0123456789</p>
            <p><strong>Location:</strong> Barangay Central, Diliman, Quezon City, 1101, Metro Manila, Philippines</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
