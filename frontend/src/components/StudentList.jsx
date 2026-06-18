import React from 'react';
import { useStudents } from '../context/StudentContext.jsx';

const StudentList = () => {
  const { students, loading, error, deleteStudent, fetchStudents } = useStudents();

  if (loading) return <p style={{ textAlign: 'center', fontSize: '18px' }}>⏳ Loading...</p>;

  if (error) return (
    <div style={{ background: '#fee2e2', padding: '15px', borderRadius: '8px' }}>
      <p>❌ Error: {error}</p>
      <button onClick={fetchStudents} style={{ marginTop: '8px', padding: '8px 16px', cursor: 'pointer' }}>
        🔄 Dobara Try Karo
      </button>
    </div>
  );

  return (
    <div>
      <h2>👨‍🎓 Students List ({students.length})</h2>
      {students.length === 0 ? (
        <p>Koi student nahi mila. Upar se add karo!</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.thead}>
              <th>Naam</th><th>Email</th><th>Course</th><th>Grade</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id} style={styles.row}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => deleteStudent(s._id)} style={styles.delBtn}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  table: { width: '100%', borderCollapse: 'collapse' },
  thead: { background: '#4f46e5', color: 'white' },
  row: { borderBottom: '1px solid #e5e7eb', padding: '10px' },
  delBtn: { background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }
};

export default StudentList;