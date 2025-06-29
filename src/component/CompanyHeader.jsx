import React from 'react';

const CompanyHeader = () => {
  const styles = {
    containerWrapper: {
      padding: '2px', // For border effect
      background: 'linear-gradient(to bottom, #00f0ff, black)',
      borderRadius: '12px',
      display: 'inline-block',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#111',
      borderRadius: '10px',
      padding: '0.5rem 2rem',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)', // ✅ Cor
      width: '400px',
    },
    companyInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '2rem',
    },
    companyCode: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: 'white',
    },
    companyName: {
      fontSize: '0.5rem',
      color: '#aaa',
      marginTop: '-4px',
      letterSpacing: '1px',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    actionText: {
      fontSize: '1rem',
      color: '#fff',
    },
    plusButton: {
      // background: 'linear-gradient(145deg, #ff00cc, #00ccff)',
      border: 'none',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      color: '#ffffff',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <div style={styles.companyInfo}>
          <span style={styles.companyCode}>HEHC</span>
          <span style={styles.companyName}>HARPER ELLIS HAIR CO.</span>
        </div>
        <div style={styles.actions}>
          <span style={styles.actionText}>Carpe Diem</span>
          <button style={styles.plusButton}>+</button>
          <button style={styles.closeButton}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
