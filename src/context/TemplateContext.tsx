import { ReactNode, createContext, useState } from 'react';
import { Template, templates } from '../constants/template';

type DefaultValue = {
  templateList: Template[];
  setTemplateList: React.Dispatch<React.SetStateAction<Template[]>>;
};

const defaultValue = {
  templateList: templates,
  setTemplateList: () => {},
};

export const TemplateContext = createContext<DefaultValue>(defaultValue);

const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [templateList, setTemplateList] = useState<Template[]>(defaultValue.templateList);

  return (
    <TemplateContext.Provider value={{ templateList, setTemplateList }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
