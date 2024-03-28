import type {Meta, StoryObj} from '@storybook/react';
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

const meta = {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    tags: ['autodocs']
} satisfies Meta<typeof ValueDescriptor>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
    args: {
        description: 'ganhos no mês:',
        value: 560322.00
    },
};