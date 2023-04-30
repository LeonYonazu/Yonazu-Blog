import PostCard from "./PostCard";

import type { StoryObj, Meta } from "@storybook/react";

export default {
  component: PostCard,
} as Meta<typeof PostCard>;

export const Default: StoryObj<typeof PostCard> = {
  args: {
    onClick: () => console.log("clicked"),
    title: "title",
    date: "2021-01-01",
    id: "id",
    category: "tech",
    tags: ["Swift", "JavaScript"],
  },
};
