import type {Meta, StoryObj} from '@storybook/react';
import Table from "../components/Table/Table";

const meta = {
    title: 'Example/Table',
    component: Table,
    tags: ['autodocs']
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
    args: {},
};