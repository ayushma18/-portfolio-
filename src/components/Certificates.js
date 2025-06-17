import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTimes, FaEye, FaExternalLinkAlt } from 'react-icons/fa';
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
      description: "Comprehensive Django web development certification covering Python, Django framework, database management, and full-stack web application development.",
      pdfPath: "/assets/codeit_certificate.pdf",
      icon: <FaCertificate />,
      category: "Web Development"
    }
  ];

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleOpenPDF = (pdfPath) => {
    window.open(pdfPath, '_blank');
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
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate) => (
            <motion.div 
              key={certificate.id} 
              className={styles.certificateCard}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  {certificate.icon}
                </div>
                <span className={styles.categoryBadge}>
                  {certificate.category}
                </span>
              </div>
              
              <div className={styles.certificatePreview}>
                <div className={styles.pdfIcon}>
                  <FaCertificate />
                </div>
                <div className={styles.previewText}>
                  <h4>Certificate Document</h4>
                  <p>Click to view or download</p>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{certificate.title}</h3>
                <h4 className={styles.cardOrganization}>{certificate.organization}</h4>
                <p className={styles.cardDescription}>{certificate.description}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{certificate.date}</span>
                </div>
              </div>
              
              <div className={styles.cardActions}>
                <button 
                  className={styles.viewBtn}
                  onClick={() => handleViewCertificate(certificate)}
                  aria-label="View Certificate"
                >
                  <FaEye />
                  View Certificate
                </button>
                <button 
                  className={styles.downloadBtn}
                  onClick={() => handleOpenPDF(certificate.pdfPath)}
                  aria-label="Open PDF"
                >
                  <FaExternalLinkAlt />
                  Open PDF
                </button>
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
                <h3 className={styles.modalTitle}>{selectedCertificate.title}</h3>
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
                  src={selectedCertificate.pdfPath}
                  title={selectedCertificate.title}
                  className={styles.pdfViewer}
                  frameBorder="0"
                />
              </div>
              
              <div className={styles.modalFooter}>
                <button 
                  className={styles.modalDownloadBtn}
                  onClick={() => handleOpenPDF(selectedCertificate.pdfPath)}
                >
                  <FaExternalLinkAlt />
                  Open in New Tab
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        <motion.div 
          className={styles.infoSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaCertificate />
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Professional Development</h3>
              <p className={styles.infoText}>
                Committed to continuous learning and professional growth through certified courses 
                and training programs in cutting-edge technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;