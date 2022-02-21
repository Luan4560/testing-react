import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  it('Should render list items', () => {
    const {getByText} = render(<App/>)

    expect(getByText('Luan')).toBeInTheDocument()
    expect(getByText('Cássia')).toBeInTheDocument()
    expect(getByText('Isac')).toBeInTheDocument()
  });

  it('should be able to add new item to list', () => {
    const {getByText} = render(<App/>)

    const addButton = getByText('Adicionar');
   
    userEvent.click(addButton)
    
    expect(getByText('Novo')).toBeInTheDocument()
  })
})