document.addEventListener('DOMContentLoaded', function () {
    // Alternar visibilidade da senha
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('senha');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Validação de força da senha
    const senhaInput = document.getElementById('senha');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');

    if (senhaInput) {
        senhaInput.addEventListener('input', function () {
            const password = this.value;
            let strength = 0;

            // Verificar comprimento
            if (password.length >= 8) strength += 1;

            // Verificar letras maiúsculas e minúsculas
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

            // Verificar números
            if (/[0-9]/.test(password)) strength += 1;

            // Verificar caracteres especiais
            if (/[^A-Za-z0-9]/.test(password)) strength += 1;

            // Atualizar barra de força
            let width = '0%';
            let color = '#e74c3c';
            let text = 'Muito fraca';

            if (strength === 1) {
                width = '25%';
                color = '#e74c3c';
                text = 'Fraca';
            } else if (strength === 2) {
                width = '50%';
                color = '#f39c12';
                text = 'Moderada';
            } else if (strength === 3) {
                width = '75%';
                color = '#3498db';
                text = 'Forte';
            } else if (strength >= 4) {
                width = '100%';
                color = '#2ecc71';
                text = 'Muito forte';
            }

            strengthBar.style.width = width;
            strengthBar.style.backgroundColor = color;
            strengthText.textContent = `Força da senha: ${text}`;
        });
    }

    // Validação do formulário
    const form = document.getElementById('cadastroForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validar senhas
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmar_senha').value;

            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem. Por favor, verifique.');
                document.getElementById('confirmar_senha').focus();
                return;
            }

            // Validar termos
            const termos = document.getElementById('termos').checked;

            if (!termos) {
                alert('Você precisa concordar com os Termos de Uso e Política de Privacidade.');
                return;
            }

            // Simular envio do formulário
            alert('Cadastro realizado com sucesso! Em breve você receberá um e-mail de confirmação.');

            // Aqui você implementaria o envio para o backend
            // form.submit();
        });
    }

    // Formatação do telefone
    const telefoneInput = document.getElementById('telefone');

    if (telefoneInput) {
        telefoneInput.addEventListener('input', function () {
            let value = this.value.replace(/\D/g, '');

            if (value.length > 11) {
                value = value.substring(0, 11);
            }

            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d{0,2})/, '($1');
            }

            this.value = value;
        });
    }
});