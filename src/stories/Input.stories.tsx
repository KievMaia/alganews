import type {Meta, StoryObj} from '@storybook/react';
import Input from "../components/Input/Input";

const meta = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs']
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;
export default meta;
export const WithPlaceholder: Story = {
    args: {
        placeholder: 'e.g: Jon Doe'
    },
};

export const WithLabelAndPlaceholder: Story = {
    args: {
        label: 'Name',
        placeholder: 'e.g: Jon Doe'
    },
};

export const WithLabelAndContent: Story = {
    args: {
        label: 'Name',
        placeholder: 'e.g: Jon Doe',
        value: 'Jon Doe'
    },
};

export const WithContent: Story = {
    args: {
        value: 'Jon Doe'
    },
};