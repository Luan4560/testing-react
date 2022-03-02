import {   render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Component', () => {
  it('Should render list items', () => {
    const {getByText, rerender, queryByText} = render(<List initialItems={['Luan', 'Cássia', ]}/>)

    expect(getByText('Luan')).toBeInTheDocument()
    expect(getByText('Cássia')).toBeInTheDocument()
    expect(getByText('Isac')).toBeInTheDocument()

   rerender(<List initialItems={['Ludmila']}/> )

    expect(getByText('Ludmila')).toBeInTheDocument()
    expect(queryByText('Isac')).not.toBeInTheDocument()
    
  });

  it('should be able to add new item to list', async() => {
    const {getByText, getByPlaceholderText, findByText} = render(<List initialItems={[]}/>)

    const inputElement = getByPlaceholderText('Novo Item')
    const addButton = getByText('Adicionar');
   
    userEvent.type(inputElement, 'Novo')
    userEvent.click(addButton)
    
    expect(await findByText('Novo')).toBeInTheDocument()
  })

  it('should be able to remove item from list', async() => {
    const {queryByText, getAllByText} = render(<List initialItems={['Luan']}/>)

    const removeButton = getAllByText('Remover')
    userEvent.click(removeButton[0])
    
    await waitFor(() => {
      expect(queryByText('Luan')).not.toBeInTheDocument() 
    })
  })
})