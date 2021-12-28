import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reduxStore } from './services/redux/ReduxIndex'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';

describe('App Test', () => {

  let page = (
    <React.StrictMode>
      <Provider store={reduxStore}>
        <App/>
      </Provider>
    </React.StrictMode>
  )

  it('Renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(page, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders App correctly', () => {
    const div = renderer.create(page).toJSON();
    expect(div).toMatchSnapshot();
  });
})