import { ChangeEventHandler, useState } from 'react';

const WhyThisNewsletter = () => {
  const [isShortVersion, toggleVersion] = useState<boolean>(true);

  const handleToggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    toggleVersion(!e.target.checked);
  };

  const renderCalendarPart = () => {
    return (
      <div>
        <h3>📅 Calendrier et programme TV.</h3>
        <p>
          Dans chaque édition de la newsletter, vous trouverez les horaires des matches, ainsi que
          les chaînes qui les diffusent en France. Encore mieux, vous pourrez sélectionner les
          matches que vous voulez voir et les ajouter à votre calendrier en un clic.
        </p>
        {!isShortVersion && (
          <>
            <p>
              Les calendriers des compétitions sont de plus en plus durs à lire. Rien que pour la
              Ligue 1, un week-end standard propose 7 créneaux différents, s’étalant du vendredi au
              dimanche avec seulement 4 matches lors du créneau Multiplex. Si on y ajoute la
              complexité des autres championnats européens, de la Ligue des Champions, de la Coupe
              du Monde 2022 qui aura lieu en novembre, etc., il y a de quoi se perdre. Pas avec le
              calendrier foot Statium.
            </p>
            <p>
              Cf.{' '}
              <a href="https://fr.wikipedia.org/wiki/Football_à_la_télévision_en_France#Ligue_1">
                Wikipedia
              </a>
            </p>
          </>
        )}
      </div>
    );
  };

  const renderHighlightsPart = () => {
    return (
      <div>
        <h3>📺 Résumés et feuilles de match.</h3>
        <p>
          Chaque newsletter commence par un récapitulatif des matches qui viennent d’avoir lieu :
          résumé et feuilles de match.
        </p>
        {!isShortVersion && (
          <p>
            La plupart des chaînes propose des résumés des matches dont elles ont les droits. Mais
            pour les trouver, il faut se lever de bonne heure. Le calendrier foot Statium vous livre
            ça dans votre boîte mail à chaque édition. Pour chaque match, un lien vers la feuille de
            match pour tout savoir sur les compositions d’équipe, les changements, les buteurs et le
            cartons, ainsi qu’un lien vers le résumé vidéo.
          </p>
        )}
      </div>
    );
  };

  const renderCompetitionsParts = () => {
    return (
      <div>
        <h3>🌍 Les compétitions.</h3>
        <p>
          La newsletter propose de suivre la Ligue 1, la Premier League, la Liga, la Serie A, la
          Bundesliga, la Ligue des Champions, la Ligue Europa, la Ligue Europa Conférence, la Ligue
          des Nations, l’Euro, la Coupe du Monde, etc.
        </p>
        {!isShortVersion && (
          <p>
            Tous les matches des équipes de L1 sont inclus. Que vous soyez supporter de Brest ou de
            Strasbourg, vous pourrez suivre l’équipe de votre choix via la newsletter. Pour les
            championnats du Big 4, la newsletter vous propose la plus grosse affiche de chaque
            journée. Pour la Ligue des Champions, la newsletter propose l’intégralité des matches
            des équipes françaises et les meilleures affiches de chaque journée. Vous saisissez
            l’idée c’est l’idée de <em>suivre le foot depuis la France</em> : on supporte en général
            un club et on veut voir les affiches. C’est exactement ce que la newsletter propose.
          </p>
        )}
      </div>
    );
  };

  const renderAboutMe = () => {
    return (
      <div>
        <h3>👋 Qui je suis et ma philosophie.</h3>
        <p>
          Je m’appelle Mick, je suis développeur, et je fais cette newsletter dans mon temps libre.
          Je suis passionné de foot et j’ai fait un travail d’agrégation de plusieurs sources de
          données sur le foot pour moi d’abord — avec l’objectif avoué d’éviter les acteurs
          incontournables du web qui proposent une expérience utilisateur déplorable — et je me suis
          dit que les autres fans de foot de France pourraient être intéressés également.
        </p>
        {!isShortVersion && (
          <>
            <p>
              Pour faire tourner la newsletter, j’essaie au maximum d’utiliser des outils
              open-source, d’éditeurs indépendants ou issus du monde de la tech, et de pointer vers
              les sites les plus orientés data possibles. Quelques exemples :
            </p>
            <ul>
              <li>
                La newsletter est envoyée via Buttondown — ce qui explique quelques formulations en
                anglais, <em>sorry about that</em> ;
              </li>
              <li>Ce site web tourne sur Next.js et est hébergé par Netlify et Vercel ;</li>
              <li>Les fichiers de calendrier sont hébergés par Linode (plutôt que AWS) ;</li>
              <li>Les liens des feuilles de match pointent vers fbref (plutôt que l’Équipe) ;</li>
              <li>etc.</li>
            </ul>
          </>
        )}
      </div>
    );
  };

  const renderImpact = () => {
    return (
      <div>
        <h3>🌳 Impact environnemental.</h3>
        <p>
          C’est sans doute anecdotique, mais ça me tient à cœur : cette newsletter a pour objectif
          d’avoir l’empreinte numérique la plus petite possible. Ainsi, à titre d’exemple, chaque
          édition de la newsletter <em>pèse</em> environ 50 kilo-octets, tandis qu’accéder à la page
          “Directs” de <a href="https://lequipe.fr">lequipe.fr</a> pèse plusieurs dizaines de
          méga-octets (et si vous laissez la page ouverte, ça ne s’arrêtera jamais car les
          publicités seront chargées en continu).
        </p>
        {!isShortVersion && (
          <>
            <p>
              Bien sûr, les liens vers les résumé de la newsletter propose aussi des liens vers des
              liens YouTube, qui vont consommer de la bande passante, mais le rapport “je vois du
              vrai foot” / “octets dépensés” me semble bien meilleur avec la newsletter.
            </p>
            <p>
              C’est aussi pour ça que je redirige vers les feuilles de match de FBREF. Lors de mon
              dernier test, le poids de la feuille de match de Manchester United - Wolverhampton
              pesait 4.13 MO sur FBREF contre environ 10 MO sur{' '}
              <a href="https://lequipe.fr">lequipe.fr</a> (et encore une fois, tant que vous restez
              sur la page, ça monte, ça monte jusqu’à n’en plus finir).
            </p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <h2>Pourquoi s’inscrire ?</h2>
      <form>
        <label>
          <input type="checkbox" checked={!isShortVersion} onChange={handleToggle} /> Version
          longue ?
        </label>
      </form>
      {renderCalendarPart()}
      {renderHighlightsPart()}
      {renderCompetitionsParts()}
      {renderAboutMe()}
      {renderImpact()}
    </>
  );
};

export default WhyThisNewsletter;
