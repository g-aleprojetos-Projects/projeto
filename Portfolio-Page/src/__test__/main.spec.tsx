import ReactDOM from 'react-dom';
import {shouldForwardProp} from '../main.tsx';
import isPropValid from '@emotion/is-prop-valid';

jest.mock('@emotion/is-prop-valid', () => jest.fn());

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

describe('Application root', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../main.tsx');
    expect(ReactDOM.render).toBeDefined();
  });

  describe('shouldForwardProp', () => {
    test('Deve chamar o "isPropValid" com a propriedade fornecida', () => {
      const prop = 'someProp';
      shouldForwardProp(prop);
      expect(isPropValid).toHaveBeenCalledWith(prop);
    });

    test('Deve retornar o resultado do isPropValid', () => {
      const expectedResult = true;
      (isPropValid as jest.Mock).mockReturnValueOnce(expectedResult);
      const prop = 'someProp';
      const result = shouldForwardProp(prop);

      expect(result).toBe(expectedResult);
    });
  });
});
