import {
  SimpleForm,
  Create,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  Edit,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challegeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Url" />
        <TextInput source="audioSrc" label="Audio Url" />
      </SimpleForm>
    </Edit>
  );
};
