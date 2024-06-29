import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Grid, Typography, Paper } from '@mui/material';

const Student = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    dob: '',
    status: '',
    email: '',
    country: '',
    phone: '',
    gender: '',
    profilePic: '',
    github: '',
    linkedIn: '',
    soProfile: '',
    cv: '',
    skills: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setForm({
      ...form,
      skills: checked
        ? [...form.skills, value]
        : form.skills.filter((skill) => skill !== value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', form);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Student Information
      </Typography>
      <form className="manage-users-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Personal Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={form.location}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DOB"
              name="dob"
              value={form.dob}
              onChange={handleInputChange}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Professional Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Status"
              name="status"
              value={form.status}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={form.country}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Github"
              name="github"
              value={form.github}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="LinkedIn"
              name="linkedIn"
              value={form.linkedIn}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="SO Profile"
              name="soProfile"
              value={form.soProfile}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              type="file"
              name="profilePic"
              onChange={(e) => setForm({ ...form, profilePic: e.target.files[0] })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              type="file"
              name="cv"
              onChange={(e) => setForm({ ...form, cv: e.target.files[0] })}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Skills</Typography>
          </Grid>
          {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'].map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.skills.includes(skill)}
                    onChange={handleSkillChange}
                    name="skills"
                    value={skill}
                  />
                }
                label={skill}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Student;
