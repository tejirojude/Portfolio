import { useState } from 'react'
import { Box, TextField, Button, Typography, Alert } from '@mui/material'

const FORM_ENDPOINT = 'https://formspree.io/f/yourFormId' // <-- replace with your Formspree form ID

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all fields.' })
      return
    }

    setSubmitting(true)
    setStatus(null)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thanks — your message was sent.' })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const data = await res.json().catch(() => null)
        setStatus({ type: 'error', message: data?.error || 'Something went wrong. Please try again later.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, textAlign: 'left' }}>
      {status && (
        <Alert severity={status.type} sx={{ mb: 2 }}>
          {status.message}
        </Alert>
      )}

      <TextField
        label="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        variant="filled"
        sx={{ mb: 2, background: 'rgba(255,255,255,0.02)' }}
      />

      <TextField
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        fullWidth
        required
        variant="filled"
        sx={{ mb: 2, background: 'rgba(255,255,255,0.02)' }}
      />

      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        required
        multiline
        rows={5}
        variant="filled"
        sx={{ mb: 2, background: 'rgba(255,255,255,0.02)' }}
      />

      <Button type="submit" variant="contained" size="large" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </Button>
    </Box>
  )
}
