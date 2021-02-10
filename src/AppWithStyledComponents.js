import styled from '@emotion/styled/macro';

const breakpoints = {
  sm: 512,
  med: 768,
  lg: 1024
};

const Child = styled.div`
  color: tomato;
`;

const Parent = styled.div`
  ${Child} {
    color: springgreen;
  }
`;

const TitleHeader = styled.h1`
  background-color: lavenderblush;
  color: magenta;
  margin: 0;
  padding: 10px;
`;

const Button = styled.button`
  color: ${props => props.secondary ? 'royalblue' : 'snow'};
  background-color: ${props => props.secondary ? 'whitesmoke' : 'royalblue'};
  border: 2px solid ${props => props.borderColor ? props.borderColor : 'royalblue'};
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.secondary ? 'gainsboro' : 'dodgerblue'};
  }
  @media (max-width: ${breakpoints.med}px) {
    font-size: 32px;
    &:hover {
      background-color: forestgreen;
    }
  }
  @media (max-width: ${breakpoints.sm}px) {
    font-size: 48px;
  }
`;

function App() {
  return (
    <>
      <TitleHeader>Let's use styled components!</TitleHeader>
      <TitleHeader>Here's another styled header...</TitleHeader>
      <Button>Primary button</Button>
      <Button secondary borderColor="red">Secondary button</Button>
      <Child>The color here is tomato</Child>
      <Parent>
        <Child>Child nested in a Parent</Child>
      </Parent>
    </>
  );
}

export default App;
