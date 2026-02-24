// AfriTradeHub - Modal System

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Switch between modals
function switchModal(from, to) {
    closeModal(from);
    setTimeout(() => openModal(to), 100);
}

// Update account type hidden field
function updateAccountType() {
    const checkbox = document.getElementById('joinAsSupplier');
    if (checkbox) {
        document.getElementById('signupAccountType').value = checkbox.checked ? 'supplier' : 'buyer';
    }
}

// Show signup error
function showSignupError(msg) {
    const err = document.getElementById('signupError');
    if (err) {
        err.textContent = msg;
        err.style.display = 'block';
        setTimeout(() => err.style.display = 'none', 5000);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.className === 'modal') {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Sign in handler
    const signinForm = document.getElementById('signinModalForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signinEmail').value;
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', email.split('@')[0]);
            closeModal('signinModal');
            location.reload();
        });
    }

    // Sign up handler
    const signupForm = document.getElementById('signupModalForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('signupFirstName').value;
            const lastName = document.getElementById('signupLastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const countryCode = document.getElementById('signupCountryCode').value;
            const phone = document.getElementById('signupPhone').value;
            const isSupplier = document.getElementById('joinAsSupplier').checked;

            if (password !== confirmPassword) {
                showSignupError('Passwords do not match!');
                return;
            }

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', firstName + ' ' + lastName);
            localStorage.setItem('userPhone', countryCode + phone);
            localStorage.setItem('accountType', isSupplier ? 'supplier' : 'buyer');
            localStorage.setItem('isLoggedIn', 'true');

            closeModal('signupModal');
            location.reload();
        });
    }
});

console.log('AfriTradeHub - Modal system initialized');
