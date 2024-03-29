import type {Meta, StoryObj} from '@storybook/react';
import Info from "../components/Info/Info";

const meta = {
    title: 'Example/Info',
    component: Info,
    tags: ['autodocs']
} satisfies Meta<typeof Info>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Information: Story = {
    args: {
        title: 'Post não encontrado',
        description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
    },
};