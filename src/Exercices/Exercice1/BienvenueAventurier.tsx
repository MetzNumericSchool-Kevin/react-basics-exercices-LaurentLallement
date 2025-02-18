export default function BienvenueAventurier(props) {
    const { titre, texte } = props;

    return (
        <section id="exercice1">
            <h1>{titre} 🧙‍♂️</h1>
            <p>
                {texte}
            </p>
        </section>
    );
}