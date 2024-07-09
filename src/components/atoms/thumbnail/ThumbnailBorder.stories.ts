import type { Meta, StoryObj } from '@storybook/react';
import { IMAGE_TYPE } from './Thumbnail';
import { ThumbnailBorder } from './ThumbnailBorder';

const meta = {
    title: 'Components/Atoms/ThumbnailBorder',
    component: ThumbnailBorder,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ThumbnailBorder>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const PlayBookThumbnailBorder: Story = {
    args: { 
        $imageType : IMAGE_TYPE.PLAY_BOOK,
       
}};

export const TopAuthorThumbnailBorder: Story = {
    args: { 
        $imageType : IMAGE_TYPE.TOP_AUTHOR,
       
}};


