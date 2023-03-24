import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { logOutOutline, pencilOutline, logoTwitter, logoGithub, logoInstagram, arrowForward, bookmarkOutline, chatboxEllipsesOutline, imageOutline, personAddOutline } from 'ionicons/icons';
import './Tab3.css';

function openContact(contact: string) {
  window.open(contact, '_blank');
}


function openExternalUrl(url: string) {
  window.open(url, '_blank');
}

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonToolbar>
            <IonTitle>Mon profil
                <IonChip onClick={() => openExternalUrl(`https://twitter.com/${'test'}`)}>
                  <IonIcon icon={logoTwitter}></IonIcon>
                  <IonLabel>Twitter</IonLabel>
                </IonChip>
                <IonChip onClick={() => openExternalUrl('https://instagram.com/ionicframework')}>
                  <IonIcon icon={logoInstagram}></IonIcon>
                  <IonLabel>Instagram</IonLabel>
                </IonChip>
            </IonTitle>
          </IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            IonToolbar
          </IonToolbar>
        </IonHeader>
        <div className="topHeader"></div>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCard className="profileHeader">
                <IonCardContent>
                  <IonRow>
                    <IonCol size="4">
                      <img src="/assets/camille.jpg" alt="Camille Lou" className="avatar" />
                    </IonCol>
                    <IonCol size="8">
                      <IonRow className="profileInfo">
                        <IonCol size="12">
                          <IonText color="dark" className="profileName">
                            <p>Camille Lou</p>
                          </IonText>
                          <IonText color="medium">
                            <p>Ottignies-Louvain-La-Neuve, Brabant Wallon, Belgique</p>
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText color="dark">
                        <p>Centres d'intérêt</p>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonGrid>
                        <IonRow>
                          <IonCol><IonBadge color="primary">Activités sportives</IonBadge></IonCol>
                          <IonCol><IonBadge color="secondary">Voyages</IonBadge></IonCol>
                          <IonCol><IonBadge color="tertiary">Cuisine</IonBadge></IonCol>
                          <IonCol><IonBadge color="success">Musique</IonBadge></IonCol>
                          <IonCol><IonBadge color="warning">Bien-être et santé</IonBadge></IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonButton fill="outline" expand="block">
                        <IonIcon icon={pencilOutline} size="small" />&nbsp;
                        Modifier mon profil
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonButton color="primary" expand="block">
                        <IonIcon icon={logOutOutline} size="small" />&nbsp;
                        Me déconnecter
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};



export default Tab3;
