import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid2 from '@mui/material/Grid2';
import PageHeader from '../../components/PageHeader';
import Footer from './Footer';
import { Mode } from '../../enums/mode';
import TemplateForm from './template-form';
import { Template } from '../../constants/template';
import useTemplate from '../../hooks/useTemplate';

const TemplateUpdate = () => {
  const navigate = useNavigate();
  const { setTemplateList } = useTemplate();

  const [mode, setMode] = useState<Mode>(Mode.SETUP);

  const [templateData, setTemplateData] = useState<Template>({
    id: 200,
    category: 'Custom',
    name: '',
    language: 'English',
    headerType: '',
    header: null,
    body: 'Hello',
    lastEdited: new Date()?.toISOString(),
  });

  const handleChange = (name: keyof Template, value: any) => {
    const updatedData: any = { ...templateData };
    updatedData[name] = value;

    setTemplateData(updatedData);
  };

  const handleModeChange = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setMode(value as Mode);
  };

  const handleNext = () => {
    if (mode === Mode.SETUP) {
      return setMode(Mode.EDIT);
    }

    if (mode === Mode.EDIT) {
      setTemplateList((values) => [templateData, ...values]);
      navigate('/message-template');
    }
  };

  return (
    <Grid2 container justifyContent='center'>
      <Grid2 size={{ md: 10, xs: 12 }} mt={2}>
        <PageHeader header='Create template' />
        <TemplateForm
          mode={mode}
          templateData={templateData}
          onModeChange={handleModeChange}
          onChange={handleChange}
        />
        <Footer onNext={handleNext} />
      </Grid2>
    </Grid2>
  );
};

export default TemplateUpdate;
