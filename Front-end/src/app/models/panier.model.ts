import { Produit } from './produit.model';
import { User } from './user.model';

export interface Panier {
  id: number;
  produit: Produit;
  user: User;
}
