document.getElementById("copyPix").addEventListener("click", function() {
    const pixCode = "00020101021126580014br.gov.bcb.pix0136f0501667-7370-4b0b-9f26-4361508747345204000053039865802BR5918ANISIO SILVA LEITE6009SAO PAULO622905251JN0X8Y5DX4EY2Y6WE375MAAN63043073";
    
    // Criar um elemento de input temporário para copiar o código Pix
    const tempInput = document.createElement("input");
    tempInput.value = pixCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alterar o botão após a cópia
    const button = document.getElementById("copyPix");
    button.innerText = "Copiado!";
    button.style.backgroundColor = "#4CAF50"; // Verde moderno

    // Restaurar o texto original após 2 segundos
    setTimeout(() => {
        button.innerText = "Copiar Código Pix";
        button.style.backgroundColor = "#008CBA"; // Volta ao azul original
    }, 2000);
});
