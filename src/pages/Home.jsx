import {Button, Header, Menu, PageContainer, SeedInput, SchemeContainer, ColorContainer, ColorNames} from "../components/styles/styledComponents"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import {useState} from "react";
export const Home = () => {
    const [seed, setSeed] = useState('')
    const [mode, setMode] = useState('')
    const [colors, setColors] = useState([])


    async function getColor() {
        try {
            const response = await axios.get(` https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`);
           setColors(response.data.colors)
        } catch (error) {
            console.error(error);
        }
    }


    function themeHandler(e){

        setMode(e.target.value)
        console.log(mode)
        console.log(e.target.value)
    }
    function seedHandler(e) {
        setSeed(e.target.value.slice(1))

        console.log(seed)
    }
    return (
        <PageContainer>
            <Header>
                <SeedInput type='color' onChange={(e) => seedHandler(e)}/>
                <Menu>

                    <summary>choose a theme <KeyboardArrowDownIcon/></summary>

                    <div onClick={(e) => themeHandler(e)} >

                        <option value="monochrome">Monochrome
                        </option>
                        <option value="monochrome-dark">Monochrome-dark</option>
                        <option value="monochrome-light">Monochrome-light</option>
                        <option value="analogic">Analogic</option>
                        <option value="complement">Complement</option>
                        <option value="Analogic-complement">Analogic-complement</option>
                        <option value="Triad">Triad</option>
                    </div>

                </Menu>
                <Button onClick={getColor}>Get Color Scheme</Button>
            </Header>

            <SchemeContainer>
                {
                    colors.map((color) =>
                        <ColorContainer  bgColor={color.hex.value}/>
                    )
                }

                <ColorNames>
                    {
                        colors.map((color) =>
                            <span  >{color.hex.value}</span>
                        )
                    }
                </ColorNames>
            </SchemeContainer>

        </PageContainer>
    )
}