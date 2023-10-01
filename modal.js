// DEFINIR A CLASS DA NOSSA MODAL
const modal = document.querySelector(".modal-container")

// CRIAR A FUNÇÃO PARA CHAMAR A MODAL
function openModal() {
    modal.classList.add("active")
}

// FUNÇÃO PRA FECHAR A MODAL
function closeModal() {
    modal.classList.remove('active')
}