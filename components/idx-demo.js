import { CodeBlock } from "./code-block";

const friends = `
const friends_of_friends =
  props.user == null
    ? props.user
    : props.user.friends == null
    ? props.user.friends
    : props.user.friends[0] == null
    ? props.user.friends[0]
    : props.user.friends[0].friends;
`;

export const IDX = () => {
  return (
    <CodeBlock style={{ fontSize: "1rem" }} language="js" code={friends} />
  );
};
