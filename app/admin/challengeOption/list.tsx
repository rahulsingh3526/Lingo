import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  required,
  SelectField,
  TextField,
} from "react-admin";

export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="text">
        <TextField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="imageSrc" />;
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
};
