// main.js
import { db, auth } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Função de criar usuário
export async function criarUsuario(email, senha, nome) {
  try {
    // 1️⃣ Cria no Firebase Auth
    const userCred = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCred.user;
    console.log("Usuário registrado:", user.uid);

    // 2️⃣ Salva dados extras no Firestore
    await addDoc(collection(db, "usuarios"), {
      uid: user.uid,
      nome: nome,
      email: email,
      criadoEm: new Date()
    });
    console.log("Usuário salvo no Firestore!");
  } catch (err) {
    console.error("Erro ao criar usuário:", err.message);
  }
}

// Exemplo de uso
// criarUsuario("carlos@email.com", "123456", "Carlos");
