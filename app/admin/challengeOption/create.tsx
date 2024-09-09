import {
  SimpleForm,
  Create,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challegeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Url" />
        <TextInput source="audioSrc" label="Audio Url" />
      </SimpleForm>
    </Create>
  );
};
