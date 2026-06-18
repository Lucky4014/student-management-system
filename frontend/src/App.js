import React from 'react';
import { StudentProvider } from './context/StudentContext';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

function App() {
  return (
    <StudentProvider>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', fontFamily: 'Arial' }}>
        <h1 style={{ textAlign: 'center', color: '#4f46e5' }}>
           🎓 MERN Stack— Student Management System 
         
        </h1>
        <p style={{ textAlign: 'center', color: '#666' }}>Task 15: Full Stack Integration</p>
        <hr />
        <AddStudent />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;