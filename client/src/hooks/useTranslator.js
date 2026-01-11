"use client";
import { useState, useCallback, useEffect } from "react";
import english from "../localization/english.json";
import hindi from "../localization/hindi.json";

export const LANGUAGE_LIST = [
  { code: "english", name: "English" },
  { code: "hindi", name: "Hindi" },
];

const LANGUAGES = {
  english,
  hindi,
};

const useTranslator = () => {
  const [language, setLanguage] = useState("english");

  // Load saved language on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang");
      if (savedLang) setLanguage(savedLang);
    }
  }, []);

  const translate = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = LANGUAGES[language];

      for (let k of keys) {
        value = value?.[k];
        if (!value) return key;
      }
      return value;
    },
    [language]
  );

  return { translate, language, setLanguage };
};

export default useTranslator;