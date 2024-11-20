import * as React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


export default function BasicButtons() {
  return (
    <div>
      
     <img 
       src="moana.jpg"
       alt="Description of the image"
       
       style={{
        width:"20%",
        height:"400px",
        marginleft:"900px",
        borderRadius:"30px",
        marginTop:"-5px",
      
      }}
     />
     

    <div>
     <Typography variant="h4" component="h4"
     style={{marginleft:"900px"}}>
          Moana 2
     </Typography>
     <Rating />

    
     
    </div>
    </div>
    

    
    
   
  );
}    