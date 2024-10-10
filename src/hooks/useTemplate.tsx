import { useContext } from 'react';
import { TemplateContext } from '../context/TemplateContext';

const useTemplate = () => useContext(TemplateContext);

export default useTemplate;
