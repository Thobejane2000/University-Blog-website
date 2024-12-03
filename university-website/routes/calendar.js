const express = require('express');
const router = express.Router();
const db = require('../config/db');

// ========== Route to Add a New Event ==========
router.post('/events', (req, res) => {
  const { title, description, event_date, event_time, location } = req.body;
  const sql = `
    INSERT INTO events (title, description, event_date, event_time, location)
    VALUES (?, ?, ?, ?, ?)
  `;
  const params = [title, description, event_date, event_time, location];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to add event' });
    }
    res.json({ message: 'Event added successfully', eventId: this.lastID });
  });
});

// ========== Route to Delete an Event ==========
router.delete('/events/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM events WHERE id = ?`;

  db.run(sql, id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete event' });
    }
    res.json({ message: 'Event deleted successfully' });
  });
});

module.exports = router;
