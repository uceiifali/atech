import React from "react";

const Productinformation = () => {
  const data = [
    { key: "SKU :", value: "CO232EL05IAFCNAFAMZ" },
    { key: "Poids (kg) :", value: "1kg" },
    { key: "Type de boutique :", value: "condor" },
  ];
  return (
    <div>
      {data.map((item) => (
        <div className="flex items-center gap-1">
          <p className="text-[#797979] text-xs lg:text-xl font-normal">
            - {item.key}
          </p>{" "}
          <p className="text-[#797979] text-xs lg:text-xl font-normal">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Productinformation;
