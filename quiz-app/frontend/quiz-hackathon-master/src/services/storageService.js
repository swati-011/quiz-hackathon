import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';

const SCORES = 'scores';

// Save a completed attempt
export const saveScore = async ({ name, score, total }) => {
  try {
    await addDoc(collection(db, SCORES), {
      name,
      score,
      total,
      createdAt: Date.now()
    });
  } catch (e) {
    console.error('Error saving score ⇒ ', e);
  }
};

// Grab the top 5 scores
export const fetchLeaderboard = async () => {
  const q = query(collection(db, SCORES), orderBy('score', 'desc'), limit(5));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
};
