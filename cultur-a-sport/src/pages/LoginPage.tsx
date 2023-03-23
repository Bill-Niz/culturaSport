import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar, useIonLoading, useIonToast
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../database/supabaseClient';
import './LoginPage.css';


export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast ] = useIonToast();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log()
    e.preventDefault();
    await showLoading();
    try {
      await supabase.auth.signInWithPassword({ email:email,password:'' });
    } catch (e: any) {
      await showToast({ message: e.error_description || e.message , duration: 5000});
    } finally {
      await hideLoading();
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="ion-padding">
          <h1>CulturASport</h1>
          <p>Se connected avec e-mail / mot de passe</p>
        </div>
        <IonList inset={true}>
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="stacked">E-mail</IonLabel>
              <IonInput
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? '')}
                type="email"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Mot de passe</IonLabel>
              <IonInput
                value={password}
                name="password"
                onIonChange={(e) => setPassword(e.detail.value ?? '')}
                type="password"
              ></IonInput>
            </IonItem>
            <div className="ion-text-center">
              <IonButton type="submit">
                Se connecter
              </IonButton>
            </div>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

