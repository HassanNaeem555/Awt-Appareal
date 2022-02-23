import React, { useLayoutEffect, useState } from "react";
import { getApi } from "../../utils/apiFunctions";
import { privacyPolicy } from "../../utils/api";
import TextLoader from "../../components/textLoader";

const PrivacyPolicy = () => {
  const [policyContent, setPolicyContent] = useState("");
  const getPrivacyPolicyContent = async () => {
    const { policy } = await getApi(privacyPolicy);
    if (policy) {
      setPolicyContent(policy?.description);
    }
    console.log("privacyPolicy", policy);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    getPrivacyPolicyContent();
  });
  return (
    <div className="privacy-policy-wrap">
      <section className="index-sec1">
        <div className="privacy-banner">
          <p className="privacy-text">PRIVACY POLICY</p>
        </div>
      </section>
      <section className="privacy-policy-sec-1">
        <div className="container">
          <div className="privacy-content">
            {policyContent ? (
              <p
                className="paragraph mb-3"
                dangerouslySetInnerHTML={{ __html: policyContent }}
              />
            ) : (
              <>
                <TextLoader height={20} width={"100%"} />
                <TextLoader height={20} width={"60%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"60%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"60%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"100%"} />
                <TextLoader height={20} width={"60%"} />
                <TextLoader height={20} width={"90%"} />
                <TextLoader height={20} width={"90%"} />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
