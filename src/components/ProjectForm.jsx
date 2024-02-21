import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import postProject from '../api/post-project';
import './ProjectForm.css';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const newProject = postProject({
      title,
      description,
      goal,
      image
    });
    newProject.then(project => {
      navigate(`/project/${project.id}`);  
    }).finally(() => setIsSubmitting(false));   
  };

  return (
    <form onSubmit={handleSubmit} id='project-form'>
      <input
        type="text"
        name="title"
        placeholder="Project title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        name="description"
        placeholder="Project description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        name="goal"
        placeholder="Goal $ amount"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />
      <input
        type="text"
        name="image"
        placeholder="Upload image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <button type="submit" className='new-proj-button' disabled={isSubmitting}>
        Create project
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ProjectForm;
