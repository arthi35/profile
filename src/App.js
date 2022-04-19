import logo from './logo.svg';
import './App.css';
import{ useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Contactlist } from './Contactlist';

function App() {
 
  const INITIAL_CONTACT_LIST=[
    {
    name:"Vimal",
    img:"http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-5-2.jpg",
    address:"6th,Avenue ,2nd street London",
    phonenumber:"234-789-675"
  },

{
      name:"Vinoth",
    img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address:"5th,Avenue ,1st cross street Bangalore",
    phonenumber:"1354-7189-7675"
},
{
  name:"Anand",
  img:"https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Stylish-Boy-DP-with-Attitude-8.jpg",
  address:"7th Cross,yellaiamman street,Chennai",
  phonenumber:"4532-7865"
},
{
  "name":"Harry",
  "img":"https://i.pinimg.com/736x/f3/12/16/f31216351763122cdcd1e53958fd5115.jpg",
  "address":"12th Avenue,Newyork,America",
  "phonenumber":"2314-7845"

}

]

const [contactlist,setContactlist]=useState(INITIAL_CONTACT_LIST);
const[name,setName]=useState('');
const[img,setImg]=useState('');
const[address,setAddress]=useState('');
const[phonenumber,setPhonenumber]=useState('');
return(
  
  <div>
   
    <div className='add-contact-form'>
    <TextField onChange={(event)=>setName(event.target.value)}label="Name"varient="outlined"/>
    <TextField onChange={(event)=>setImg(event.target.value)}label="Image"variant='outlined'/>
    <TextField onChange={(event)=>setAddress(event.target.value)}label="Address"variant='outlined'/>
    <TextField onChange={(event)=>setPhonenumber(event.target.value)}label="PhoneNumber"variant='outlined'/>
   <Button onClick={()=>{
        const newcontact={
          name:name,
          img:img,
          address:address,
          phonenumber:phonenumber
        };
        setContactlist([...contactlist,newcontact]);
      }}variant='contained'>AddProfile</Button>
    </div>
   <Contactlist contactlist={contactlist} setContactlist={setContactlist}/>
  </div>

)

  
}
export default App;