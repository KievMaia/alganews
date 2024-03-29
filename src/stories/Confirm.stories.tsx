import type {Meta, StoryObj} from '@storybook/react';
import Confirm from "../components/Confirm/Confirm";

const meta = {
    title: 'Example/Confirm',
    component: Confirm,
    tags: ['autodocs']
} satisfies Meta<typeof Confirm>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
    args: {
        title: 'Deseja realmente sair?'
    },
};