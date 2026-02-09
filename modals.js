// Modal Functions - Load immediately
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function switchModal(currentModal, newModal) {
    closeModal(currentModal);
    setTimeout(() => openModal(newModal), 100);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Account type selection
function selectAccountType(btn, type) {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('signupAccountType').value = type;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modals initialized');
    
    // Add modal styles to head if not already there
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal {
                display: none;
                position: fixed;
                z-index: 9999;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                animation: fadeIn 0.3s;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-content {
                background: white;
                margin: 3% auto;
                padding: 0;
                width: 90%;
                max-width: 500px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                animation: slideDown 0.3s;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            }
            
            @keyframes slideDown {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .modal-close {
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 28px;
                font-weight: bold;
                color: #999;
                cursor: pointer;
                z-index: 10;
                line-height: 1;
            }
            
            .modal-close:hover {
                color: #333;
            }
            
            .modal-header {
                padding: 30px 30px 20px;
                border-bottom: 1px solid #e0e0e0;
            }
            
            .modal-header h2 {
                color: #ff6b35;
                margin-bottom: 5px;
            }
            
            .modal-header p {
                color: #666;
                font-size: 0.95rem;
            }
            
            .modal form {
                padding: 30px;
            }
            
            .form-group-modal {
                margin-bottom: 20px;
            }
            
            .form-group-modal label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #333;
                font-size: 0.9rem;
            }
            
            .form-group-modal input {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #e0e0e0;
                border-radius: 6px;
                font-size: 1rem;
                font-family: 'Inter', sans-serif;
            }
            
            .form-group-modal input:focus {
                outline: none;
                border-color: #ff6b35;
            }
            
            .form-row-modal {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }
            
            .form-remember {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                font-size: 0.9rem;
            }
            
            .form-remember input {
                width: auto !important;
            }
            
            .form-remember a {
                color: #ff6b35;
                text-decoration: none;
            }
            
            .form-remember a:hover {
                text-decoration: underline;
            }
            
            .form-check-modal {
                margin-bottom: 20px;
            }
            
            .form-check-modal label {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                font-size: 0.9rem;
                color: #666;
                cursor: pointer;
            }
            
            .form-check-modal input[type="checkbox"] {
                margin-top: 3px;
                cursor: pointer;
            }
            
            .btn-modal-submit {
                width: 100%;
                padding: 14px;
                background: #ff6b35;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 1.05rem;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.3s;
            }
            
            .btn-modal-submit:hover {
                background: #e55a2b;
            }
            
            .modal-divider-text {
                text-align: center;
                margin: 25px 0;
                position: relative;
                color: #999;
                font-size: 0.9rem;
            }
            
            .modal-divider-text::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: 1px;
                background: #e0e0e0;
                z-index: 0;
            }
            
            .social-login-btns {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .social-btn {
                padding: 12px;
                border: 1px solid #e0e0e0;
                background: white;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s;
            }
            
            .social-btn:hover {
                background: #f5f7fa;
                border-color: #ff6b35;
            }
            
            .modal-footer {
                text-align: center;
                margin-top: 25px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 0.95rem;
            }
            
            .modal-footer a {
                color: #ff6b35;
                text-decoration: none;
                font-weight: 600;
            }
            
            .modal-footer a:hover {
                text-decoration: underline;
            }
            
            .account-type-selector {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .type-btn {
                padding: 15px;
                border: 2px solid #e0e0e0;
                background: white;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                font-weight: 600;
            }
            
            .type-btn:hover {
                border-color: #ff6b35;
                background: #fff5f2;
            }
            
            .type-btn.active {
                border-color: #ff6b35;
                background: #fff5f2;
                color: #ff6b35;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Sign In Form Submit
    const signinForm = document.getElementById('signinModalForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;
            
            // Store user data
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', email.split('@')[0]);
            
            closeModal('signinModal');
            alert('✓ Signed in successfully!\n\nWelcome back to AfriTradeHub!');
            
            // Reload page to update UI
            setTimeout(() => location.reload(), 500);
        });
    }
    
    // Sign Up Form Submit
    const signupForm = document.getElementById('signupModalForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('signupFirstName').value;
            const lastName = document.getElementById('signupLastName').value;
            const email = document.getElementById('signupEmail').value;
            const company = document.getElementById('signupCompany').value;
            const accountType = document.getElementById('signupAccountType').value;
            const terms = document.getElementById('signupTerms').checked;
            
            if (!terms) {
                alert('Please agree to the Terms & Privacy Policy');
                return;
            }
            
            // Store user data
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', firstName + ' ' + lastName);
            localStorage.setItem('userCompany', company);
            localStorage.setItem('accountType', accountType);
            localStorage.setItem('isLoggedIn', 'true');
            
            closeModal('signupModal');
            alert('✓ Account created successfully!\n\nWelcome to AfriTradeHub, ' + firstName + '!');
            
            // Reload page to update UI
            setTimeout(() => location.reload(), 500);
        });
    }
});

console.log('Modal system loaded successfully!');
