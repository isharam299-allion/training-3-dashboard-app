import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { MenuItem } from "../../molecules";
import { Images, SvgIconAssests } from "../../../assests";
import { useState } from "react";

    interface MenuBarProps {
        isMenuOpen : boolean;
    }

    const StyledDiv = styled.div<Pick<MenuBarProps,'isMenuOpen'>>`
        display: ${props => props.isMenuOpen ? 'flex' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        flex-direction: column;
        width: 212px;
        max-height: 1024px;
        border-radius: 40px 0px 0px 40px;
        background-color: ${tokens.colors.bgColorWhite};
        transform: ${ props => (props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
        transition: transform 0.3s ease;

        @media (min-width: 391px) {  
            display: flex;
            max-height: 1024px;
            transform: ${ props => (props.isMenuOpen ? 'translateY(0)' : 'translateY(-100%)')};
            transition: transform 0.3s ease;
        }

    `;

    const StyledNav = styled.nav`
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 115px;
        margin-left: 20px;
        margin-right: 20px;

        @media (min-width: 391px) {
            margin-top: 190px;
            gap: 14px;
        }
    `;

    const StyledSvgImgWrapper = styled.div`
        display: flex;
        width: 114px;
        height 184px;
        align-items: center;
        justify-content: center;
        bottom: 0px;
        margin-left: 46px;
        margin-right: 26px;
        margin-bottom: 10px;
        margin-top: 50px;

        @media (min-width: 391px) {
            width: 154px;
            height 224px;
            margin-bottom: 35px;
            margin-left: 35px;
            margin-right: 26px;
            margin-top: 206px;
        }
    `; 

    const MenuBar : React.FC<MenuBarProps> = ({isMenuOpen}) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(0);
        interface NavItem{
            content: string;
            SvgIcon: React.FC;
            SvgActiveIcon : React.FC;
            isActive : boolean;
        }

        const navLinks : NavItem[] = [
            {
                isActive: activeIndex === 0, content: "Home", SvgIcon: SvgIconAssests.SVG_COMPONENTS.HOME_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.HOME_ACTIVE_SVG
            },
            {
                isActive: activeIndex === 1, content: "Categories", SvgIcon: SvgIconAssests.SVG_COMPONENTS.CATEGORY_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.CATEGORY_ACTIVE_SVG
            },
            {
                isActive: activeIndex === 2, content: "Favorite", SvgIcon: SvgIconAssests.SVG_COMPONENTS.HEART_ICON_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.HEART_ACTIVE_ICON_SVG
            },
            {
                isActive: activeIndex === 3, content: "Your Library", SvgIcon: SvgIconAssests.SVG_COMPONENTS.FOLDER_ICON_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.FOLDER_ACTIVE_ICON_SVG
            },
            {
                isActive: activeIndex === 4, content: "Setting", SvgIcon: SvgIconAssests.SVG_COMPONENTS.SETTING_ICON_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.SETTING_ACTIVE_ICON_SVG
            },
            {
                isActive: activeIndex === 5, content: "Logout", SvgIcon: SvgIconAssests.SVG_COMPONENTS.LOGOUT_ICON_SVG,
                SvgActiveIcon: SvgIconAssests.SVG_COMPONENTS.LOGOUT_ACTIVE_ICON_SVG
            }

        ]

        return(
            <StyledDiv isMenuOpen={isMenuOpen} >
                <StyledNav>
                    {
                        navLinks.map((link, index) => (
                            <MenuItem 
                            key={index} 
                            content={link.content} 
                            isActive={link.isActive} 
                            MenuIconSvg={link.isActive ? link.SvgActiveIcon :link.SvgIcon}
                            onClick={() => setActiveIndex(index)}/>
                        ))
                    }
                </StyledNav>
                <StyledSvgImgWrapper>
                    <Images.IMAGES.MENUBAR_IMG/>
                </StyledSvgImgWrapper>
                
            </StyledDiv>
        );
        
    };

export {
    MenuBar
}