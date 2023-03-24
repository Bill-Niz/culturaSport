import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonChip, IonContent,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonSlide, IonSlides, IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab1.css";

const slideOpts = {
  spaceBetween: 5,
  speed: 400
};

const data = [
  {
    "title": 'À proximité',
    "data": [{
      "img": "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {}]
  },
  {
    "title": 'Pour toi',
    "data": [{ "img": "https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }]
  },
  {
    "title": 'Découvrir',
    "data": [{}, {}, {}, {}]
  },
]

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
          {data.map((d) => (<>
            <h1>{d.title}</h1>
            <IonSlides options={slideOpts}>
              {d.data.map((e) => (
                <IonSlide>
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src={e.img || "https://ionicframework.com/docs/img/demos/card-media.png"}
                    />
                    <IonCardHeader>
                      <IonCardSubtitle>
                        <IonChip>
                          
                          <IonLabel>Art</IonLabel>

                        </IonChip>
                        <IonChip>
                          <IonIcon name="pin" color="primary"></IonIcon>
                          <IonLabel>Food</IonLabel>
                        </IonChip>
                        <IonChip>
                          <IonIcon name="pin" color="primary"></IonIcon>
                          <IonLabel>Icon Chip</IonLabel>
                          <IonIcon name="close"></IonIcon>
                        </IonChip>
                      </IonCardSubtitle>
                      <IonCardTitle>Musée / Gastronomie</IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>))}

            </IonSlides>
          </>))}
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
