import { styled } from "styled-components"
import coverImage from '../../assets/cover.png'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;display: flex;
  flex-direction: column;
  align-items: center;
 
`
const Cover = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${coverImage});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`
export {Container, Cover, SearchInput}