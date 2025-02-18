import "./App.css";
// import "./Exercices/Exercice1/Component.tsx";
import Exercice1 from "./Exercices/Exercice1/Component.tsx";
import BienvenueAventurier from "./Exercices/Exercice1/BienvenueAventurier.tsx";
import BoutonAppelArchibald from "./Exercices/Exercice2/BoutonAppelArchibald.tsx";
import {Miroir} from "./Exercices/Exercice3/Miroir.tsx";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
        <BienvenueAventurier titre="Boutique d'Archibald le Sorcier"
                             texte="Bienvenue Aventurier, ici vous pouvez acheter divers objets et potions
                                    magiques pour vos aventures !"/>
        <BoutonAppelArchibald />

      <h1 className="my-5">Voici quelques objets de ma boutique :</h1>

      <section id="exercice3" className="my-5 flex self-center">
        <h2>Le miroir de beauté</h2>
        <Miroir />

        <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
      </section>

      <section id="exercice4" className="my-5">
        <h2>Les boîtes polycouleurs</h2>

        <div className="row">
          <div className="col">
            <button className="btn btn-danger">
              🪄 Change la première boîte en rouge
            </button>
          </div>
          <div className="col">
            <button className="btn btn-primary">
              🪄 Change les 2 premieres boîtes en bleu
            </button>
          </div>
          <div className="col">
            <button className="btn btn-success">
              🪄 Change toutes les boîtes en vert
            </button>
          </div>
        </div>

        <div className="row mt-5 gap-5">
          <div className="boite"></div>
          <div className="boite"></div>
          <div className="boite"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
