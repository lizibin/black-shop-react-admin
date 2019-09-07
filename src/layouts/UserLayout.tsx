import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';

import SelectLang from '@/components/SelectLang';
import { ConnectProps, ConnectState } from '@/models/connect';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';
import defaultSettings from '../../config/defaultSettings';
const { appName, desc, copyright, links } = defaultSettings;


export interface UserLayoutProps extends ConnectProps {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
}

const UserLayout: React.SFC<UserLayoutProps> = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);

  return (
    // <DocumentTitle
    //   title={getPageTitle({
    //     pathname: location.pathname,
    //     breadcrumb,
    //     formatMessage,
    //     ...props,
    //   })}
    // >
      <div className={styles.container}>
        {/* <div className={styles.lang}>
          <SelectLang />
        </div> */}
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                {/* <img alt="logo" className={styles.logo} src={logo} /> */}
                <span className={styles.title}>{appName}</span>
              </Link>
            </div>
            <div className={styles.desc}>{}</div>
          </div>
          {children}
        </div>
        {/* <DefaultFooter links={links}  copyright={copyright}/> */}
      </div>
    // </DocumentTitle>
  );
};

export default connect(({ settings }: ConnectState) => ({
  ...settings,
}))(UserLayout);
