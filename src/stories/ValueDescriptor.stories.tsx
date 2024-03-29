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
        color: 'default',
        value: 560322.02
    },
};

export const DefaultCurrency: Story = {
    args: {
        isCurrency: true,
        color: 'default',
        description: 'ganhos no mês:',
        value: 560322.02
    },
};

export const Primary: Story = {
    args: {
        color: 'primary',
        description: 'ganhos no mês:',
        value: 560322.02
    },
};

export const PrimaryCurrency: Story = {
    args: {
        isCurrency: true,
        color: 'primary',
        description: 'ganhos no mês:',
        value: 560322.02
    },
};