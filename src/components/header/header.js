import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { navLinks, navLinkItem, navLinkText } from './header.module.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    query GetPrimaryMenu {
      wpMenuItem(locations: { eq: PRIMARY }) {
        menu {
          node {
            id
            name
            menuItems {
              nodes {
                id
                label
                parentId
                path
              }
            }
            slug
          }
        }
      }
    }
  `);

  const menu = data?.wpMenuItem?.menu?.node;
  const { name, menuItems } = menu;

  console.log('*** menu ', {
    data,
    name,
    menuItems,
    itemTest: data.wpMenuItem,
  });

  return (
    <nav>
      <ul className={navLinks}>
        {menuItems?.nodes.map((menuItem) => (
          <li key={menuItem.id} className={navLinkItem}>
            <Link to={menuItem.path} className={navLinkText}>
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
