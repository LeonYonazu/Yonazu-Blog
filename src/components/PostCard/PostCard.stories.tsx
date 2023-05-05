import PostCard from "./PostCard";

import type { StoryObj, Meta } from "@storybook/react";

export default {
  component: PostCard,
} as Meta<typeof PostCard>;

export const Default: StoryObj<typeof PostCard> = {
  args: {
    title: "title",
    date: "2021-01-01",
    id: "id",
    tags: ["Swift", "JavaScript"],
  },
};
