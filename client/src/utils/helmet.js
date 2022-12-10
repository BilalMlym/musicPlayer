import React, { useState, useEffect } from 'react';

const HelmetInfo = ({ helmetId }) => {
  const [helmet, setHelmet] = useState(null);

  useEffect(() => {
    // Retrieve the helmet data
    // You could make an API call here to get the data,
    // or access it from a local source such as a database
    const fetchData = async () => {
      const response = await fetch(`/api/helmets/${helmetId}`);
      const data = await response.json();
      setHelmet(data);
    };
    fetchData();
  }, [helmetId]);

  if (!helmet) {
    return <p>Loading helmet information...</p>;
  }

  return (
    <>
      <h2>{helmet.name}</h2>
      <p>{helmet.description}</p>
    </>
  );
};
