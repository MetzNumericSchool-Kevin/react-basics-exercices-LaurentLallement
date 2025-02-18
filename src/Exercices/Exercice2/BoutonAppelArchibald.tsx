export default function BoutonAppelArchibald(props) {
    return (
        <section id="exercice2">
            <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
            <BoutonSonner quandSorcierRepond={()=>{sorcierRepond("‍♂️ Archibald : J'arrive, j'arrive Aventurier !")}}/>
        </section>
    );
}

function sorcierRepond(texte) {
    alert(texte);
}

function BoutonSonner({quandSorcierRepond}) {
    return <button onClick={quandSorcierRepond} className="btn btn-primary">🛎️ Appeler Archibald</button>;
}

