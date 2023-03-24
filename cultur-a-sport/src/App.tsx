import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, home, person } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import { Session } from '@supabase/supabase-js';
import { supabase } from './database/supabaseClient';


/* Theme variables */
import { useEffect, useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [logedIn, setLogedIn] = useState(true)
  const [session, setSession] = useState<Session|null>(null)
  useEffect(() => {
    //setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("🚀 ~ file: App.tsx:51 ~ supabase.auth.onAuthStateChange ~ session:", session)
      setSession(session)
      setLogedIn(!!session)
    })
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
         <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
            <Route exact path="/login">
            <LoginPage />
          </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={calendar} />
              <IonLabel>Mes Activités</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={person} />
              <IonLabel>Profil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
