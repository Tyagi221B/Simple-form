import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user = useSelector((state) => state.Auth.user);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      console.log(user)
      toast("Please login First");
      navigate('/login');
      return;
    }
    else{
      console.log("user is present")
      // Handle form submission logic here
    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
