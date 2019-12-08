import React from 'react';

import Container from '../../components/Container/Container';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileNav from '../../components/profile/ProfileNav';
import ProfileTabs from '../../components/profile/ProfileTabs';

export default function ProfileScreen() {
  return (
    <Container className="flex-col py-8">
      <ProfileHeader />
      <ProfileNav />
      <ProfileTabs />
    </Container>
  );
}
