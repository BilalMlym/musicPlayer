import React from 'react'
import Header from "./Header";
import { Helmet } from "react-helmet";






const Home = () => {


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Helmet>
          <title>Home</title>
          <meta name="description" content="This is my app" />
        </Helmet>
       <Header/>
      
    


      
    </div>
  );
};


export default Home