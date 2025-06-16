import styled from 'styled-components'

const Button = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? 'red' : 'white')};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`

type Props = {
  isActive: boolean
  onClick: () => void
}

const FavoriteButton = ({ isActive, onClick }: Props) => {
  return (
    <Button onClick={onClick} $active={isActive} title="Добавить в избранное">
      {isActive ? '❤️' : '🤍'}
    </Button>
  )
}

export default FavoriteButton
