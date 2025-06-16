import styled from 'styled-components'

// const Card = styled.div`
//   position: relative;
//   background: white;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
//   transition: box-shadow 0.2s;

//   &:hover {
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//   }
// `

// const ImageWrapper = styled.div`
//   width: 100%;
//   height: 200px;
//   overflow: hidden;
// `

// const StyledImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// `

// const Content = styled.div`
//   padding: 16px;
// `

// const Title = styled.div`
//   font-size: 14px;
//   color: #374151;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

// const Author = styled.div`
//   font-size: 12px;
//   color: #9ca3af;
// `

// const StarButton = styled.button<{ active: boolean }>`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   font-size: 24px;
//   color: ${(props) => (props.active ? '#facc15' : '#d1d5db')};
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.1);
//   }
// `
const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 300px;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export { Card, Img }
