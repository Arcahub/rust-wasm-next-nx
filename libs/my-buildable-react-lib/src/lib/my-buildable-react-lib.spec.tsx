import { render } from '@testing-library/react';

import MyBuildableReactLib from './my-buildable-react-lib';

describe('MyBuildableReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyBuildableReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
