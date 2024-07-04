import type { Meta, StoryObj } from '@storybook/react';
import { IMAGE_TYPE, Thumbnail } from './Thumbnail';
import { NEVER_EAT_ALONE } from '../../../utilities/Book.data';
import { R_J_PALACIO } from '../../../utilities/Author.data';

const meta = {
    title: 'Components/Atoms/Thumbnail',
    component: Thumbnail,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;
  
  
export const PopularBookThumbnail: Story = {
    args: { 
        type : IMAGE_TYPE.POPULAR_BOOK,
        desktopImgSrc : NEVER_EAT_ALONE.desktopImg,
        mobileImgSrc : NEVER_EAT_ALONE.mobileImg,
        altText : NEVER_EAT_ALONE.altText,
}};

export const PlayBookThumbnail: Story = {
    args: { 
        type : IMAGE_TYPE.PLAY_BOOK,
        desktopImgSrc : NEVER_EAT_ALONE.desktopImg,
        mobileImgSrc : NEVER_EAT_ALONE.mobileImg,
        altText : NEVER_EAT_ALONE.altText,
}};

export const PlayNextBookThumbnail: Story = {
    args: { 
        type : IMAGE_TYPE.PLAY_NEXT_BOOK,
        desktopImgSrc : NEVER_EAT_ALONE.desktopImg,
        mobileImgSrc : NEVER_EAT_ALONE.mobileImg,
        altText : NEVER_EAT_ALONE.altText,
}};

export const ReadNextBookThumbnail: Story = {
    args: { 
        type : IMAGE_TYPE.READ_NEXT_BOOK,
        desktopImgSrc : NEVER_EAT_ALONE.desktopImg,
        mobileImgSrc : NEVER_EAT_ALONE.mobileImg,
        altText : NEVER_EAT_ALONE.altText,
}};

export const TopAuthorThumbnail: Story = {
    args: { 
        type : IMAGE_TYPE.TOP_AUTHOR,
        desktopImgSrc : R_J_PALACIO.desktopImg,
        mobileImgSrc : R_J_PALACIO.mobileImg,
        altText : R_J_PALACIO.altText,
}};

