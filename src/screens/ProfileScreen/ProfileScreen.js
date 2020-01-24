import React from 'react';

import Layout from '../../components/Layout/Layout';
import { ProfileNav, ProfileHeader, ProfileTabs } from '../../components/Profile';
import { withAuthorisation } from '../../components/Auth';

const ProfileScreen = () => {
  return (
    <Layout>
      <ProfileHeader />
      <ProfileNav />
      <ProfileTabs />
    </Layout>
  );
};

export default withAuthorisation(ProfileScreen);
