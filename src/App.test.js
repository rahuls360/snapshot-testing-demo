import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App, { Child } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('snapshot testing', () => {
  it('should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Child correctly', () => {
    const tree = renderer.create(<Child />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});