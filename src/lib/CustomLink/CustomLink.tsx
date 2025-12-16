import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;

type CustomLinkProps = PropsWithChildren<LinkProps>;

const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return (
    <LinkWrapper>
      <Link {...props}>{children}</Link>
    </LinkWrapper>
  );
};

export default CustomLink;
