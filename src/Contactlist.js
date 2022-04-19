import { IconButton } from '@mui/material';
import { Profile } from "./Profile";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Contactlist({ contactlist,setContactlist }) {


  return (
  
   
   <div className='contactlist'>
      {contactlist.map(({ name, img, address, phonenumber},index) => <Profile
        name={name}
        img={img}
        address={address}
        phonenumber={phonenumber} 
        deleteButton={<IconButton  onClick={()=>{
            console.log(index);
          const copyContactlist=[...contactlist];
          copyContactlist.splice(index,1);
          setContactlist(copyContactlist);
          }}
          aria-label="delete"color="error"><DeleteIcon /></IconButton>
          }
          
          
          id={index} />)}
        
    </div>
  );
}
