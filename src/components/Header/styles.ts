import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  route: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        &.List {
          border-bottom: ${props =>
            props.route === '/' ? '2px solid #FF872C' : 0};
        }

        &.Import {
          border-bottom: ${props =>
            props.route === '/import' ? '2px solid #FF872C' : 0};
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
