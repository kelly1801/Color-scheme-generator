import {Button, Header, Menu, PageContainer, SeedInput, SchemeContainer, ColorContainer, ColorNames} from "../components/styles/styledComponents"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import {useState} from "react";
export const Home = () => {
    const [mode, setMode] = useState('monochrome');
    const [seed, setSeed] = useState('#2f323a')
    const [scheme, setColors] = useState([
        {hex: {value: '#2f323a'}},
        {hex: {value: '#77567a'}},
        {hex: {value: '#c47ac0'}},
        {hex: {value: '#e39ec1'}},
        {hex: {value: '#debac0'}}
])


    async function getColor() {
        try {
            const response = await axios.get(` https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`);
            setColors(response.data.colors)
        } catch (error) {
            console.error(error);
        }
    }


   function handleChange(e) {
        const {value, name} = e.target
        name === 'seed' ? setSeed(value.slice(1)) :
            setMode(value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        getColor()
    }
    return (
        <PageContainer>
            <Header onSubmit={(e) => handleSubmit(e)}>

                <SeedInput type='color' name='seed' onChange={handleChange} />
                <Menu>

                 <summary>{mode} <KeyboardArrowDownIcon/></summary>
                    <div onClick={handleChange} >
                        <option value="monochrome">Monochrome</option>
                        <option value="monochrome-dark">Monochrome-dark</option>
                        <option value="monochrome-light">Monochrome-light</option>
                        <option value="analogic">Analogic</option>
                        <option value="complement">Complement</option>
                        <option value="analogic-complement">Analogic-complement</option>
                        <option value="triad">Triad</option>
                    </div>

                </Menu>
                <Button >Get Color Scheme</Button>
            </Header>

            <SchemeContainer>
                {
                   scheme.map((color, index) =>
                        <ColorContainer  key={index} bgColor={color.hex.value}/>
                    )
                }

                <ColorNames>
                    {
                     scheme.map((color, index) =>
                            <span key={index} >{color.hex.value}</span>
                        )
                    }
                </ColorNames>
            </SchemeContainer>

        </PageContainer>
    )
}