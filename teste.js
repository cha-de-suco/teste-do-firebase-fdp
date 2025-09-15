
import { db, auth } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Função de criar usuário com email/senha
export async function criarUsuario(email, senha, nome) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCred.user;
    console.log("Usuário registrado:", user.uid);

    await setDoc(doc(db, "usuarios", user.uid), {
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

// Função de login com Google
export async function loginGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Login Google:", user.displayName, user.email);

    // Salvar no Firestore (se ainda não existir)
    await setDoc(doc(db, "usuarios", user.uid), {
      uid: user.uid,
      nome: user.displayName,
      email: user.email,
      foto: user.photoURL,
      criadoEm: new Date()
    }, { merge: true }); // merge evita sobrescrever caso já exista

    console.log("Usuário Google salvo no Firestore!");
  } catch (err) {
    console.error("Erro no login Google:", err.message);
  }
}
