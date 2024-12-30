import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const NailSalonAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your appointment request has been submitted!");
  };

  return (

    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        mt: 4,
        backgroundColor: "ghostwhite",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Nail Salon Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Phone Field */}
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Date Picker */}
        <TextField
          fullWidth
          label="Preferred Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Time Picker */}
        <TextField
          fullWidth
          label="Preferred Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Service Selection */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="service-label">Select Service</InputLabel>
          <Select
            labelId="service-label"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <MenuItem value="Manicure">Manicure</MenuItem>
            <MenuItem value="Pedicure">Pedicure</MenuItem>
            <MenuItem value="Nail Art">Nail Art</MenuItem>
            <MenuItem value="Acrylic Nails">Acrylic Nails</MenuItem>
            <MenuItem value="Gel Polish">Gel Polish</MenuItem>
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit Request
        </Button>
      </form>
    </Box>
  );
};

export default NailSalonAppointmentForm;
