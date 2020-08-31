/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

// testting theame provider
describe('<MyComponent />', () => {
  let mount;

  function MySuccessButton({ children }) {
    return (
      <ThemeProvider theme={{ success: { main: '#fff' } }}>
        {children}
      </ThemeProvider>
    );
  }

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<MockedTheme><MySuccessButton /></MockedTheme>);
    expect(wrapper).toBeTruthy();
  });

  it('Should exist', () => {
    expect(ThemeProvider).toBeTruthy();
  });
});
