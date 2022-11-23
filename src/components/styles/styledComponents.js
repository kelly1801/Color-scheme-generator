import styled from "styled-components";

export const PageContainer = styled.main`
  height: 100vh;
  width: 100vw;
`
export const SeedInput = styled.input``

export const Button = styled.button`
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
padding: 0.5rem 1rem;
  cursor: pointer;
`
export const Menu = styled.details`

  height: 2rem;
  width: 80%;
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
position: relative;
summary {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
}
  
  div {

    background: #FFFFFF;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    width: 100%;
    padding: 1rem 2rem;
    position: absolute;
    z-index: 3;
    option {
      padding: 0.5rem 0;
      cursor: pointer;
    }
    
  }
`
export const Header = styled.header`
height: 5.6rem;
  width: 100%;
  background-color: #ffffff;
  color: #111827;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  align-items: center;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.15)
`
export const SchemeContainer = styled.section`

    width: 100%;
  background-color: aqua;
  height: calc(100vh - 5.6rem);
  display: flex;
  position: relative;
`

export const ColorContainer = styled.div`
height: 100%;
width: calc(100% / 5);
  background-color: ${props => props.bgColor};

`
export const ColorNames = styled.div`
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  height: 2.8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: center;
  span {
    width: calc(100% / 5);
    text-align: center;
  }
`