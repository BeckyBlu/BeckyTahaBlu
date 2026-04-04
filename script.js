/**
 * Age Verification System
 * 
 * This script handles age verification for age-restricted content.
 * It uses browser localStorage to remember the user's verification status.
 */

// ============================================
// CONFIGURATION - You can customize these values
// ============================================
const AGE_REQUIREMENT = 18;                    // Minimum age required
const STORAGE_KEY = 'ageVerified';            // localStorage key name
const STORAGE_DURATION_DAYS = 30;             // How long to remember verification (0 = session only)
const LOCK_CLASS = 'age-gate-lock';           // CSS class to enforce page lock

// ============================================
// AGE VERIFICATION LOGIC
// ============================================

function initAgeGate() {
  const modal = document.getElementById('ageGateModal');
  const form = document.getElementById('ageGateForm');
  const birthDateInput = document.getElementById('birthDate');
  const errorDiv = document.getElementById('ageGateError');
  const declineBtn = document.getElementById('declineBtn');

  if (isAgeVerified()) {
    unlockPage();
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    return;
  }

  lockPage();
  modal.classList.add('show');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => birthDateInput.focus(), 0);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const birthDate = new Date(birthDateInput.value);

    if (isValidBirthDate(birthDate)) {
      const age = calculateAge(birthDate);

      if (age >= AGE_REQUIREMENT) {
        markAgeVerified();
        unlockPage();
        modal.classList.remove('show');
        errorDiv.textContent = '';
      } else {
        errorDiv.textContent = `You must be ${AGE_REQUIREMENT}+ to enter.`;
        birthDateInput.focus();
      }
    } else {
      errorDiv.textContent = 'Please enter a valid date.';
      birthDateInput.focus();
    }
  });

  declineBtn.addEventListener('click', () => {
    errorDiv.textContent = 'Access denied. You must be 18+ to view this site.';
    modal.querySelector('h2').textContent = 'Access Denied';
    form.querySelector('.age-gate-buttons').style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('keydown', (event) => {
    if (!isAgeVerified() && modal.classList.contains('show')) {
      if (event.key === 'Escape') {
        event.preventDefault();
      }

      if (event.key === 'Tab') {
        const focusable = Array.from(modal.querySelectorAll('input, button'));
        const currentIndex = focusable.indexOf(document.activeElement);
        if (currentIndex === -1 || (event.shiftKey && currentIndex === 0)) {
          event.preventDefault();
          focusable[focusable.length - 1].focus();
        } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
          event.preventDefault();
          focusable[0].focus();
        }
      }
    }
  });
}

function lockPage() {
  document.body.classList.add(LOCK_CLASS);
  document.documentElement.style.overflow = 'hidden';
}

function unlockPage() {
  document.body.classList.remove(LOCK_CLASS);
  document.documentElement.style.overflow = '';
}

/**
 * Calculate age from birth date
 * @param {Date} birthDate - User's birth date
 * @returns {number} Age in years
 */
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Adjust if birthday hasn't occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Validate that birth date is reasonable
 * @param {Date} date - Date to validate
 * @returns {boolean}
 */
function isValidBirthDate(date) {
  const today = new Date();
  
  // Check if it's a valid date
  if (isNaN(date.getTime())) {
    return false;
  }
  
  // Check if date is not in the future
  if (date > today) {
    return false;
  }
  
  // Check if person is not impossibly old (over 120 years)
  const age = calculateAge(date);
  if (age > 120) {
    return false;
  }
  
  return true;
}

/**
 * Check if age verification is already stored in localStorage
 * @returns {boolean}
 */
function isAgeVerified() {
  const verified = localStorage.getItem(STORAGE_KEY);

  if (!verified) {
    return false;
  }

  let data;
  try {
    data = JSON.parse(verified);
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
    return false;
  }

  if (!data || !data.verified) {
    return false;
  }

  if (STORAGE_DURATION_DAYS > 0) {
    const storedTime = data.timestamp;
    const expirationTime = storedTime + (STORAGE_DURATION_DAYS * 24 * 60 * 60 * 1000);

    if (Date.now() > expirationTime) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
  }

  return true;
}

/**
 * Mark user as age verified in localStorage
 */
function markAgeVerified() {
  const verificationData = {
    verified: true,
    timestamp: Date.now()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(verificationData));
}

/**
 * Clear age verification (useful for testing)
 */
function clearAgeVerification() {
  localStorage.removeItem(STORAGE_KEY);
  console.log('Age verification cleared. Reload page to see age gate again.');
}

// ============================================
// Initialize on page load
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode detection
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  initAgeGate();
});

console.log('Becky Taha Blu site loaded with age verification');
