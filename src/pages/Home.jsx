import {Button, Header, Menu, PageContainer, SeedInput, SchemeContainer, ColorContainer, ColorNames} from "../components/styles/styledComponents"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const Home = () => {

    function themeHandler(e){
    ;
        console.log(e.target.value)
    }
    return (
        <PageContainer>
            <Header>
                <SeedInput type='color'/>
                <Menu>

                    <summary>choose a theme <KeyboardArrowDownIcon/></summary>
                    <div onClick={(e) => themeHandler(e)} >

                        <option value="Monochrome">Monochrome
                        </option>
                        <option value="Monochrome-dark">Monochrome-dark</option>
                        <option value="Monochrome-light">Monochrome-light</option>
                        <option value="analogic">Analogic</option>
                        <option value="complement">Complement</option>
                        <option value="Analogic-complement">Analogic-complement</option>
                        <option value="Triad">Triad</option>
                    </div>

                </Menu>
                <Button>Get Color Scheme</Button>
            </Header>

            <SchemeContainer>
                <ColorContainer  bgColor='#2F323A'/>
                <ColorContainer  bgColor='#77567A'/>
                <ColorContainer  bgColor='#C47AC0'/>
                <ColorContainer  bgColor='#E39EC1'/>
                <ColorContainer  bgColor='#DEBAC0'/>
                <ColorNames>
                    <span>#2F323A</span>
                    <span>#77567A</span>
                    <span>#C47AC0</span>
                    <span>#E39EC1</span>
                    <span>#DEBAC0</span>
                </ColorNames>
            </SchemeContainer>

        </PageContainer>
    )
}