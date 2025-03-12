document.getElementById("copyPix").addEventListener("click", function() {
    const pixCode = "00020101021126580014br.gov.bcb.pix0136f0501667-7370-4b0b-9f26-4361508747345204000053039865802BR5918ANISIO SILVA LEITE6009SAO PAULO622905251JN0X8Y5DX4EY2Y6WE375MAAN63043073";

    navigator.clipboard.writeText(pixCode).then(() => {
        alert("Código Pix copiado!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
});