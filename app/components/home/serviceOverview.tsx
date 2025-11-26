import ButtonCTA from "../buttons/buttonCTA";

// Composant pour une carte individuelle
interface StepCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta?: React.ReactNode;
}

function StepCard({ title, description, icon, cta }: StepCardProps) {
  return (
    <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8">
        {icon}
        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
            {title}
          </h5>
          <p className="text-gray-300">{description}</p>

          {/* CTA si présent */}
          {cta && <div className="pt-4">{cta}</div>}
        </div>
      </div>
    </div>
  );
}

// Tableau de données pour chaque étape
const steps = [
  {
    title: "Déposez votre demande d’orchestration",
    description:
      "Indiquez votre ensemble vocal ou instrumental (types de voix, instruments, effectifs...) ainsi que le chant nordique que vous souhaitez faire orchestrer. Je reviens vers vous rapidement avec une proposition adaptée.",
    icon: (
      <svg
        className="w-12 h-12 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M10 10l2-2v8" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    ),
    cta: <ButtonCTA label="Obtenir un devis gratuit" href="/service"/>,
  },
  {
    title: "Réception du devis personnalisé",
    description: "Je vous envoie un devis détaillé selon la complexité de votre projet. Le devis est gratuit et sans engagement.",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    ),
  },
  {
    title: "Validation de votre commande",
    description:
      "Vous confirmez la commande. Si nécessaire, nous ajustons ensemble le devis ou les spécifications artistiques avant le lancement du travail.",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    ),
  },
  {
    title: "Création et envoi de votre partition",
    description: "Je réalise l’orchestration/instrumentation et vous livre une partition claire, prête à être jouée ou répétée. Formats disponibles : PDF, MIDI, audio mockup optionnel…",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 8v3a1 1 0 0 0 1 1h3" />
        <path d="M14 8v8" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27a2.225 2.225 0 0 1-1.158-1.948v-7.285c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    ),
  },
];

// Composant principal
export default function ServiceOverview() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_40%_50%,rgba(100,124,140,0.8)_0%,transparent_50%)] p-4">
      {/* <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6"> */}
      <div className="container mx-auto h-max px-6"> {/*remplace celle du haut */}
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Comment ça marche ?</h2>
          {/* <p className="text-gray-300">We follow our process to get you started as quickly as possible</p> */}
        </div>
        <div className="mt-16 mb-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              cta={step.cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}