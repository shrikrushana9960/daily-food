import React from "react";

const PrivacyPolicy = () => {
  const policy = [
    {
      title: "The information we collect and how we use it",
      list: [
        {
          title: `BusyChef ("the App," "we," "us," and "our") collects various types of information from users of our Services, including:`,
          list: [
            `Personal Information (PI): Personal Information refers to information that can be associated with a specific person and can be used to identify that individual. We do not consider personal information to include data that has been anonymized or aggregated to the extent that it can no longer identify a specific person, either in combination with other information or independently`,
            `Information about your internet connection and device: We may collect information about your internet connection, the device you use to access our Services, and details regarding your usage of the App.`,
          ],
        },
        {
          title: "We collect this information through the following means:",
          list: [
            `Directly from you when you provide it to us.`,
            `Automatically as you navigate and interact with our Services. This includes information collected through cookies, web beacons, and other tracking technologies. The automatically collected information may include usage details, IP addresses, and other relevant data.`,
          ],
        },
        {
          title: `It's important to note that BusyChef respects your privacy and handles your information in accordance with applicable data protection laws and regulations. We take appropriate measures to protect your personal information and ensure its confidentiality.`,
        },
        {
          title:
            "If you have any questions or concerns about the information we collect or how we use it, please feel free to contact us.",
        },
      ],
    },
    {
      title: `
        BusyChef collects various types of information on or through its Services, including:
        `,
      list: [
        {
          list: [
            `Account Information: This includes your full name, email address, postal code, password, and other information provided during account creation. Optional information, such as gender, mobile phone number, and website, may also be collected if provided through third-party sign-in services.`,
            `Preferences: Your preferences and settings, such as time zone and language, may be collected.`,
            `Content: Information you provide through the Services, including reviews, photographs, comments, lists, followers, current and prior restaurant reservation details, food ordering history, favorite restaurants, special requests, and contact information shared in relation to restaurant reservations.`,
            `Searches and Activities: Information about the search terms you've used, results selected, and browsing activities on the Services.`,
            `Browsing Information: Duration of usage, features utilized, and ads clicked on within the Services.`,
            `Communications: Messages exchanged with other users or merchants through the Services, participation in surveys, polls, contests, or promotions, and communication regarding employment opportunities.`,
            `Transactional Information: If you make reservations or purchases through the Services, information such as phone number, address, email, billing details, and payment card information may be collected and stored to process your requests. This information may be shared with third-party processors for payment processing.`,
            `Public Posts: User Contributions, including ratings, reviews, tips, photos, comments, likes, bookmarks, friends, and lists, that are publicly posted or transmitted through the Services. Please note that posting such information carries inherent risks, and BusyChef cannot guarantee unauthorized access or actions by other users.`,
          ],
        },
        {
          title:
            "BusyChef utilizes the collected information to enhance functionality, improve service quality, personalize user experiences, display relevant advertising, provide support, communicate with users, and fulfill legal obligations.",
        },
        {
          title: `If you have any concerns or questions about the information collected or its use, please don't hesitate to contact us.`,
        },
      ],
    },
    {
      title: "How we use the information we collect",
      list: [
        {
          list: [
            `We use the information we collect from and about you for a variety of purposes, including to:`,
            `Process and respond to your queries`,
            `Understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, and make special offers.`,
            `Administer our Services and diagnose technical problems.`,
            `Send you communications that you have requested or that may be of interest to you by way of emails, or courier, or registered post, or telephone calls, or any other mode of communication. We may also share your preferences or the Services availed by you with your network followers on Zomato for marketing and other promotional activities of our Services.`,
            `Send you questions from other users that you may be able to answer if you have registered with BusyChef.`,
            `Enable us to show you ads that are relevant to you.
                `,
            `Generate and review reports and data about, and to conduct research on, our user base and Service usage patterns.`,
            `Administer contests and sweepstakes.`,
            `Provide you with customer support.
                `,
            `Provide you with policies about your account.`,
            `Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.`,
            `Notify you about changes to our Services.`,
            `Allow you to participate in interactive features offered through our Services.`,
            `In any other way we may describe when you provide the information.`,
            `For any other purpose with your consent.`,
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      list: [
        {
          title:
            "If you have any queries relating to the processing/ usage of information provided by you or BusyChef's Privacy Policy, you may email the Data Protection Officer (DPO) at privacy@BusyChef.com ",
        },
      ],
    },
  ];
  return (
    <div style={{ fontFamily: "Urbanist", padding: 30 }}>
      <h1>Privacy Policy</h1>
      <h4>Last updated on April 22, 2023.</h4>

      {policy.map((item, index) => (
        <div>
          <p
            style={{ fontSize: 18, fontFamily: "Urbanist", fontWeight: "bold" }}
          >
            {item?.title}
          </p>
          {item.list.map((data, dataindex) => (
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 16, fontFamily: "Urbanist" }}>
                {data?.title}
              </p>

              {data?.list?.map((info, infoIndex) => (
                <ol>
                  {infoIndex + 1 + ".  "}
                  {info}
                </ol>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
