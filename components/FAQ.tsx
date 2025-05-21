"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, manufacturing, and retail. Our AI solutions are customizable to meet specific industry needs."
  },
  {
    question: "How secure is your AI platform?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, regular security audits, and comply with industry standards to protect your data."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, comprehensive documentation, and dedicated account managers for enterprise clients."
  },
  {
    question: "How does your pricing work?",
    answer: "We offer flexible pricing models including subscription-based and pay-as-you-go options. Enterprise plans include custom pricing based on your specific requirements."
  },
  {
    question: "Can I integrate your AI with my existing systems?",
    answer: "Absolutely. Our solutions are designed with robust APIs and integration capabilities to work seamlessly with your current tech stack."
  },
  {
    question: "What makes your AI different from competitors?",
    answer: "Our AI combines cutting-edge algorithms with industry-specific tuning, real-time learning capabilities, and unparalleled accuracy to deliver superior results."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function FAQ() {
  return (
    <section
      id="faq"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
            Frequently Asked <span className="text-gray-800 font-bold">Questions</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Everything you need to know about our advanced AI solutions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
        >
          <Accordion type="single" collapsible className="divide-y divide-gray-200/50">
            {faqs.map((faq, index) => (
              <motion.div variants={itemVariants} key={index}>
                <AccordionItem value={`item-${index}`} className="px-8 py-6 hover:bg-gray-100/50 transition-colors duration-200">
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center space-x-4 w-full">
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors sm:text-xl">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="prose prose-neutral max-w-none">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg font-medium">
            Still have questions?{" "}
            <a href="#contact" className="text-gray-800 font-semibold hover:underline hover:text-gray-900 transition-colors duration-200">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}