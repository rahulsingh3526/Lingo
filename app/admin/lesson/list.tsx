import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="imageSrc" />;
        <ReferenceField source="UnitId" reference="units" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
