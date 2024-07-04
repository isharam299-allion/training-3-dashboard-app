import type { Meta, StoryObj } from '@storybook/react';
import { UserBooksSection } from './UserBookSection';

const meta = {
    title: 'Components/Organisms/UserBooksSection',
    component: UserBooksSection,
    parameters: {
      layout: 'centered',  
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserBooksSection>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const UserBookSection: Story = {
    args: { 
       isUserSectionOpen: true
}};