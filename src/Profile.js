export function Profile({ name, img, address, phonenumber,deleteButton }) {
  return (
    <div className='profile-container'>
      <img className='profile-picture' src={img} alt={name} />
      <h2 className='profile-name'>{name}</h2>
      <p className='user-address'>{address}</p>
      <p>{phonenumber}</p>
      {deleteButton}
    </div>
  );
}
