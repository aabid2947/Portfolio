import { db } from '../firebase/firebase'; // Adjust path if necessary
import { collection, getDocs } from 'firebase/firestore';

export const getSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Skills"));
     
      const skills = querySnapshot.docs.map(doc => doc.data());
      
      return skills;
    } catch (err) {
      console.error("Error fetching skills: ", err);
      throw new Error('Failed to fetch skills'); // Re-throw the error or return a specific message
    }
  };

export const getMainProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "mainProjects"));
     
      const mainProjects = querySnapshot.docs.map(doc => doc.data());
      
      return mainProjects;
    } catch (err) {
      console.error("Error fetching main projects: ", err);
      throw new Error('Failed to fetch main projects'); // Re-throw the error or return a specific message
    }
  };