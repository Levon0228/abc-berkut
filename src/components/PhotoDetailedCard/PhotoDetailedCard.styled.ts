import { styled } from "styled-components"

const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 70vh;
  border-radius: 8px;
  object-fit: cover;
`

const Description = styled.div`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`
const Title = styled.div`
  font-size: 14px;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Author = styled.div`
  font-size: 12px;
  color: #9ca3af;
`

export {Author, Description, Img, Title, Wrapper}