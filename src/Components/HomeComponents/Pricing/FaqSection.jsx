import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqData = [
  {
    question: "Do I need to enter CC details for FREE Trial?",
    answer:
      "No, you don’t need to enter credit card details for 7-day FREE Trial period.",
  },
  {
    question: "Can I change my plan in the middle?",
    answer: "Yes, you can change your plan at any time.",
  },
  {
    question: "What are AI credits?",
    answer: "AI credits are used for accessing AI-powered features.",
  },
  {
    question: "What is workspace?",
    answer:
      "Workspace are separate environment for you and your clients. For example, 10 workspaces mean you can have 10 separate work environment where you can invite your client or team mates to manage your content.",
  },
  {
    question: "Can I schedule content for my Linkedin company page?",
    answer: "Yes, you can schedule content for your Linkedin company page.",
  },
  {
    question: "What is a user in pricing plan?",
    answer:
      "A user is anyone who is using the app. For example, Pro plan has 2 users which means you can invite an additional member to your workspace to manage your content.",
  },
  {
    question: "Do you provide LIVE demo?",
    answer: "Yes, we provide LIVE demo sessions.",
  },
  {
    question: "How to connect with support team?",
    answer:
      "You can connect with our support team via the contact form on our website.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState([]);

  const toggleFaq = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <div className="max-w-5xl px-2 mx-auto py-10">
      <h2 className="text-4xl text-center font-bold mb-8">FAQs</h2>
      <div className="w-full rounded-lg bg-gray-100">
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <FaPlus
                className={`transform text-white bg-black text-2xl rounded-full p-1 transition-transform duration-300 ${
                  openIndex.includes(index) ? "rotate-45 bg-blue-500" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex.includes(index) ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 border-b">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
