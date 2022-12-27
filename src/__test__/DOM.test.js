import { fireEvent, render, screen, wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import Todos from '../pages/Todos';

const makeOptions = (level, name) => {
  return { level, name };
};
describe('Routing 테스트', () => {
  test('<App /> 렌더링시 / 경로로 렌더링 되나요?', async () => {
    const { getByRole } = render(<App />);

    const headingEl = getByRole('heading', makeOptions(1, '회원 가입'));
    expect(headingEl).toBeInTheDocument();
  });
  test('토큰이 없는 상태로 / 경로로 접근하면 <Home />이 렌더링 되나요?', async () => {
    const { getByRole } = render(
      <PublicRoute isLogin={null}>
        <Home />
      </PublicRoute>,
      { wrapper: BrowserRouter },
    );
    const headingEl = getByRole('heading', makeOptions(1, '회원 가입'));
    expect(headingEl).toBeInTheDocument();
  });
  test('토큰이 있는 상태로 /todo 경로로 접근하면 <Todos />가 렌더링 되나요?', async () => {
    const { getByRole } = render(
      <PrivateRoute isLogin="someToken">
        <Todos />
      </PrivateRoute>,
      { wrapper: BrowserRouter },
    );

    const headingEl = getByRole('heading', makeOptions(1, 'Todo list'));
    expect(headingEl).toBeInTheDocument();
  });
});
describe('컴포넌트 테스트', () => {});
