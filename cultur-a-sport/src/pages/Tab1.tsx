import {
  IonCard,
  IonCardHeader,
  IonCardTitle, IonContent,
  IonHeader,
  IonPage, IonSlide, IonSlides, IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab1.css";

const slideOpts = {
  spaceBetween: 5,
  speed: 400
};


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className="ion-padding">
          <h1>A proximité</h1>
          <IonSlides options={slideOpts}>
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 1</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 2</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
            
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 3</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
          </IonSlides>

          <h1>Pour toi</h1>
          <IonSlides options={slideOpts}>
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 1</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 2</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
            
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 3</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
          </IonSlides>

          <h1>Decouvrir</h1>
          <IonSlides options={slideOpts}>
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 1</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 2</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
            
            <IonSlide>
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card 3</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>
          </IonSlides>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
