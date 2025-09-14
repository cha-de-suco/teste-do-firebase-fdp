// main.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// exemplo: salvar
async function salvarUsuario() {
  await addDoc(collection(db, "usuarios"), {
    nome: "Carlos",
    idade: 25
  });
  console.log("Usuário salvo!");
}

// exemplo: ler
async function listarUsuarios() {
  const snapshot = await getDocs(collection(db, "usuarios"));
  snapshot.forEach(doc => {
    console.log(doc.id, " => ", doc.data());
  });
}

salvarUsuario();
listarUsuarios();
