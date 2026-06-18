import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../api/api';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Saare students fetch karo
  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await API.get('/students');
      setStudents(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Server se connect nahi ho pa raha!');
    } finally {
      setLoading(false);
    }
  };

  // Student add karo
  const addStudent = async (studentData) => {
    try {
      const res = await API.post('/students', studentData);
      setStudents(prev => [...prev, res.data.data]);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Add failed!' };
    }
  };

  // Student delete karo
  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/${id}`);
      setStudents(prev => prev.filter(s => s._id !== id));
    } catch (err) {
      setError('Delete nahi ho pa raha!');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, loading, error, addStudent, deleteStudent, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
