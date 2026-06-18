import React from 'react';
import { StudentProvider } from './context/StudentContext.jsx';
import AddStudent from './components/AddStudent.jsx';
import StudentList from './components/StudentList.jsx';

function App() {
  return (
    <StudentProvider>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', fontFamily: 'Arial' }}>
        <h1 style={{ textAlign: 'center', color: '#4f46e5' }}>
          🎓 MERN Stack — Student Management System
        </h1>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Task 15: Full Stack Integration
        </p>
        <hr />
        <AddStudent />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;