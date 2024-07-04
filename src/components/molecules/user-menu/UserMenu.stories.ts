import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';
import { fn } from '@storybook/test';
import { USER_THANH_PHAM } from '../../../utilities/User.data';

const meta = {
    title: 'Components/Molecules/UserMenu',
    component: UserMenu,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const UserDropDown: Story = {
    args: { 
        onClickUserProfile: fn(),
        user: USER_THANH_PHAM
}};