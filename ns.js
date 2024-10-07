const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');
const copyBtn = document.getElementById('copy');

generateBtn.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);  // Asegurar que la longitud sea un número entero
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    
    // Añadir las opciones adicionales si están seleccionadas
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+{}[]';

    // Validar que haya al menos un conjunto de caracteres seleccionado
    if (characters.length === 0) {
        alert('Debe seleccionar al menos un tipo de caracteres.');
        return;
    }

    // Generar la contraseña
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    passwordField.value = password;  // Mostrar la contraseña generada
});

// Función para copiar la contraseña al portapapeles
copyBtn.addEventListener('click', () => {
    if (passwordField.value !== '') {
        passwordField.select();
        document.execCommand('copy');
        alert('¡Contraseña copiada!');
    } else {
        alert('No hay ninguna contraseña para copiar.');
    }
});
