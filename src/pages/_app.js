import App from 'next/app';
import "../css/style.scss";
import { useState } from 'react';

const MyComponent = ({ children }) => {
  const [client, setClient] = useState(undefined);

  if (!client) {
    console.log('initialize client...');
    setClient(1);
  }

  return (<>{children}</>);
}

class MyApp extends App {
  render() {
    console.log('MyApp');
    const { Component, pageProps } = this.props;
    return (
      <MyComponent>
        <Component {...pageProps} />
      </MyComponent>
    );
  }
}

export default MyApp;
