import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const UnitList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="imageSrc" />;
        <ReferenceField source="courseId" reference="courses" />
        <TextField source="order" />
      </Datagrid>
    </List>
  );
};
