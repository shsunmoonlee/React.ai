import styled, { css } from 'styled-components';

const Wrapper = styled.div.attrs({
  // we can define static props
  // or we can define dynamic ones
  // margin: props => props.size || '1em',
  // padding: props => props.size || '1em'
})`
  display: flex;
  justify-content: space-between;
  padding: 2.5em 0;
  border-top: 1px solid #666;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    a {
      line-height: 3;
    }
  }
`;

export default Wrapper;
