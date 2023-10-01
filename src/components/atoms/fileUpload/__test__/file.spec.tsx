import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { fileToJSON } from '../../../../helper/fileToJSON';
import { FileUpload } from '../index';



jest.mock('../../../../helper/fileToJSON', () => ({
  fileToJSON: jest.fn(),
}));

describe('FileUpload', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders FileUpload component correctly', () => {
    const { getByTestId } = render(<FileUpload name="test-file" description="Descrição" label="Label" accept=".json" onChange={() => {}} />);
    const label = getByTestId('file-upload-label')
    const description = getByTestId('file-upload-description')
    expect(label.textContent).toBe("Label");
    expect(description.textContent).toBe("Descrição");

  });

  test('updates file name in state on file selection', async () => {
   const { getByTestId } = render(<FileUpload name="test-file" description="Descrição" label="Label" accept=".json" onChange={() => {}} />);

    const inputFile = getByTestId('file-upload-input');
    const file = new File(['(conteúdo do arquivo)'], 'example.json', { type: 'application/json' });
    
    act(() => {
      fireEvent.change(inputFile!, { target: { files: [file] } });
    });

    expect(getByTestId('file-upload-file')).toBeInTheDocument();
  });



  test('does not call onChange function if no file is selected', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } =  render(<FileUpload name="test-file" description="Descrição" label="Label" accept=".json" onChange={onChangeMock} />);

    const inputFile = getByTestId('file-upload-input').closest('input');

    fireEvent.change(inputFile!, { target: { files: [] } });

    expect(fileToJSON).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
