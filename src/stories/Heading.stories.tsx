import type {Meta, StoryObj} from '@storybook/react';
import Heading from "../components/Typography/Heading/Heading";

const meta = {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs']
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Heading1: Story = {
    args: {
        level: 1,
        children: 'Heading 1'
    },
};

export const Heading2: Story = {
    args: {
        level: 2,
        children: 'Heading 2'
    },
};

export const Heading3: Story = {
    args: {
        level: 3,
        children: 'Heading 3'
    },
};