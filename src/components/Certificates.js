import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './Certificates.module.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "CodeIt Django Web Development Certificate",
      organization: "CodeIt",
      date: "2024",
      imagePath: "/assets/codeit_certificate.pdf",
      category: "Web Development"
    }
  ];

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📜 Certificates
        </motion.h2>
        
        <motion.div 
          className={styles.certificateGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className={styles.certificateItem}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleViewCertificate(certificate)}
            >
              <div className={styles.certificateImage}>
                <div className={styles.pdfPlaceholder}>
                  <div className={styles.pdfIcon}>📄</div>
                  <span>PDF Certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {showModal && selectedCertificate && (
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <button 
                  className={styles.closeBtn}
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <iframe
                  src={selectedCertificate.imagePath}
                  title={selectedCertificate.title}
                  className={styles.pdfViewer}
                  frameBorder="0"
                />
              </div>
              
              <div className={styles.modalTitle}>
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.organization} • {selectedCertificate.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;