import type {Meta, StoryObj} from '@storybook/react';
import Paragraph from "../components/Typography/Paragraph/Paragraph";

const meta = {
    title: 'Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs']
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
    args: {
        size: 'default',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, ' +
            'lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, ' +
            'lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
    },
};