import type {Meta, StoryObj} from '@storybook/react';
import Button from "../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs']
    // // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     backgroundColor: {control: 'color'},
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'resetar senha',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        label: 'resetar senha',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        label: 'resetar senha',
    },
};

export const Disable: Story = {
    args: {
        variant: 'primary',
        disable: true,
        label: 'resetar senha',
    },
};