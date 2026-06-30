import { useState } from 'react'
import '../styles/Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const nextValue = type === 'checkbox' ? checked : value

    setFormData((previous) => ({
      ...previous,
      [name]: nextValue,
    }))

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    console.log('Login submitted:', {
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    })
  }

  return (
    <div className="login-page">
      <section className="login-hero" aria-label="Productivity illustration">
        <div className="brand-block">
          <span className="brand-pill">Smart Student Task Manager</span>
        </div>

        <div className="hero-card">
          <svg viewBox="0 0 420 320" className="hero-illustration" role="img" aria-label="Student planning illustration">
            <rect x="70" y="54" width="280" height="212" rx="28" fill="#F8FBFF" />
            <rect x="100" y="92" width="170" height="16" rx="8" fill="#2563EB" fillOpacity="0.16" />
            <rect x="100" y="122" width="130" height="12" rx="6" fill="#93C5FD" />
            <rect x="100" y="148" width="150" height="12" rx="6" fill="#93C5FD" />
            <rect x="100" y="174" width="110" height="12" rx="6" fill="#93C5FD" />
            <rect x="290" y="90" width="48" height="48" rx="14" fill="#2563EB" />
            <path d="M304 108l8 8 14-16" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="312" cy="208" r="36" fill="#3B82F6" />
            <path d="M294 208h36" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
            <path d="M312 190v36" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
            <path d="M132 250c18-18 42-28 74-28 36 0 58 14 78 32" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="hero-copy">
          <h1>Plan smarter. Study better.</h1>
          <p>Track assignments, deadlines, and study goals in one calm, focused space.</p>
        </div>
      </section>

      <section className="login-card-section" aria-label="Login form">
        <div className="login-card">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your dashboard</h2>
          <p className="card-subtitle">Access your tasks, progress, and priorities in one place.</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password ? <p className="field-error">{errors.password}</p> : null}
            </div>

            <div className="form-options">
              <label className="checkbox-field">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="primary-button">
              Log In
            </button>

            <div className="divider" aria-hidden="true">
              <span>OR</span>
            </div>

            <button type="button" className="google-button">
              Continue with Google
            </button>

            <p className="register-text">
              New here? <a href="#" className="text-link">Create an account</a>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
