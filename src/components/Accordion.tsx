"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  documentRef?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  title,
  documentRef,
  children,
  isOpen: controlledOpen,
  onToggle,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-colors duration-300">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-gold-400 text-green-950"
                : "bg-white/5 text-gold-400"
            }`}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            {documentRef && (
              <p className="text-white/40 text-sm mt-0.5">
                Document Ref: {documentRef}
              </p>
            )}
          </div>
        </div>
        <div
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isOpen ? "bg-gold-400 scale-150" : "bg-white/20"
          }`}
        />
      </button>
      <div
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{ maxHeight: isOpen ? "5000px" : "0" }}
      >
        <div className="px-6 pb-6 pt-2">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    documentRef?: string;
    content: React.ReactNode;
  }>;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  allowMultiple = true,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          documentRef={item.documentRef}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
