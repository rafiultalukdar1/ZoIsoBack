import { useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';

/**
 * Single-open accordion. `items` are { title, entries: [{ question, answer: string[] }] }.
 * Pass `defaultOpen` (index) to start with one panel expanded.
 */
export default function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="flex w-full flex-col gap-5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="flex flex-col items-start">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full max-w-[550px] cursor-pointer items-center justify-between rounded-full bg-[#DADAD8] px-5 py-2.5 text-left"
            >
              <span className="flex-1 text-lg font-bold md:text-xl lg:text-2xl">{item.title}</span>
              <GoTriangleUp className={`rotate-[59deg] ${isOpen ? 'text-primary' : ''}`} />
            </button>

            <div
              className={`grid w-full transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-[25px] py-[30px] text-lg md:text-xl lg:text-2xl">
                  {item.entries.map((entry) => (
                    <div key={entry.question}>
                      <p className="text-primary">
                        <strong>{entry.question}</strong>
                      </p>
                      {entry.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
