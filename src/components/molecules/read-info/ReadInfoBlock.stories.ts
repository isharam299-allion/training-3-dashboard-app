import type { Meta, StoryObj } from '@storybook/react';
import { ReadInfoBlock } from './ReadInfoBlock';
import { SvgIconAssests } from '../../../assests';

const meta = {
    title: 'Components/Molecules/ReadInfoBlock',
    component: ReadInfoBlock,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ReadInfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const ReadBooksInfoBlock: Story = {
    args: { 
        count: '20',
        icon: SvgIconAssests.SVG_COMPONENTS.READ_BOOKS_ICON_SVG,
        title: "Read Books"
}};

export const ReadingBooksInfoBlock: Story = {
    args: { 
        count: '3',
        icon: SvgIconAssests.SVG_COMPONENTS.READING_BOOKS_ICON_SVG,
        title: "Reading Books"
}};

export const AuthorsInfoBlock: Story = {
    args: { 
        count: '20',
        icon: SvgIconAssests.SVG_COMPONENTS.AUTHORS_SVG,
        title: "Authors"
}};

