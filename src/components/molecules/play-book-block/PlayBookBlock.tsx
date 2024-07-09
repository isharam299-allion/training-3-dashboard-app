import styled from "styled-components";
import { Book } from "../../../utilities/Book.data";
import React, { useEffect, useState } from "react";
import { tokens } from "../../tokens/DesignTokens";
import { ICON_TYPE, IMAGE_TYPE, ProgressCircle, StyledIconBackground, SvgIcon, Thumbnail, ThumbnailBorder, Typography } from "../../atoms";
import { Backgrounds, SvgIconAssests } from "../../../assests";

interface PlayBooksProps {
    readingBooks : Book[];
}


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 313px;
    height: 331px;
    border-radius: 16px;
    background-color : ${tokens.colors.bgColorWhite};
    margin-bottom: 32px;
`;

const PlayBooksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 20px 20px 19px ;
    background-image: url(${Backgrounds.BACKGROUNDS.PlayBookPetalbBg});
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center;
`;

const PlayBookTitlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    background-image: url(${Backgrounds.BACKGROUNDS.PlayBookSounWaveBg});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
    margin: 0px 26px 0px 26px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 16px 62px 0px 62px;
`;

const PlayBooksBlock : React.FC<PlayBooksProps> = ({ readingBooks}) => {
    const bookCount = readingBooks.length;
    let [playBookIndex, setPlayBookIndex] = useState<number>(0) ;

    useEffect(() => {
        if (bookCount >= 3) {
          setPlayBookIndex(1);
        }
      }, [bookCount]);

      const getPreviousBookIndex = () => {
        return (playBookIndex - 1 + bookCount) % bookCount;
      };

      const getNextBookIndex = () => {
        return (playBookIndex + 1) % bookCount;
      }

      const nextBookOnClick = () => {
        setPlayBookIndex((playBookIndex + 1) % bookCount);
      };

      const previousBookOnClick = () => {
        setPlayBookIndex((playBookIndex - 1) % bookCount);
      };

return(
    <StyledDiv>
        <PlayBooksWrapper>
            <Thumbnail altText={readingBooks[getPreviousBookIndex()].altText} 
                type={IMAGE_TYPE.PLAY_NEXT_BOOK} 
                desktopImgSrc={readingBooks[getPreviousBookIndex()].desktopImg} 
                mobileImgSrc={readingBooks[getPreviousBookIndex()].mobileImg}/>
            
            <ThumbnailBorder $imageType={IMAGE_TYPE.PLAY_BOOK}>
                <Thumbnail altText={readingBooks[playBookIndex].altText} 
                type={IMAGE_TYPE.PLAY_BOOK} 
                desktopImgSrc={readingBooks[playBookIndex].desktopImg} 
                mobileImgSrc={readingBooks[playBookIndex].mobileImg}/>
            </ThumbnailBorder>
            <Thumbnail altText={readingBooks[getNextBookIndex()].altText} 
                type={IMAGE_TYPE.PLAY_NEXT_BOOK} 
                desktopImgSrc={readingBooks[getNextBookIndex()].desktopImg} 
                mobileImgSrc={readingBooks[getNextBookIndex()].mobileImg}/>
        
        </PlayBooksWrapper>
        <PlayBookTitlesWrapper>
            <Typography.PlayBookTitle>{readingBooks[playBookIndex].title}</Typography.PlayBookTitle>
            <Typography.PlayBookAuthor>{readingBooks[playBookIndex].author.name}</Typography.PlayBookAuthor>
        </PlayBookTitlesWrapper>
       

        <ButtonWrapper>
            <StyledIconBackground $iconType={ICON_TYPE.NEXT_BACK_ICON} onClick={previousBookOnClick}>
                <SvgIcon  SvgComponent={SvgIconAssests.SVG_COMPONENTS.BACK_SVG} type={ICON_TYPE.NEXT_BACK_ICON} />
            </StyledIconBackground>
            <ProgressCircle $progressFactor={.62} size={46} $strokeSize={4}>
                <SvgIcon  SvgComponent={SvgIconAssests.SVG_COMPONENTS.PAUSE_ICON_SVG} type={ICON_TYPE.PLAY_PAUSE_ICON} />
            </ProgressCircle>
           
            <StyledIconBackground $iconType={ICON_TYPE.NEXT_BACK_ICON} onClick={nextBookOnClick}>
                <SvgIcon  SvgComponent={SvgIconAssests.SVG_COMPONENTS.NEXT_ICON_SVG} type={ICON_TYPE.NEXT_BACK_ICON} />
            </StyledIconBackground>
        </ButtonWrapper>
       
    </StyledDiv>
);
    
};

export {
    PlayBooksBlock
}