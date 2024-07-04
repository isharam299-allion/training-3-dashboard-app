import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileImg } from './UserProfileImg';
import { USER_THANH_PHAM } from '../../../utilities/User.data';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/Atoms/UserProfileImg',
    component: UserProfileImg,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserProfileImg>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const UserImage: Story = {
    args: { 
        imgUrl : USER_THANH_PHAM.profileImg,
        onClickUserProfile : fn(),
}};