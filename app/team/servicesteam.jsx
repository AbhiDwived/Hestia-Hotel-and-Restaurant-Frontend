"use client";

import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";

const Servicesteam = () => {
  return (
    <>
      <div className="services__team section-padding">
        <div className="container">
          <div className="row">
            {teams.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services__team-item">
                  <div className="services__team-item-image">
                    <Image
                      alt={`${item.name} portrait`}
                      src={item.img}
                      width={400}
                      height={480}
                      className="w-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="services__team-item-image-content">
                      <h5>{item.name}</h5>
                      <span>{item.status}</span>
                      <div className="services__team-item-image-content-social">
                        <Social />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Servicesteam;
