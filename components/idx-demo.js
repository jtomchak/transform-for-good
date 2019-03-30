import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";

const friends = `
import idx from "idx.macro";

const friends_of_friends = idx(props, _ => _.user.friends[0].friends);
`;

export default () => {
  return (
    <CodeSurfer
      title="idx"
      code={friends}
      lang="javascript"
      showNumbers={false}
      dark={false}
    />
  );
};
