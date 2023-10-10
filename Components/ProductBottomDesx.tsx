import React from "react";

const ProductBottomDesx = () => {
  const data = [
    { key: "Couleur :", value: "Blanc Gris & Noir" },
    { key: "Fonctions Décongélation-réchauffage- Annulation :", value: "Oui" },
    { key: "Régulateur de cuisson :", value: "Oui" },
    { key: "Nombre de niveaux de brunissage :", value: "7" },
    { key: "Centrage automatique :", value: "Oui" },
    { key: "Ouverture automatique du couvercle :", value: "Oui" },
    {
      key: "Plateau ramasse-miettes amovible pour faciliter le nettoyage :",
      value: "Oui",
    },
    { key: "Puissance :", value: "750 Watt" },
  ];
  return (
    <div>
      {data.map((item) => (
        <div className="flex items-center justify-start gap-1">
          <p className="text-[#797979] text-xs lg:text-xl font-normal">
            - {item.key}
          </p>{" "}
          <p className="text-[#797979] text-sm lg:text-xl font-normal">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductBottomDesx;
