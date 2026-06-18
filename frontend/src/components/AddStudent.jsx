import React, { useState } from 'react';
import { useStudents } from '../context/StudentContext.jsx';

const AddStudent = () => {
  const { addStudent } = useStudents();
  const [form, setForm] = useState({ name: '', email: '', course: '', grade: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addStudent(form);
    if (result.success) {
      setMsg('✅ Student successfully add ho gaya!');
      setForm({ name: '', email: '', course: '', grade: '' });
    } else {
      setMsg(`❌ Error: ${result.message}`);
    }
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div style={styles.card}>
      <h2>📝 Naya Student Add Karo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Student ka Naam" value={form.name}
          onChange={handleChange} required style={styles.input} />
        <input name="email" placeholder="Email" type="email" value={form.email}
          onChange={handleChange} required style={styles.input} />
        <input name="course" placeholder="Course (e.g. React, Node)" value={form.course}
          onChange={handleChange} required style={styles.input} />
        <input name="grade" placeholder="Grade (A, B, C...)" value={form.grade}
          onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.btn}>Student Add Karo</button>
      </form>
      {msg && <p style={styles.msg}>{msg}</p>}
    </div>
  );
};

const styles = {
  card: { background: '#f0f4ff', padding: '20px', borderRadius: '10px', marginBottom: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' },
  btn: { padding: '10px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' },
  msg: { marginTop: '10px', fontWeight: 'bold' }
};

export default AddStudent;
