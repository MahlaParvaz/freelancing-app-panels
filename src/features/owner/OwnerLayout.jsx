import AppLayout from '../../ui/AppLayout';
import CustomNavLink from '../../ui/CustomNavLink';
import { HiCollection, HiHome } from 'react-icons/hi';
import Sidebar from '../../ui/Sidebar';

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
