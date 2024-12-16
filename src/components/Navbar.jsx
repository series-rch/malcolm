import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const topics = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  return (
    <nav style={styles.navbar}>
      {topics.map((topic) => (
        <Link key={topic} to={`/${topic}`} style={styles.button}>
          {topic}
        </Link>
      ))}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Navbar;
